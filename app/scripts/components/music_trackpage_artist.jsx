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
                    <li className='tab col s4'>
                        <Link
                            to='music.trackpage.artist.tracks'
                            className='waves-effect waves-white btn-flat white-text c-tabs'>
                            Tracks
                        </Link>
                    </li>
                );

                music_trackpage_albums = (
                    <li className='tab col s4'>
                        <Link
                            to='music.trackpage.artist.albums'
                            className='waves-effect waves-white btn-flat white-text c-tabs'>
                            Albums
                        </Link>
                    </li>
                );

                music_trackpage_bio = (
                    <li className='tab col s4'>
                        <Link
                            to='music.trackpage.artist.bio'
                            className='waves-effect waves-white btn-flat white-text c-tabs'>
                            Bio
                        </Link>
                    </li>
                );

                music_trackpage_list = (
                    <div className="col s12">
                        <ul className='tabs'>
                            {music_trackpage_tracks}
                            {music_trackpage_albums}
                            {music_trackpage_bio}
                        </ul>
                    </div>
                );

            return (
                <div className='c-body'>
                    <div className='c-header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text flow-text'>
                                <Link to='music.trackpage'>
                                    <i className='mdi-hardware-keyboard-backspace white-text'></i>
                                </Link>
                                Rage Against The Machine
                            </h4>
                            <div className='c-links'>
                                <div className='row'>
                                    {music_trackpage_list}
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

module.exports = MusicTrackpageArtist;
