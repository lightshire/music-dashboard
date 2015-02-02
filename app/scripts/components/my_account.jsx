'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    MyAccount = React.createClass({
        render: function() {
            return (
                <div className='c_body'>
                    <div className="c_header z-depth-1">
                        <div className="container">
                            <h4 className="white-text">My Account</h4>
                            <div className="c_links">
                                <Link to="my.account.settings" className="waves-effect waves-white btn-flat white-text c_tabs">Account Settings</Link>
                                <Link to="my.account.security" className="waves-effect waves-white btn-flat white-text c_tabs">Security</Link>
                                <Link to="my.account.upgrade" className="waves-effect waves-white btn-flat white-text c_tabs">Upgrade</Link>
                                <a className="btn-floating btn-large waves-effect waves-light red lighten-2 c_my_account_scrollup_button"><i className="mdi-hardware-keyboard-arrow-up"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="container c_main_container z-depth-1">
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });

module.exports = MyAccount;
