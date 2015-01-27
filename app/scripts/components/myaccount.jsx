var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var MyAccount = React.createClass({
    render: function() {
        return (
            <div>
                <h1>My Account</h1>
                <Link to="my.account.settings" className="btn">Settings</Link>
                <Link to="my.account.upgrade" className="btn">Upgrade</Link>
                <div>
                <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = MyAccount;
