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
    MusicManagerArtists = require('./components/music_manage/artists'),
    MusicManagerRecordLabel = require('./components/music_manage/labels'),

    MyEarnings = require('./components/earnings'),
    MyEarningsSongs = require('./components/earnings/songs'),
    MyEarningsAlbums = require('./components/earnings/albums'),
    MyEarningsArtists = require('./components/earnings/artists'),
    MyEarningsLabels = require('./components/earnings/labels'),

    Signup = require('./components/signup'),
    Signin = require('./components/signin'),

    MusicManagerAlbum = require('./components/music_manage_album'),
    MusicManagerAlbumSongs = require('./components/music_manage_album/songs'),
    MusicManagerAlbumAlbumInfo = require('./components/music_manage_album/albuminfo'),

    MusicManagerArtist = require('./components/music_manage_artist'),
    MusicManagerArtistSongs = require('./components/music_manage_artist/songs'),
    MusicManagerArtistInfo = require('./components/music_manage_artist/artistinfo'),

    MusicTrackpage = require('./components/music_trackpage'),
    MusicTrackpageLatestTracks = require('./components/music_trackpage/latest_tracks'),
    MusicTrackpageMostDownloaded = require('./components/music_trackpage/most_downloaded'),
    MusicTrackpageTabLink = require('./components/music_trackpage/tab_link'),

    // To be deleted
    TempAdmin = require('./components/admin'),

    routes = (
        <Route path='/' handler={AppWrapper}>
            <Route path='/' handler={Layout}>
                <DefaultRoute name='home' handler={Home} />

                    <Route name='temp.admin' path='tempadmin' handler={TempAdmin} />
                <Route name='my.account' path='/my_account' handler={MyAccount}>
                    <DefaultRoute name='my.account.settings' handler={MyAccountSettings} />
                    <Route name='my.account.upgrade' path='upgrade' handler={MyAccountUpgrade} />
                    <Route name='my.account.security' path='security' handler={MyAccountSecurity} />
                </Route>

                <Route name='music.manager' path='/manage_music' handler={MusicManager}>
                    <Route name='music.manager.songs' path='songs' handler={MusicManagerSongs} />
                    <Route name='music.manager.albums' path='albums' handler={MusicManagerAlbums} />
                    <Route name='music.manager.artists' path='artists' handler={MusicManagerArtists} />
                    <Route name='music.manager.labels' path='labels' handler={MusicManagerRecordLabel} />
                </Route>

                <Route name='music.manager.album' path='/manage_music/album/:id' handler={MusicManagerAlbum}>
                    <Route name='music.manager.album.songs' path='songs' handler={MusicManagerAlbumSongs} />
                    <Route name='music.manager.album.albuminfo' path='albuminfo' handler={MusicManagerAlbumAlbumInfo} />
                </Route>

                <Route name='music.manager.artist' path='/manage_music/artist' handler={MusicManagerArtist}>
                    <Route name='music.manager.artist.songs' path='songs' handler={MusicManagerArtistSongs} />
                    <Route name='music.manager.artist.info' path='artistinfo' handler={MusicManagerArtistInfo} />
                </Route>

                <Route name='my.earnings' path='/earnings' handler={MyEarnings}>
                    <Route name='my.earnings.songs' path='songs' handler={MyEarningsSongs} />
                    <Route name='my.earnings.albums' path='albums' handler={MyEarningsAlbums} />
                    <Route name='my.earnings.artists' path='artists' handler={MyEarningsArtists} />
                    <Route name='my.earnings.labels' path='labels' handler={MyEarningsLabels} />
                </Route>

                <Route name='music.trackpage' path='/music_trackpage' handler={MusicTrackpage}>
                    <Route name='music.trackpage.tracks' path='latest_tracks' handler={MusicTrackpageLatestTracks} />
                    <Route name='music.trackpage.downloaded' path='most_downloaded' handler={MusicTrackpageMostDownloaded} />
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
