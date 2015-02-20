'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link,
    Login = React.createClass({
        render: function() {
            return (
                <div className='login'>
                    <Link to='signin' className='login-btn'>Log in</Link>
                </div>
            );
        }
    });
module.exports = Login;
