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
            var my_earnings_songs = (<Link to='my.earnings.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Songs</Link>),
                my_earnings_albums = (<Link to='my.earnings.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>),
                my_earnings_artists = (<Link to='my.earnings.artists' className='waves-effect waves-white btn-flat white-text c_tabs'>Artists</Link>),
                my_earnings_labels = (<Link to='my.earnings.labels' className='waves-effect waves-white btn-flat white-text c_tabs'>Record Labels</Link>);
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
                my_earnings_songs = (<Link to='admin.my.earnings.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Songs</Link>);
                my_earnings_albums = (<Link to='admin.my.earnings.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>);
                my_earnings_artists = (<Link to='admin.my.earnings.artists' className='waves-effect waves-white btn-flat white-text c_tabs'>Artists</Link>);
                my_earnings_labels = (<Link to='admin.my.earnings.labels' className='waves-effect waves-white btn-flat white-text c_tabs'>Record Labels</Link>);
            }
            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>My Earnings</h4>
                            <div className='c_links'>
                                {my_earnings_songs}
                                {my_earnings_albums}
                                {my_earnings_artists}
                                {my_earnings_labels}
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
