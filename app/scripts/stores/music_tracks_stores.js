'use strict';
var Reflux = require('reflux'),
    React = require('react/addons'),
    _ = require('lodash'),
    Cart = require('../components/music_trackpage/items/cart'),
    MusicTracksActions = require('../actions/music_tracks_actions'),
    _musictracks = {
        1: {
            id: 1,
            title: 'Bombtrack',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'RATM - XX',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '1.00'
        },
        2: {
            id: 2,
            title: 'Killing in the name',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'Renegades',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '1.00'
        },
        3: {
            id: 3,
            title: 'Take the power back',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'The battle of Los Angeles',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '2.00'
        },
        4: {
            id: 4,
            title: 'Settle for nothing',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'Evil Empire',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '1.00'
        },
        5: {
            id: 5,
            title: 'Bullet in the head',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'Rage Against The Machine',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '1.00'
        },
        6: {
            id: 6,
            title: 'Wake up',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'Evil Empire',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '1.00'
        },
        7: {
            id: 7,
            title: 'Fistful of steel',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'Evil Empire',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '1.00'
        },
        8: {
            id: 8,
            title: 'Township Rebellion',
            artist: 'Rage Against The Machine',
            time: '3:00',
            album: 'Renegades',
            image: 'http://placehold.it/400x400/cecece/333',
            price: '1.00'
        }
    },
    MusicTracksStore = Reflux.createStore({
        listenables: [MusicTracksActions],
        emitChange: function() {
            this.trigger();
        },
        onAddToCart: function(id) {
            var cart=0;
            if (typeof _musictracks[id] !== 'undefined') {
                cart++;
            }
        },
        getAll: function() {
            return _musictracks;
        }
    });

module.exports = MusicTracksStore;
