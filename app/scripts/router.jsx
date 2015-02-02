'use strict';
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    HistoryLocation = Router.HistoryLocation,
    Layout = require('./components/layouts/layout'),
    Home = require('./components/home'),
    MyAccount = require('./components/my_account'),
    MyAccountSettings = require('./components/my_account/settings'),
    MyAccountUpgrade = require('./components/my_account/upgrade'),
    MyAccountSecurity = require('./components/my_account/security'),
    MusicManager = require('./components/music_manage'),
    MusicManagerSongs = require('./components/music_manage/songs'),
    MusicManagerAlbums = require('./components/music_manage/albums'),
    routes = (
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
        </Route>
    );

exports.start = function() {
    Router.run(routes, HistoryLocation, function (Handler) {
        React.render(<Handler />, document.getElementById('content'));
    });
};
