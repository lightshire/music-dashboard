var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    AppWrapper = React.createClass({
        render : function() {
            return (<RouteHandler />);
        }
    });
module.exports = AppWrapper;
