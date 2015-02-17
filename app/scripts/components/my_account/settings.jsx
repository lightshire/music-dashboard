'use strict';
var React = require('react/addons'),
    MyAccountSettings = React.createClass({
        render: function() {
            return (
                <div className='c_my_account_settings'>
                    <div className='row'>
                        <div className='col l3 m5 s12'>
                            <img className='circle' src='http://placehold.it/100x100'/>
                        </div>
                        <div className='c_name_div col l9 m7 s12'>
                            <h5 className='c_name'>George Vanous</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col l3 m5 s12'>
                            <b>Username</b>
                        </div>
                        <div className='col l9 m7 s12'>
                            george.vanous
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col l3 m5 s12'>
                            <b>Password</b>
                        </div>
                        <div className='col l9 m7 s12'>
                            <a href='#'>Change Password</a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col l3 m5 s12'>
                            <b>Email</b>
                        </div>
                        <div className='col l9 m7 s12'>
                            george@freedom.tm
                        </div>
                    </div>
                </div>
            );
        }
    });
module.exports = MyAccountSettings;
