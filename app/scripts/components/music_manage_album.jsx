'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Search = require('./helpers/search'),
    Constrainable = require('./mixins/constrainable'),
    MusicManagerAlbum = React.createClass({
        mixins: [Constrainable, Router.State, Router.Navigation],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        render: function() {
            var id = this.getParams().id,
                music_manager_songs = (
                    <li className='tab col s3'>
                        <Link 
                            to='music.manager.album.songs' 
                            params={{id: id}} 
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Tracks
                        </Link>
                    </li>
                ),
                music_manager_albuminfo = (
                    <li className='tab col s3'>
                        <Link 
                            to='music.manager.album.albuminfo' 
                            params={{id: id}} 
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Album Info
                        </Link>
                    </li>
                );
            return (
                <div className='c_body'>
                    <div className='c_header'>
                        <div className='container'>
                            <h4 className='white-text'>
                                <Link to='music.manager.albums'>
                                    <i className='mdi-hardware-keyboard-backspace black-text'></i>
                                </Link>
                                Potato Album
                            </h4>
                            <div className='c_links'>
                                <div className='row'>
                                    <ul className='tabs default-tab'>
                                        {music_manager_songs}
                                        {music_manager_albuminfo}
                                    </ul>
                                    <ul className='tabs mobile-tab'>
                                        {music_manager_songs}
                                        {music_manager_albuminfo}
                                    </ul>
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

module.exports = MusicManagerAlbum;
