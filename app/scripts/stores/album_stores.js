'use strict';
var Reflux = require('reflux'),
    AlbumActions = require('../actions/album_actions'),
    _albums = {
        1: {
            id: 1,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'rejected'
        },
        2: {
            id: 2,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'not_monetize'
        },
        3: {
            id: 3,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'accepted'
        },
        4: {
            id: 4,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending'
        }
    },
    AlbumStore = Reflux.createStore({
        listenables: [AlbumActions],
        emitChange: function() {
            // this.trigger(this.getAll);
            this.trigger();
        },
        onAddTracks: function() {
            var data = {
                id: Math.random()*1000,
                title: 'Potato Album',
                artist: 'The Peelers',
                time: '20:00',
                label: 'Mashed Records',
                genre: 'Psychedelic',
                date_uploaded: 'an hour ago',
                status: 'not_monetize'
            };

            _albums[data.id] = data;
            this.emitChange();
        },
        onDeleteTracks: function(id) {
            if(typeof _albums[id] !== 'undefined') {
                delete _albums[id];
            }
            this.emitChange();
        },
        getAll: function() {
            return _albums;
        }
    });

module.exports = AlbumStore;
