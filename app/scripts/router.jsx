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
    MyEarningsAlbumTracksEarnings = require('./components/earnings/album_tracks_earnings'),
    Admin = require('./components/admin'),
    AdminTracks = require('./components/admin/tracks'),
    AdminAlbums = require('./components/admin/albums'),
    AdminArtists = require('./components/admin/artists'),
    AdminLabels = require('./components/admin/labels'),
    Signup = require('./components/signup'),
    Signin = require('./components/signin'),
    MusicManagerAlbum = require('./components/music_manage_album'),
    MusicManagerAlbumSongs = require('./components/music_manage_album/songs'),
    MusicManagerAlbumAlbumInfo = require('./components/music_manage_album/albuminfo'),
    MusicManagerArtist = require('./components/music_manage_artist'),
    MusicManagerArtistSongs = require('./components/music_manage/songs'),
    MusicManagerArtistAlbums = require('./components/music_manage/albums'),
    routes = (
        <Route path="/" handler={AppWrapper}>
            <Route path="/" handler={Layout}>
                <DefaultRoute name="home" handler={Home} />
                <Route name="my.account" path="/my_account" handler={MyAccount}>
                    <DefaultRoute name="my.account.settings" handler={MyAccountSettings} />
                    <Route name="my.account.upgrade" path="/my_account/upgrade" handler={MyAccountUpgrade} />
                    <Route name="my.account.security" path="/my_account/security" handler={MyAccountSecurity} />
                </Route>
                <Route name="music.manager" path="/manage_music" handler={MusicManager}>
                    <Route name="music.manager.songs" path="/manage_music/songs" handler={MusicManagerSongs} />
                    <Route name="music.manager.albums" path="/manage_music/albums" handler={MusicManagerAlbums} />
                </Route>
                <Route name="my.earnings" path="/earnings" handler={MyEarnings}>
                    <Route name="my.earnings.songs" path="/earnings/songs" handler={MyEarningsSongs} />
                    <Route name="my.earnings.albums" path="/earnings/albums" handler={MyEarningsAlbums} />
                    <Route name="my.earnings.album_tracks_earnings" path="/earnings/albums/album1" handler={MyEarningsAlbumTracksEarnings} />
                </Route>
                <Route name="admin" path="/admin" handler={Admin}>
                    <Route name="admin.tracks" path="/admin/tracks" handler={AdminTracks} />
                    <Route name="admin.albums" path="/admin/albums" handler={AdminAlbums} />
                    <Route name="admin.artists" path="/admin/artists" handler={AdminArtists} />
                    <Route name="admin.labels" path="/admin/labels" handler={AdminLabels} />
                </Route>
            </Route>
            <Route name="signup" path="/signup" handler={Signup} />
            <Route name="signin" path="/signin" handler={Signin} />
            <Route name="music.manager.album" path="/manage_music/album/:id" handler={MusicManagerAlbum}>
                <Route name="music.manager.album.songs" path="songs" handler={MusicManagerAlbumSongs} />
                <Route name="music.manager.album.albuminfo" path="albuminfo" handler={MusicManagerAlbumAlbumInfo} />
            </Route>
            <Route name="music.manager.artist" path="/manage_music/artist/:id" handler={MusicManagerArtist} >
                <Route name="music.manager.artist.songs" path="songs" handler={MusicManagerArtistSongs} />
                <Route name="music.manager.artist.albums" path="/manage_music/artist/:id/albums" handler={MusicManagerArtistAlbums} />
            </Route>
        </Route>
    );

exports.start = function() {
    Router.run(routes, HistoryLocation, function (Handler) {
        React.render(<Handler />, document.getElementById('content'));
    });
};
