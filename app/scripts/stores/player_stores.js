'use strict';
var Reflux = require('reflux'),
    PlayerActions = require('../actions/player_actions'),
    _ = require('lodash'),
    _tracks = {
        1 : {
            id: 1,
            thumbnail: 'https://placeimg.com/80/80/music/1',
            title: 'Song Title 123',
            audio_url: 'https://cdn.somewhere.tld/path/to/mp3.mp3'
        },
        2 : {
            id: 2,
            thumbnail: 'https://placeimg.com/80/80/music/2',
            title: 'Song Title 4',
            audio_url: 'https://cdn.somewhere.tld/path/to/mp3.mp3'
        },
        3 : {
            id: 3,
            thumbnail: 'https://placeimg.com/80/80/music/3',
            title: 'Song Title 5',
            audio_url: 'https://cdn.somewhere.tld/path/to/mp3.mp3'
        }
    },
    _status = {
        current: null,
        play:  false, // playing or paused
        volume: .50,
        modal: null, // playlist or volume or null
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
        }
    });

module.exports = PlayerStore;
