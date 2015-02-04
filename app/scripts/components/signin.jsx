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
                                    <h5 className='c_signin_header'>Sign in</h5>
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
                                        <a className='c_create_account_button white-text waves-effect waves-light btn green lighten-2'>Sign in</a>
                                    </form>
                                </div>
                            </div>
                            <div className='center-align'>
                                <span>Don't have an account yet? <a href='#'>Sign in</a></span>
                            </div>
                        </div>
                        <div className='col s2'>&nbsp;</div>
                    </div>
                </div>
            );
        }
    });

module.exports = Signup;
