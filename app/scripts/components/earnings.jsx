'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Constrainable = require('./mixins/constrainable'),
    TrackActions = require('../actions/track_actions'),
    Search = require('./helpers/search'),
    Modal = require('./helpers/modal'),
    InputField = require('./helpers/textfield'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    MusicManager = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        render: function() {
            var earnings_list,
                more_tab,
                my_earnings_songs,
                my_earnings_albums,
                my_earnings_artists,
                my_earnings_labels;

                my_earnings_songs = (
                        <li className='tab col s3'>
                            <Link to='my.earnings.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Tracks</Link>
                        </li>
                );

                my_earnings_albums = (
                        <li className='tab col s3'>
                            <Link 
                                to='my.earnings.albums' 
                                className='waves-effect waves-white btn-flat white-text c_tabs'>Albums
                            </Link>
                        </li>
                );

                my_earnings_artists = (
                        <li className='tab col s3'>
                            <Link 
                                to='my.earnings.artists' 
                                className='waves-effect waves-white btn-flat white-text c_tabs'>Artists
                            </Link>
                        </li>
                );

                my_earnings_labels = (
                        <li className='tab col s3'>
                            <Link 
                                to='my.earnings.labels' 
                                className='waves-effect waves-white btn-flat white-text c_tabs'>Record Labels
                            </Link>
                        </li>
                );

                more_tab = (
                    <li className='tab col s4 more'><a href='#' className='white-text c_tabs'>MORE<i className="mdi-navigation-arrow-drop-down right"></i></a>
                        <ul>
                            {my_earnings_artists}
                            {my_earnings_labels}
                        </ul>
                    </li>
                );

            if (this.hasAccess(['general_user'])) {
                my_earnings_albums = '';
                my_earnings_artists = '';
                my_earnings_labels = '';
            } else if (this.hasAccess(['artist'])) {
                my_earnings_artists = '';
                my_earnings_labels = '';
            } else if (this.hasAccess(['record_label'])) {
                my_earnings_labels = '';
            } else if (this.hasAccess(['admin'])) {
                
            }
            earnings_list = (
                    <div className="col s12">
                        <ul className='tabs default-tab'>
                            {my_earnings_songs}
                            {my_earnings_albums}
                            {my_earnings_artists}
                            {my_earnings_labels}
                        </ul>
                        <ul className='tabs mobile-tab'>
                            {my_earnings_songs}
                            {my_earnings_albums}
                            {more_tab}
                        </ul>
                    </div>
                );
            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>My Earnings</h4>
                            <div className='c_links'>
                                <div className="row">
                                    {earnings_list}
                                </div>
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
