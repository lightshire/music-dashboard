'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Search = require('./helpers/search'),
    Constrainable = require('./mixins/constrainable'),
    MusicManager = React.createClass({
        mixins: [Constrainable, Router.Navigation],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        render: function() {
            var music_manager_songs,
                music_manager_albums,
                music_manager_artists,
                music_manager_labels,
                music_manage_list,
                more_tab;

                music_manager_songs = (
                    <li className='tab col s3'>
                        <Link
                            to='music.manager.songs'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Tracks
                        </Link>
                    </li>
                );

                music_manager_albums = (
                    <li className='tab col s3'>
                        <Link
                            to='music.manager.albums'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Albums
                        </Link>
                    </li>
                );

                music_manager_artists = (
                    <li className='tab col s3'>
                        <Link
                            to='music.manager.artists'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Artists
                        </Link>
                    </li>
                );

                music_manager_labels = (
                    <li className='tab col s3'>
                        <Link
                            to='music.manager.labels'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Record Labels
                        </Link>
                    </li>
                );
                
                more_tab = (
                    <li className='tab col s4 more'><a href='#' className='white-text c_tabs'>MORE<i className="mdi-navigation-arrow-drop-down right"></i></a>
                        <ul>
                            {music_manager_artists}
                            {music_manager_labels}
                        </ul>
                    </li>
                );

                if (this.hasAccess(['artist'])) {
                    music_manager_artists = '';
                    music_manager_labels = '';
                }

                if (this.hasAccess(['general_user'])) {
                    music_manager_albums = '';
                    music_manager_artists = '';
                    music_manager_labels = '';
                    more_tab = '';
                }

                if (this.hasAccess(['record_label'])) {
                    music_manager_labels = '';
                }

                if (this.hasAccess(['admin'])) {
                }

                music_manage_list = (
                    <div className="col s12">
                        <ul className='tabs default-tab'>
                            {music_manager_songs}
                            {music_manager_albums}
                            {music_manager_artists}
                            {music_manager_labels}
                        </ul>
                        <ul className='tabs mobile-tab'>
                            {music_manager_songs}
                            {music_manager_albums}
                            {more_tab}
                        </ul>
                    </div>
                );

            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>Music Manager</h4>
                            <div className='c_links'>
                                <div className='row'>
                                    {music_manage_list}
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
