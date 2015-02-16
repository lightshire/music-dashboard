'use strict';
var Reflux = require('reflux'),
    PlayerActions = require('../actions/player_actions'),
    _ = require('lodash'),
    _tracks = {
        1 : {
            id: 1,
            thumbnail: 'https://placeimg.com/80/80/music/1',
            title: 'We Are The Champions',
            artist: 'Queen',
            audio_url: 'http://a.tumblr.com/tumblr_lsi0ziIh3M1qa6vv7o1_r1.mp3'
        },
        2 : {
            id: 2,
            thumbnail: 'https://placeimg.com/80/80/music/2',
            title: 'All About The Bass',
            artist: 'Meaghan Trainor',
            audio_url: 'http://trendingmp3.com/music/user_folder/All%20About%20That%20Bass%20Meghan%20Trainor%20-%201412662517.mp3'
        },
        3 : {
            id: 3,
            thumbnail: 'https://placeimg.com/80/80/music/3',
            title: 'Song Title 5',
            artist: 'Ano Nymous',
            audio_url: 'http://a.tumblr.com/tumblr_lsi0ziIh3M1qa6vv7o1_r1.mp3'
        }
    },
    _status = {
        current_track: 2,
        play:  false, // playing or paused
        volume: .80,
        modal: null, // playlist or volume or null
        length: 0,
        current_time: 0
    },
    _removeTrack = function(id) {
        delete _tracks[id];
    },
    _addTrack = function(data) {
        if (typeof _tracks[data.id] !== 'undefined') {
            return;
        }

        _tracks[data.id] = data;
    },
    PlayerStore = Reflux.createStore({
        listenables: [PlayerActions],
        emitChange: function() {
            this.trigger();
        },
        onAddTrackToPlaylist: function(data) {
            _addTrack(data);

            this.emitChange();
        },
        onRemoveTrackFromPlaylist: function(id) {
            _removeTrack(id);
            this.emitChange();
        },
        getAll: function() {
            return _tracks;
        },
        get: function(id) {
            return typeof _tracks[id] !== 'undefined' ? _tracks[id] : null;
        },
        getStatus: function() {
            return _status;
        },
        onNextTrack: function() {
            var current_track = _status.current_track,
                tracks_ids = Object.keys(_tracks),
                track_index = tracks_ids.indexOf(current_track),
                next_track_index;

                if (track_index < tracks_ids.length - 1) {
                    next_track_index = track_index + 1;
                } else {
                    next_track_index = 0;
                }

                if(typeof _tracks[tracks_ids[next_track_index]] === 'undefined') {
                    return;
                }

                this.onChangeCurrentTrack(tracks_ids[next_track_index]);
        },
        onPreviousTrack: function() {
            var current_track = _status.current_track,
                tracks_ids = Object.keys(_tracks),
                track_index = tracks_ids.indexOf(current_track),
                previous_track_index;

                if (track_index > 0) {
                    previous_track_index = track_index - 1;
                } else {
                    previous_track_index = tracks_ids.length - 1;
                }

                if(typeof _tracks[tracks_ids[previous_track_index]] === 'undefined') {
                    return;
                }

                this.onChangeCurrentTrack(tracks_ids[previous_track_index]);
        },
        onTogglePlaylist: function() {
            if(_status.modal !== 'playlist') {
                _status.modal = 'playlist';
            } else {
                _status.modal = null;
            }

            this.emitChange();
        },
        onToggleVolumeControl: function() {
            if(_status.modal !== 'volume') {
                _status.modal = 'volume';
            } else {
                _status.modal = null;
            }

            this.emitChange();
        },
        onHideModal: function() {
            _status.modal = null;

            this.emitChange();
        },
        onChangeVolume: function(value) {
            if(value > 1) {
                value = 1
            }
            if(value < 0) {
                value = 0;
            }
            _status.volume = value;

            this.emitChange();
        },
        onTogglePlay: function() {
            _status.play = !_status.play;

            this.emitChange();
        },
        onChangeCurrentTrack: function(id) {
            _status.current_track = id;
            _status.current_time = 0;
            this.emitChange();
        },
        onSeekTrack: function(value) {
            _status.current_time = value;

            this.emitChange();
        },
        onUpdateCurrentTime: function(value) {
            _status.current_time = value;

            this.emitChange();
        },
        onUpdateCurrentTrackLength: function(value) {
            _status.length = value;

            this.emitChange();
        }
    });

module.exports = PlayerStore;
