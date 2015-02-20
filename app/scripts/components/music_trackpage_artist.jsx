'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Search = require('./helpers/search'),
    MusicTrackpageArtist = React.createClass({
        render: function() {
            var music_trackpage_tracks,
                music_trackpage_albums,
                music_trackpage_bio,
                music_trackpage_list;

                music_trackpage_tracks = (
                    <li className='tab col s3'>
                        <Link
                            to='music.trackpage.artist.tracks'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Tracks
                        </Link>
                    </li>
                );

                music_trackpage_albums = (
                    <li className='tab col s3'>
                        <Link
                            to='music.trackpage.artist.albums'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Albums
                        </Link>
                    </li>
                );

                music_trackpage_bio = (
                    <li className='tab col s3'>
                        <Link
                            to='music.trackpage.artist.bio'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Bio
                        </Link>
                    </li>
                );

                music_trackpage_list = (
                    <div className="col s6">
                        <ul className='tabs default-tab row'>
                            {music_trackpage_tracks}
                            {music_trackpage_albums}
                            {music_trackpage_bio}
                        </ul>
                    </div>
                );

            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>
                                <Link to='music.trackpage'>
                                    <i className='mdi-hardware-keyboard-backspace black-text'></i>
                                </Link>
                                Rage Against The Machine
                            </h4>
                            <div className='c_links'>
                                <div className='row'>
                                    {music_trackpage_list}
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

module.exports = MusicTrackpageArtist;
