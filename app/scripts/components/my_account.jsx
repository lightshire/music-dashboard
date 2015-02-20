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

            var my_account_settings = (<Link to='my.account.settings' className='waves-effect waves-white btn-flat white-text c-tabs'>Account Settings</Link>),
                my_account_security = (<Link to='my.account.security' className='waves-effect waves-white btn-flat white-text c-tabs'>Security</Link>),
                my_account_upgrade = (<Link to='my.account.upgrade' className='waves-effect waves-white btn-flat white-text c-tabs'>Upgrade</Link>),
                account_list = '';

            if (this.hasAccess(['admin'])) {
                account_list = (
                    <ul className='tabs'>
                        <li className='tab col s6'>{my_account_settings}</li>
                        <li className='tab col s6'>{my_account_security}</li>
                    </ul>
                );
            } else if (this.hasAccess(['record_label'])) {
                account_list = (
                    <ul className='tabs'>
                        <li className='tab col s6'>{my_account_settings}</li>
                        <li className='tab col s6'>{my_account_security}</li>
                    </ul>
                );
            } else if (this.hasAccess(['general_user'])) {
                account_list = (
                    <ul className='tabs'>
                        <li className='tab col s4'>{my_account_settings}</li>
                        <li className='tab col s4'>{my_account_security}</li>
                        <li className='tab col s4'>{my_account_upgrade}</li>
                    </ul>
                );
            } else if (this.hasAccess(['artist'])) {
                account_list = (
                    <ul className='tabs'>
                        <li className='tab col s4'>{my_account_settings}</li>
                        <li className='tab col s4'>{my_account_security}</li>
                        <li className='tab col s4'>{my_account_upgrade}</li>
                    </ul>
                );
            }
            
            return (
                <div className='c-body'>
                    <div className='c-header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>My Account</h4>
                            <div className='c-links'>
                                <div className="row">
                                    <div className="col s12">
                                        {account_list}
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                    <div className='container c-main-container z-depth-1'>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });
module.exports = MyAccount;
