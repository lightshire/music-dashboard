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
            status: 'not_monetize',
            image: 'http://placehold.it/400x400/cecece/333',
            price: 'free'
        },
        2: {
            id: 2,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'accepted',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '$ 1.00'
        },
        3: {
            id: 3,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'rejected',
            image: 'http://placehold.it/400x400/cecece/333',
            price: 'free'
        },
        4: {
            id: 4,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending',
            image: 'http://placehold.it/400x400/cecece/333',
            price: 'free'
        },
        5: {
            id: 5,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending',
            image: 'http://placehold.it/400x400/cecece/333',
            price: 'free'
        },
        6: {
            id: 6,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending',
            image: 'http://placehold.it/400x400/cecece/333',
            price: 'free'
        },
        7: {
            id: 7,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '$ 1.00'
        },
        8: {
            id: 8,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'pending',
            image: 'http://placehold.it/400x400/cecece/333',
            price: 'free'
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
                status: 'not_monetize',
                image: 'http://placehold.it/400x400/cecece/333'
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
