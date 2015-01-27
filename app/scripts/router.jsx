var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var HistoryLocation = Router.HistoryLocation;

var Layout = require('./components/layout');
var Home = require('./components/home');

var routes = (
    <Route path="/" handler={Layout}>
        <DefaultRoute name="home" handler={Home} />
    </Route>
);

exports.start = function() {
    Router.run(routes, HistoryLocation, function (Handler) {
        React.render(<Handler />, document.getElementById('content'));
    });
}
