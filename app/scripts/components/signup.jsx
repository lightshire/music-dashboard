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
                    <form action='#'>
                        <div className='row'>
                            <div className='col s12 m12 l12'>
                                <div className='center-align'>
                                    <h5>Freedom! Music Dashboard</h5>
                                </div>
                            </div>
                            <div className='col s2 m2 l2'>&nbsp;</div>
                            <div className='col s8 m8 l8'>
                                <div className='card'>
                                    <div className='c_signup'>
                                        <h5 className='c_signin_header'>Create Account</h5>
                                        <InputField
                                            ref='username'
                                            textfield_id='username_field'
                                            textfield_type='text'
                                            textfield_state='validate'
                                            outerdiv_size='col s12 m12 l12'
                                            textfield_label='Username'
                                            textfield_label_for='username_field' />
                                        <InputField
                                            ref='password'
                                            textfield_id='password_field'
                                            textfield_type='password'
                                            textfield_state='validate'
                                            outerdiv_size='col s12 m12 l12'
                                            textfield_label='Password'
                                            textfield_label_for='password_field' />
                                        <InputField
                                            ref='email'
                                            textfield_id='email_field'
                                            textfield_type='email'
                                            textfield_state='validate'
                                            outerdiv_size='col s12 m12 l12'
                                            textfield_label='Email'
                                            textfield_label_for='email_field' />
                                        <div className='c_checkbox_terms s12 m12 l12'>
                                            <p>
                                                <input type='checkbox' id='terms' />
                                                <label htmlFor='terms'><small>I have read and agreed to the Terms of Use and Privacy Policy</small></label>
                                            </p>
                                        </div>
                                        <div className='c_create_account_button_div s12 m12 l12'>
                                            <a className='c_create_account_button white-text waves-effect waves-light btn green lighten-2'>Create Account</a>
                                            <div className='center-align'><small>or</small></div>
                                            <a className='c_sign_in_with_google white-text waves-effect waves-light btn red lighten-2'>Sign in with Google+</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col s2 m2 l2'>&nbsp;</div>
                            <div className='col s12 m12 l12'>
                                <div className='center-align'>
                                    <span>Already have an account? <Link to='signin'>Sign in</Link></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    });
module.exports = Signup;
