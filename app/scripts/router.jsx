var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var HistoryLocation = Router.HistoryLocation;

var Layout = require('./components/layout');
var Home = require('./components/home');
var MyAccount = require('./components/myaccount');
var MyAccountSettings = require('./components/myaccountsettings');
var MyAccountUpgrade = require('./components/myaccountupgrade');
var MyAccountSecurity = require('./components/myaccountsecurity');
var MusicManager = require('./components/musicmanager');
var MusicManagerSongs = require('./components/musicmanagersongs');
var MusicManagerAlbums = require('./components/musicmanageralbums');


var routes = (
    <Route path="/" handler={Layout}>
        <DefaultRoute name="home" handler={Home} />
        <Route name="my.account" path="/my_account" handler={MyAccount}>
            <DefaultRoute name="my.account.settings" handler={MyAccountSettings} />
            <Route name="my.account.upgrade" path="/my_account/upgrade" handler={MyAccountUpgrade} />
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
}
