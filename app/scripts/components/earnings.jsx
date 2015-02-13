'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Constrainable = require('./mixins/constrainable'),
    Search = require('./helpers/search'),
    MusicManager = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        render: function() {
            var my_earnings_songs = (
                    <li className='tab col s3'>
                        <Link to='my.earnings.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Songs</Link>
                    </li>
                ),
                my_earnings_albums = (
                        <li className='tab col s3'>
                            <Link to='my.earnings.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>
                        </li>
                 ),
                my_earnings_artists = (
                    <li className='tab col s3'>
                        <Link to='my.earnings.artists' className='waves-effect waves-white btn-flat white-text c_tabs'>Artists</Link>
                    </li>),
                my_earnings_labels = (
                    <li className='tab col s3'>
                        <Link to='my.earnings.labels' className='waves-effect waves-white btn-flat white-text c_tabs'>Record Labels</Link>
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
            }

            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>My Earnings</h4>
                            <div className='c_links'>
                                <div className='row'>
                                    <ul className='tabs default-tab'>
                                        {my_earnings_songs}
                                        {my_earnings_albums}
                                        {my_earnings_artists}
                                        {my_earnings_labels}
                                    </ul>
                                </div>
                            </div>
                            <Search />
                            <div className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light'>
                                    <i className='mdi-content-add'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <div className='upload-btn-earnings right-align'>
                            <a className='btn-floating btn-large waves-effect waves-light red lighten-2'>
                                <i className='mdi-content-add'></i>
                            </a>
                        </div>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });
module.exports = MusicManager;
