'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    SessionStore = require('../../stores/session_stores'),
    SessionActions = require('./../../actions/session_actions'),
    Link = Router.Link,
    getStateFromStore = function() {
        return {
            isLoggedIn: SessionStore.isLoggedIn(),
            user: SessionStore.getUser()
        };
    },
    handleLogout = function() {
        SessionActions.logout(function(){
        });
    },
    Login = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = SessionStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var log = '';

            if (this.state.isLoggedIn) {
                log = (
                    <div>
                        <span className='user'>Welcome {this.state.user}!</span>
                        <Link to='home' className='login-btn' onClick={handleLogout}>
                            Log out
                        </Link>
                    </div>
                );
            } else {
                log = (
                    <Link to='signin' className='login-btn'>
                        Log in
                    </Link>
                );
            }

            return (
                <div className='login'>
                    {log}
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });
module.exports = Login;
