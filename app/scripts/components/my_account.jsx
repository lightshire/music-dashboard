'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Constrainable = require('./mixins/constrainable'),
    MyAccount = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        render: function() {
            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>My Account</h4>
                            <div className='c_links'>
                                <Link to='my.account.settings' className='waves-effect waves-white btn-flat white-text c_tabs'>Account Settings</Link>
                                <Link to='my.account.security' className='waves-effect waves-white btn-flat white-text c_tabs'>Security</Link>
                                <Link to='my.account.upgrade' className='waves-effect waves-white btn-flat white-text c_tabs'>Upgrade</Link>
                            </div>
                            <div className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red lighten-2'>
                                    <i className='mdi-hardware-keyboard-arrow-up'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });
module.exports = MyAccount;
