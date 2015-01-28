var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var MyAccount = React.createClass({
    render: function() {
        return (
            <div className='c_body'>
                <div className="c_header">
                    <div className="container">
                        <h4 className="white-text">My Account</h4>
                        <div className="c_links">
                            <Link to="my.account.settings" className="waves-effect waves-white btn-flat white-text c_tabs">Account Settings</Link>
                            <Link to="my.account.security" className="waves-effect waves-white btn-flat white-text c_tabs">Security</Link>
                            <Link to="my.account.upgrade" className="waves-effect waves-white btn-flat white-text c_tabs">Upgrade</Link>
                        </div>
                    </div>
                </div>
                <div className="container c_main_container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = MyAccount;
