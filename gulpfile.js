'use strict';
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var del         = require('del');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var modRewrite  = require('connect-modrewrite');

var env = 'dev';

gulp.task('clean:dev', function() {
  return del(['.tmp']);
});

gulp.task('clean:dist', function() {
  return del(['dist']);
});

gulp.task('scripts', function() {
  var bundler = browserify('./app/scripts/app.js', {
    extensions: ['.jsx'],
    debug: env === 'dev'
  }).transform('reactify');

  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('.tmp/scripts'));
});

gulp.task('sass', function() {
  return gulp.src('app/styles/**/*.scss')
        .pipe($.plumber())
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size())
        .pipe($.filter('**/*.css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('imagemin', function() {
  return gulp.src('app/images/*')
    .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copy', function() {
  gulp.src(['app/font/**/*'])
    .pipe(gulp.dest('dist/font'));

  gulp.src(['app/images/**/*'])
    .pipe(gulp.dest('dist/images'));    

  return gulp.src(['app/*.txt', 'app/*.ico'])
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle', function () {
  var assets = $.useref.assets({searchPath: '{.tmp,app}'});
  var jsFilter = $.filter(['**/*.js']);
  var cssFilter = $.filter(['**/*.css']);
  var htmlFilter = $.filter(['*.html']);

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(jsFilter)
    .pipe($.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe($.minifyCss())
    .pipe(cssFilter.restore())
    .pipe(htmlFilter)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(htmlFilter.restore())
    .pipe($.revAll({ ignore: [/^\/favicon.ico$/g, '.html', /^\/font/g] }))
    .pipe($.revReplace())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('webserver', function(cb) {
  browserSync({
        server: {
            baseDir: ['.tmp', 'app'],
            middleware: [
                modRewrite([
                    '^[^\\.]*$ /index.html [L]'
                ])
            ]
        },
        port: 9000
    });

    return cb();
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('serve', function() {
  runSequence('clean:dev', ['scripts', 'sass'], 'webserver');

  gulp.watch('app/*.html');

  gulp.watch('app/scripts/**/*.js', ['scripts']);

  gulp.watch('app/scripts/**/*.jsx', ['scripts']);

  gulp.watch('app/styles/**/*.scss', ['sass']);

  gulp.watch('.tmp/**/*.js', ['bs-reload']);
});

gulp.task('build', function() {
  env = 'prod';

  runSequence(['clean:dev', 'clean:dist'],
              ['scripts', 'sass', 'imagemin', 'copy'],
              'bundle');
});
