var React = require('react/addons'),
    _ = require('lodash'),
    moment = require('moment'),
    TrackItem = require('./player/trackitem'),
    PlayerStore = require('../stores/player_stores'),
    PlayerActions = require('../actions/player_actions'),
    getStateFromStore = function() {
        return {
            tracks: PlayerStore.getAll(),
            status: PlayerStore.getStatus()
        }
    },
    _previous_track = null,
    _is_mouse_down_on_seeker = false,
    Player = React.createClass({
        getInitialState: function() {
            return _.extend({}, getStateFromStore(), {
                track_info: {
                    lenth: 0,
                    current_time: 0
                }
            });
        },
        componentDidMount: function() {
            var player = this.refs.audio_player.getDOMNode();
            window.moment = moment;

            this.unsubscribe = PlayerStore.listen(this._onChange);
            this.updatePlayerStatus(this.refs.audio_player.getDOMNode());

            player.addEventListener('timeupdate', function(e) {
                var new_track_info = _.extend({}, this.state.track_info);
                new_track_info.current_time = player.currentTime;
                new_track_info.length = player.duration;
                this.setState({track_info: new_track_info});
                if(typeof this.refs.track_seek !== 'undefined') {
                    this.refs.track_seek.getDOMNode().value = player.currentTime;
                }
            }.bind(this), false);

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
        handleVolumeChange: function() {
            var value = this.refs.volume_control.getDOMNode().value;
            value = value === 0 ? 0 : value / 100;
            PlayerActions.changeVolume(value);
        },
        handleNextTrack: function() {
            PlayerActions.nextTrack();
        },
        handlePreviousTrack: function() {
            PlayerActions.previousTrack();
        },
        handleTrackSeek: function() {
            var value = this.refs.track_seek.getDOMNode().value,
                player = this.refs.audio_player.getDOMNode();
                player.currentTime = value;
        },
        updatePlayerStatus: function(player) {
            var current_track_id = this.state.status.current_track,
            track = PlayerStore.get(current_track_id),
            current_time = this.state.track_info.current_time;

            if(track.id !== _previous_track) {
                player.src = track.audio_url;
                _previous_track = track.id;
            }

            if(this.state.status.play) {
                player.play();
            } else {
                player.pause();
            };

            player.volume = this.state.status.volume;
        },
        formatSeconds: function(seconds) {
            return moment(seconds*1000).format('mm:ss');
        },
        render: function() {
            var tracks, playlist, volume_control, audio, track_title;
            if(this.state.status.modal === 'playlist') {
                tracks = _.map(this.state.tracks, function(item) {
                    return (<TrackItem id={item.id} title={item.title} thumbnail={item.thumbnail} />);
                });
                track_title = typeof this.state.tracks[this.state.status.current_track] !== 'undefined' 
                    ? this.state.tracks[this.state.status.current_track].title
                    : 'Choose a track';
                playlist = (
                    <div className={this.state.status.modal === 'playlist' ? 'playlist' : 'playlist hide'}>
                        <div className='track-info'>
                            <div className='title'>{track_title}</div>
                            <div className='row seek-container'>
                                <div className='col s2 time-current-container'>
                                    <span className='time-current'>
                                        {this.formatSeconds(this.state.track_info.current_time)}
                                    </span>
                                </div>
                                <div className='col s8 seeker-container'>
                                    <input ref="track_seek" onChange={this.handleTrackSeek} type='range' className='seeker' min='0' max={this.state.track_info.length}  />
                                </div>
                                <div className='col s2 time-end-container'>
                                    <span className='time-end'>
                                        {this.formatSeconds(this.state.track_info.length)}
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
            }
            if(this.state.status.modal === 'volume') {
                volume_control = (
                    <div className='volume-control'>
                        <div className='row'>
                            <div className='s12'>
                                <input type='range' ref='volume_control' onChange={this.handleVolumeChange} className='volume' min='0' max='100' value={this.state.status.volume * 100} />
                            </div>
                        </div>
                    </div>
                );
            }
            audio = (
                <audio ref="audio_player">
                    <source type='audio/mpeg' />
                </audio>
            );
            return (
                <div className='player'>
                    {audio}
                    <ul>
                        <li className='btn-volume-control'><a href='#' onClick={this.handleToggleVolumeControl}><i className='mdi-av-volume-up' /></a>
                            {volume_control}
                        </li>
                        <li><a href='#' onClick={this.handlePreviousTrack}><i className='mdi-av-skip-previous' /></a></li>
                        <li><a href='#' onClick={this.handleTogglePlay}><i className={this.state.status.play ? 'mdi-av-pause' : 'mdi-av-play-arrow'} /></a></li>
                        <li><a href='#' onClick={this.handleNextTrack}><i className='mdi-av-skip-next' /></a></li>
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
            this.updatePlayerStatus(this.refs.audio_player.getDOMNode());
        }
    });
module.exports = Player;
