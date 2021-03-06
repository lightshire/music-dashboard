'use strict';
var Reflux = require('reflux'),
    TrackActions = require('../actions/track_actions'),
    _tracks = {
        1: {
            id: 1,
            title: 'Potato Song',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'not_monetize'
        },
        2: {
            id: 2,
            title: 'Potato Song',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'rejected'
        },
        3: {
            id: 3,
            title: 'Potato Song',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'accepted'
        },
        4: {
            id: 4,
            title: 'Potato Song',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending'
        }
    },
    TracksStore = Reflux.createStore({
        listenables: [TrackActions],
        emitChange: function() {
            this.trigger();
        },
        onAddTracks: function() {
            var data = {
                id: Math.random()*1000,
                title: 'Potato Song',
                artist: 'The Peelers',
                time: '20:00',
                label: 'Mashed Records',
                genre: 'Psychedelic',
                date_uploaded: 'an hour ago',
                status: 'not_monetize'
            };

            _tracks[data.id] = data;

            this.emitChange();
        },
        onDeleteTracks: function(id) {
            if (typeof _tracks[id] !== 'undefined') {
                delete _tracks[id];
            }

            this.emitChange();
        },
        onUpdateStatus: function(id, status) {
            if(typeof _tracks[id] !== 'undefined') {
                _tracks[id].status = status;
            }

            this.emitChange();
        },
        getAll: function() {
            return _tracks;
        }
    });

module.exports = TracksStore;
