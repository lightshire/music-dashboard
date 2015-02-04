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
    MusicManager = React.createClass({
        render: function() {
            return (
                <div className='c_body'>
                    <div className='c_header'>
                        <div className='container'>
                            <h4 className='white-text'>Admin</h4>
                            <div className='c_links'>
                                <Link to='admin.tracks' className='waves-effect waves-white btn-flat white-text c_tabs'>Songs</Link>
                                <Link to='admin.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>
                                <Link to='admin.artists' className='waves-effect waves-white btn-flat white-text c_tabs'>Artists</Link>
                                <Link to='admin.labels' className='waves-effect waves-white btn-flat white-text c_tabs'>Labels</Link>
                                <Link to='admin.labels_earnings' className='waves-effect waves-white btn-flat white-text c_tabs'>Label Earnings</Link>
                                <Link to='admin.artists_earnings' className='waves-effect waves-white btn-flat white-text c_tabs'>Artist Earnings</Link>
                            </div>
                            <Search />
                            <div className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red lighten-2'>
                                    <i className='mdi-content-add'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });

module.exports = MusicManager;
