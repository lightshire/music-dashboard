'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    TrackActions = require('../actions/track_actions'),
    Search = require('./helpers/search'),
    Modal = require('./helpers/modal'),
    InputField = require('./helpers/textfield'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    SessionStore = require('../stores/session_stores'),
    SessionActions = require('../actions/session_actions'),
    SignIn = React.createClass({
        mixins: [Router.Navigation],
        handleSignIn: function(e) {
            e.preventDefault();
            var username = this.refs.username.refs.input.getDOMNode().value,
                password = this.refs.password.refs.input.getDOMNode().value;

            SessionActions.attemptLogin(username, password, function() {
                if(SessionStore.isLoggedIn()) {
                    this.transitionTo('my.account');
                }
            }.bind(this));
        },
        render: function() {
            return (
                <div className='container'>
                    <form action='#' onSubmit={this.handleSignIn}>
                        <div className='row'>
                            <div className='col s2'>&nbsp;</div>
                            <div className='col s8'>
                                <div className='card'>
                                    <div className='c_signup'>
                                        <h5 className='c_signin_header'>Sign in</h5>
                                            <InputField
                                                ref='username'
                                                textfield_id='username_field'
                                                textfield_type='text'
                                                textfield_state='validate'
                                                outerdiv_size='col s12'
                                                textfield_label='Username'
                                                textfield_label_for='username_field' />
                                            <InputField
                                                ref='password'
                                                textfield_id='password_field'
                                                textfield_type='password'
                                                textfield_state='validate'
                                                outerdiv_size='col s12'
                                                textfield_label='Password'
                                                textfield_label_for='password_field' />
                                            <button className='c_create_account_button white-text waves-effect waves-light btn green lighten-2'>Sign in</button>
                                    </div>
                                </div>
                                <div className='center-align'>
                                    <span>Don't have an account yet? <Link to='signup'>Sign Up</Link></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    });
module.exports = SignIn;
