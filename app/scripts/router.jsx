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

    MyEarnings = require('./components/earnings'),
    MyEarningsSongs = require('./components/earnings/songs'),
    MyEarningsAlbums = require('./components/earnings/albums'),
    MyEarningsArtists = require('./components/earnings/artists'),
    MyEarningsLabels = require('./components/earnings/labels'),

    AdminMyEarningsSongs = require('./components/earnings/admin/songs'),
    AdminMyEarningsAlbums = require('./components/earnings/admin/albums'),
    AdminMyEarningsArtists = require('./components/earnings/admin/artists'),
    AdminMyEarningsLabels = require('./components/earnings/admin/labels'),

    Signup = require('./components/signup'),
    Signin = require('./components/signin'),

    MusicManagerAlbum = require('./components/music_manage_album'),
    MusicManagerAlbumSongs = require('./components/music_manage_album/songs'),
    MusicManagerAlbumAlbumInfo = require('./components/music_manage_album/albuminfo'),
    MusicManagerArtist = require('./components/music_manage_artist'),
    MusicManagerArtistSongs = require('./components/music_manage/songs'),
    MusicManagerArtistAlbums = require('./components/music_manage/albums'),

    MusicManagerRecordLabel = require('./components/music_manage_record_label'),
    MusicManagerRecordLabelSongs = require('./components/music_manage/songs'),
    MusicManagerRecordLabelAlbums = require('./components/music_manage/albums'),
    MusicManagerRecordLabelArtists = require('./components/music_manage_record_label/artists'),

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

                <Route name="music.manager.record.label" path="/manage_music/record_label/:id" handler={MusicManagerRecordLabel} >
                    <Route name="music.manager.record.label.songs" path="songs" handler={MusicManagerRecordLabelSongs} />
                    <Route name="music.manager.record.label.albums" path="albums" handler={MusicManagerRecordLabelAlbums} />
                    <Route name="music.manager.record.label.artists" path="artists" handler={MusicManagerRecordLabelArtists} />
                </Route>

                <Route name='my.earnings' path='/earnings' handler={MyEarnings}>
                    <Route name='my.earnings.songs' path='songs' handler={MyEarningsSongs} />
                    <Route name='my.earnings.albums' path='albums' handler={MyEarningsAlbums} />
                    <Route name='my.earnings.artists' path='artists' handler={MyEarningsArtists} />
                    <Route name='my.earnings.labels' path='labels' handler={MyEarningsLabels} />

                    <Route name='admin.my.earnings.songs' path='admin/songs' handler={AdminMyEarningsSongs} />
                    <Route name='admin.my.earnings.albums' path='admin/albums' handler={AdminMyEarningsAlbums} />
                    <Route name='admin.my.earnings.artists' path='admin/artists' handler={AdminMyEarningsArtists} />
                    <Route name='admin.my.earnings.labels' path='admin/labels' handler={AdminMyEarningsLabels} />
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
