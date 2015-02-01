'use strict';
var React = require('react');

var MyAccountSettings = React.createClass({
    render: function() {
        return (
            <div className="c_my_account_settings">
                <div className="c_my_account_settings_header row">
                    <div className="col s2">
                        <img src="http://placehold.it/100x100"/>
                    </div>
                    <div className="col s10">
                        <h5>George Vanous</h5>
                    </div>
                </div>
                <div className="c_my_account_settings_username row">
                    <div className="col s3"><span><b>Username</b></span></div>
                    <div className="col s9"><span>george.vanous</span></div>
                </div>
                <div className="c_my_account_settings_password row">
                    <div className="col s3"><span><b>Password</b></span></div>
                    <div className="col s9"><span><a href="#">Change Password</a></span></div>
                </div>
                <div className="c_my_account_settings_email row">
                    <div className="col s3"><span><b>Email</b></span></div>
                    <div className="col s9"><span>george@freedom.tm</span></div>
                </div>
            </div>
        );
    }
});

module.exports = MyAccountSettings;
