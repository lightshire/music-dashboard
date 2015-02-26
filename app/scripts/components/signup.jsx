'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    InputField = require('./helpers/textfield'),
    Signup = React.createClass({
        render: function() {
            return (
                <div className='c-sign-up-outer container'>
                    <form action='#'>
                        <div className='row'>
                            <div className='col s12 m12 l12'>
                                <div className='center-align'>
                                    <h5>Freedom! Music Dashboard</h5>
                                </div>
                            </div>
                            <div className='col s2 m2 l2'>&nbsp;</div>
                            <div className='col s12 m8 l8'>
                                <div className='card-sign'>
                                    <div className='c-sign-up-inner'>
                                        <h5 className='c-signin-header'>Create Account</h5>
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
                                        <div className='c-checkbox-terms col s12 m12 l12'>
                                            <p>
                                                <input type='checkbox' id='terms' />
                                                <label htmlFor='terms'><small>I have read and agreed to the Terms of Use and Privacy Policy</small></label>
                                            </p>
                                        </div>
                                        <div className='c-create-account-button-div col s12 m12 l12'>
                                            <a className='c-create-account-button white-text waves-effect waves-light btn green lighten-2'>Create Account</a>
                                            <div className='center-align'><small>or</small></div>
                                            <a className='c-sign-in-with-google white-text waves-effect waves-light btn red lighten-2'>Sign in with Google+</a>
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
