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
            var my_earnings_songs = (<Link to='my.earnings.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Tracks</Link>),
                my_earnings_albums = (<Link to='my.earnings.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>),
                my_earnings_artists = (<Link to='my.earnings.artists' className='waves-effect waves-white btn-flat white-text c_tabs'>Artists</Link>),
                my_earnings_labels = (<Link to='my.earnings.labels' className='waves-effect waves-white btn-flat white-text c_tabs'>Record Labels</Link>),
                my_earnings_list = '';
            if (this.hasAccess(['general_user'])) {
                my_earnings_list = (
                    <ul className='c_my_earnings_tabs tabs'>
                        <li className='tab col s6'>{my_earnings_songs}</li>
                    </ul>
                );
            } else if (this.hasAccess(['artist'])) {
                my_earnings_list = (
                    <ul className='c_my_earnings_tabs tabs'>
                        <li className='tab col s6'>{my_earnings_songs}</li>
                        <li className='tab col s6'>{my_earnings_albums}</li>
                    </ul>
                );
            } else if (this.hasAccess(['record_label'])) {
                my_earnings_list = (
                    <ul className='c_my_earnings_tabs tabs'>
                        <li className='tab col s4'>{my_earnings_songs}</li>
                        <li className='tab col s4'>{my_earnings_albums}</li>
                        <li className='tab col s4'>{my_earnings_artists}</li>
                    </ul>
                );
            } else if (this.hasAccess(['admin'])) {
                my_earnings_list = (
                    <ul className='c_my_earnings_tabs tabs'>
                        <li className='tab col s3'>{my_earnings_songs}</li>
                        <li className='tab col s3'>{my_earnings_albums}</li>
                        <li className='tab col s3'>{my_earnings_artists}</li>
                        <li className='tab col s3'>{my_earnings_labels}</li>
                    </ul>
                );
            }
            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>My Earnings</h4>
                            <div className='c_links'>
                                <div className="row">
                                    {my_earnings_list}
                                </div>
                            </div>
                            <Search />
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
