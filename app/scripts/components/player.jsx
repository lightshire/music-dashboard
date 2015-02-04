var React = require('react/addons'),
    TrackItem = require('./player/trackitem'),
    _ = require('lodash'),
    PlayerStore = require('../stores/player_stores'),
    PlayerActions = require('../actions/player_actions'),
    getStateFromStore = function() {
        return {
            tracks: PlayerStore.getAll(),
            status: PlayerStore.getStatus()
        }
    },
    Player = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = PlayerStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        handleToggleVolumeControl: function() {
            PlayerActions.toggleVolumeControl();
        },
        handleTogglePlaylist: function() {
            PlayerActions.togglePlaylist();
        },
        handleTogglePlay: function() {
            PlayerActions.togglePlay();
        },
        render: function() {
            var tracks, playlist, volume_control;
            if(this.state.status.modal === 'playlist') {
                tracks = _.map(this.state.tracks, function(item) {
                    return (<TrackItem id={item.id} title={item.title} thumbnail={item.thumbnail} />);
                });
                playlist = (
                    <div className='playlist'>
                        <div className='track-info'>
                            <div className='title'>Song Title</div>
                            <div className='row seek-container'>
                                <div className='col s2 time-current-container'>
                                    <span class='time-current'>
                                        0:02
                                    </span>
                                </div>
                                <div className='col s8 seeker-container'>
                                    <input type='range' className='seeker' min='0' max='360' />
                                </div>
                                <div className='col s2 time-end-container'>
                                    <span class='time-end'>
                                        4:00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='track-list'>
                            <ul>
                                {tracks}
                            </ul>
                        </div>
                    </div>
                );
            };
            if(this.state.status.modal === 'volume') {
                volume_control = ( 
                    <div className='volume-control'>
                        <div className='row'>
                            <div className='s12'>
                                <input type='range' className='volume' min='0' max='100' />
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <div className='player'>
                    <ul>
                        <li className='btn-volume-control'><a href='#' onClick={this.handleToggleVolumeControl}><i className='mdi-av-volume-up' /></a>
                            {volume_control} 
                        </li>
                        <li><a href='#'><i className='mdi-av-skip-previous' /></a></li>
                        <li><a href='#' onClick={this.handleTogglePlay}><i className={this.state.status.play ? 'mdi-av-play-arrow' : 'mdi-av-pause'} /></a></li>
                        <li><a href='#'><i className='mdi-av-skip-next' /></a></li>
                        <li className="btn-show-playlist">
                            <a href='#' onClick={this.handleTogglePlaylist}><i className='mdi-navigation-more-vert' /></a>
                            {playlist}
                        </li>
                    </ul>
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });
module.exports = Player;
