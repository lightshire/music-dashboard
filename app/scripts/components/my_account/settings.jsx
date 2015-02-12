'use strict';
var React = require('react/addons'),
    MyAccountSettings = React.createClass({
        render: function() {
            return (
                <div className='c_my_account_settings'>
                    <div className='thumb'>
                        <div><img className='circle' src='http://placehold.it/100x100'/></div>
                        <div className='t_name'><h5>George Vanous</h5></div>
                    </div>
                    <div className='username'>
                        <div><b>Username</b></div>
                        <div className='u_username'>george.vanous</div>
                    </div>
                    <div className='password'>
                        <div><b>Password</b></div>
                        <div className='p_password'><a href='#'>Change Password</a></div>
                    </div>
                    <div className='email'>
                        <div><b>Email</b></div>
                        <div className='e_email'>george@freedom.tm</div>
                    </div>
                </div>
            );
        }
    });
module.exports = MyAccountSettings;
