'use strict';
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    HistoryLocation = Router.HistoryLocation,
    AppWrapper = require('./components/app_wrapper'),
    Layout = require('./components/layouts/layout'),
    Home = require('./components/home'),
    MyAccount = require('./components/my_account'),
    MyAccountSettings = require('./components/my_account/settings'),
    MyAccountUpgrade = require('./components/my_account/upgrade'),
    MyAccountSecurity = require('./components/my_account/security'),
    MusicManager = require('./components/music_manage'),
    MusicManagerSongs = require('./components/music_manage/songs'),
    MusicManagerAlbums = require('./components/music_manage/albums'),
    MusicManagerAlbumTracks = require('./components/music_manage/album_tracks'),
    MyEarnings = require('./components/earnings'),
    MyEarningsSongs = require('./components/earnings/songs'),
    MyEarningsAlbums = require('./components/earnings/albums'),
    MyEarningsAlbumTracksEarnings = require('./components/earnings/album_tracks_earnings'),
    Admin = require('./components/admin'),
    AdminTracks = require('./components/admin/tracks'),
    AdminAlbums = require('./components/admin/albums'),
    AdminArtists = require('./components/admin/artists'),
    AdminLabels = require('./components/admin/labels'),
    AdminLabelsEarnings = require('./components/admin/labels_earnings'),
    AdminArtistEarnings = require('./components/admin/artists_earnings'),
    Signup = require('./components/signup'),
    Signin = require('./components/signin'),
    MusicManagerAlbum = require('./components/music_manage_album'),
    MusicManagerAlbumSongs = require('./components/music_manage_album/songs'),
    MusicManagerAlbumAlbumInfo = require('./components/music_manage_album/albuminfo'),
    MusicManagerArtist = require('./components/music_manage_artist'),
    MusicManagerArtistSongs = require('./components/music_manage/songs'),
    MusicManagerArtistAlbums = require('./components/music_manage/albums'),
    routes = (
        <Route path='/' handler={AppWrapper}>
            <Route path='/' handler={Layout}>
                <DefaultRoute name='home' handler={Home} />

                <Route name='my.account' path='/my_account' handler={MyAccount}>
                    <DefaultRoute name='my.account.settings' handler={MyAccountSettings} />
                    <Route name='my.account.upgrade' path='upgrade' handler={MyAccountUpgrade} />
                    <Route name='my.account.security' path='security' handler={MyAccountSecurity} />
                </Route>

                <Route name='music.manager' path='/manage_music' handler={MusicManager}>
                    <Route name='music.manager.songs' path='songs' handler={MusicManagerSongs} />
                    <Route name='music.manager.albums' path='albums' handler={MusicManagerAlbums} />
                </Route>

                <Route name="music.manager.album" path="/manage_music/album/:id" handler={MusicManagerAlbum}>
                    <Route name="music.manager.album.songs" path="songs" handler={MusicManagerAlbumSongs} />
                    <Route name="music.manager.album.albuminfo" path="albuminfo" handler={MusicManagerAlbumAlbumInfo} />
                </Route>
                
                <Route name="music.manager.artist" path="/manage_music/artist/:id" handler={MusicManagerArtist} >
                    <Route name="music.manager.artist.songs" path="songs" handler={MusicManagerArtistSongs} />
                    <Route name="music.manager.artist.albums" path="albums" handler={MusicManagerArtistAlbums} />
                </Route>

                <Route name='my.earnings' path='/earnings' handler={MyEarnings}>
                    <Route name='my.earnings.songs' path='songs' handler={MyEarningsSongs} />
                    <Route name='my.earnings.albums' path='albums' handler={MyEarningsAlbums} />
                    <Route name='my.earnings.album_tracks_earnings' path='albums/album1' handler={MyEarningsAlbumTracksEarnings} />
                </Route>

                <Route name='admin' path='/admin' handler={Admin}>
                    <Route name='admin.tracks' path='tracks' handler={AdminTracks} />
                    <Route name='admin.albums' path='albums' handler={AdminAlbums} />
                    <Route name='admin.artists' path='artists' handler={AdminArtists} />
                    <Route name='admin.labels' path='labels' handler={AdminLabels} />
                    <Route name='admin.labels_earnings' path='record_labels_earnings' handler={AdminLabelsEarnings} />
                    <Route name='admin.artists_earnings' path='artists_earnings' handler={AdminArtistEarnings} />
                </Route>


            </Route>

            <Route name='signup' path='/signup' handler={Signup} />
            <Route name='signin' path='/signin' handler={Signin} />
        </Route>
    );
    exports.start = function() {
        Router.run(routes, HistoryLocation, function (Handler) {
            React.render(<Handler />, document.getElementById('content'));
        });
    };
