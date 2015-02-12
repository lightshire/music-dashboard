'use strict';
var Reflux = require('reflux'),
    AlbumTracksActions = require('../actions/album_tracks_actions'),
    _albumtracks = {
        1: {
            id: 1,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'not_monetize'
        },
        2: {
            id: 2,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'accepted'
        },
        3: {
            id: 3,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'rejected'
        },
        4: {
            id: 4,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending'
        }
    },
    AlbumTracksStore = Reflux.createStore({
        listenables: [AlbumTracksActions],
        emitChange: function() {
            this.trigger();
        },
        onAddTracks: function() {
            var data = {
                id: Math.random()*1000,
                title: 'French Fries',
                artist: 'The Peelers',
                time: '20:00',
                label: 'Mashed Records',
                genre: 'Psychedelic',
                date_uploaded: 'an hour ago',
                status: 'not_monetize'
            };

            _albumtracks[data.id] = data;
            this.emitChange();
        },
        onDeleteTracks: function(id) {
            if(typeof _albumtracks[id] !== 'undefined') {
                delete _albumtracks[id];
            }
            this.emitChange();
        },
        getAll: function() {
            return _albumtracks;
        }
    });

module.exports = AlbumTracksStore;
