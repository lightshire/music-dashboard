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
                    return (<TrackItem id={item.id} title={item.title} artist={item.artist} thumbnail={item.thumbnail} />);
                });
                track_title = typeof this.state.tracks[this.state.status.current_track] !== 'undefined' 
                    ? this.state.tracks[this.state.status.current_track].title
                    : 'Choose a track';
                track_artist = typeof this.state.tracks[this.state.status.current_track] !== 'undefined' 
                    ? this.state.tracks[this.state.status.current_track].artist
                    : 'Unknown Artist';
                playlist = (
                    <div className={this.state.status.modal === 'playlist' ? 'playlist' : 'playlist hide'}>

                      
                        <div className='c_volume_ctrl'>
                            <input type='range' ref='volume_control' onChange={this.handleVolumeChange} className='volume' min='0' max='100' value={this.state.status.volume * 100} />
                        </div>
                        <div className='c_panel_inner hide-on-med-and-up'>
                            <div className='row'>
                                <div className='col s2 m2 l2'>&nbsp;</div>
                                <div className='col s2 m3 l2'><a className='grey-text' href='#' onClick={this.handlePreviousTrack}><i className='mdi-av-skip-previous' /></a></div>
                                <div className='col s2 m3 l2'><a className='grey-text' href='#' onClick={this.handleTogglePlay}><i className={this.state.status.play ? 'mdi-av-pause' : 'mdi-av-play-arrow'} /></a></div>
                                <div className='col s2 m3 l2'><a className='grey-text' href='#' onClick={this.handleNextTrack}><i className='mdi-av-skip-next' /></a></div>
                                <div className='col s2 m1 l2'>&nbsp;</div>
                            </div>
                        </div>

                        <div className='artwork'>
                            <img className='responsive-img' src={this.state.tracks[this.state.status.current_track].thumbnail} />
                            <div className='track-info'>
                                <h5>{track_title}</h5>
                                <span>{track_artist}</span>
                            </div>
                        </div>
                        <div className='seeker'>
                            <input ref="track_seek" onChange={this.handleTrackSeek} type='range' className='seeker' min='0' max={this.state.track_info.length}  />
                        </div>
                        <div className='track-list'>
                            <div>{tracks}</div>
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
                        <li className='hide-on-small-and-down btn-volume-control'><a href='#' onClick={this.handleToggleVolumeControl}><i className='mdi-av-volume-up' /></a>
                            {volume_control}
                        </li>
                        <li className='hide-on-small-and-down btn-previous-track'><a href='#' onClick={this.handlePreviousTrack}><i className='mdi-av-skip-previous' /></a></li>
                        <li className='hide-on-small-and-down btn-toggle-play'><a href='#' onClick={this.handleTogglePlay}><i className={this.state.status.play ? 'mdi-av-pause' : 'mdi-av-play-arrow'} /></a></li>
                        <li className='hide-on-small-and-down btn-next-track'><a href='#' onClick={this.handleNextTrack}><i className='mdi-av-skip-next' /></a></li>
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