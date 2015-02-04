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
    Signup = React.createClass({
        render: function() {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col s2'>&nbsp;</div>
                        <div className='col s8'>
                            <div className='card'>
                                <div className='c_signup'>
                                    <h5 className='c_create_account_header'>Create Account</h5>
                                    <form action='#'>
                                        <InputField
                                            texdtfield_id='username_field'
                                            textfield_type='text'
                                            textfield_state='validate'
                                            outerdiv_size='col s12'
                                            textfield_label='Username'
                                            textfield_label_for='username_field' />
                                        <InputField
                                            textfield_id='password_field'
                                            textfield_type='password'
                                            textfield_state='validate'
                                            outerdiv_size='col s12'
                                            textfield_label='Password'
                                            textfield_label_for='password_field' />
                                        <InputField
                                            textfield_id='email_field'
                                            textfield_type='email'
                                            textfield_state='validate'
                                            outerdiv_size='col s12'
                                            textfield_label='Email'
                                            textfield_label_for='email_field' />
                                        <div className='c_checkbox_terms'>
                                            <p>
                                                <input type='checkbox' id='terms' />
                                                <label htmlFor='terms'><small>I have read and agreed to the Terms of Use and Privacy Policy</small></label>
                                            </p>
                                        </div>
                                        <a className='c_create_account_button white-text waves-effect waves-light btn green lighten-2'>Create Account</a>
                                        <div className='center-align'><small>or</small></div>
                                        <a className='c_create_account_button white-text waves-effect waves-light btn red lighten-2'>Sign in with Google+</a>
                                    </form>
                                </div>
                            </div>
                            <div className='center-align'>
                                <span>Already have an account? <a href='#'>Sign in</a></span>
                            </div>
                        </div>
                        <div className='col s2'>&nbsp;</div>
                    </div>
                </div>
            );
        }
    });
    module.exports = Signup;
