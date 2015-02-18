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
                link_list ='';

                link_list = (
                    <ul className='tabs'>
                        <li className='tab col s6'>
                            <Link 
                                to='music.manager.album.songs' 
                                params={{id: id}} 
                                className='waves-effect waves-white btn-flat white-text c-tabs'>
                                Tracks
                            </Link>
                        </li>
                        <li className='tab col s6'>
                            <Link 
                                to='music.manager.album.albuminfo' 
                                params={{id: id}} 
                                className='waves-effect waves-white btn-flat white-text c-tabs'>
                                Album Info
                            </Link>
                        </li>
                    </ul>
                );

            return (
                <div className='c-body'>
                    <div className='c-header'>
                        <div className='container'>
                            <h4 className='white-text'>
                                <Link to='music.manager.albums'>
                                    <i className='mdi-hardware-keyboard-backspace black-text'></i>
                                </Link>
                                Potato Album
                            </h4>
                            <div className='c-links'>
                                <div className='row'>
                                     <div className="col s12">                                        
                                        {link_list}                                        
                                    </div>
                                </div>
                            </div>
                            <Search />
                        </div>
                    </div>
                    <div className='container c-main-container z-depth-1'>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });

module.exports = MusicManagerAlbum;
