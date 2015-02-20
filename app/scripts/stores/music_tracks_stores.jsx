'use strict';
var Reflux = require('reflux'),
    MusicTracksActions = require('../actions/music_tracks_actions'),
    _musictracks = {
        1: {
            id: 1,
            title: 'Bombtrack',
            time: '3:00',
            album: 'RATM - XX',
            price: '$ 1.00'
        },
        2: {
            id: 2,
            title: 'Killing in the name',
            time: '3:00',
            album: 'Renegades',
            price: '$ 1.00'
        },
        3: {
            id: 3,
            title: 'Take the power back',
            time: '3:00',
            album: 'The battle of Los Angeles',
            price: '$ 2.00'
        },
        4: {
            id: 4,
            title: 'Settle for nothing',
            time: '3:00',
            album: 'Evil Empire',
            price: '$ 1.00'
        },
        5: {
            id: 5,
            title: 'Bullet in the head',
            time: '3:00',
            album: 'Rage Against The Machine',
            price: '$ 1.00'
        },
        6: {
            id: 6,
            title: 'Wake up',
            time: '3:00',
            album: 'Evil Empire',
            price: '$ 1.00'
        },
        7: {
            id: 7,
            title: 'Fistful of steel',
            time: '3:00',
            album: 'Evil Empire',
            price: '$ 1.00'
        },
        8: {
            id: 8,
            title: 'Township Rebellion',
            time: '3:00',
            album: 'Renegades',
            price: '$ 1.00'
        }
    },
    MusicTracksStore = Reflux.createStore({
        listenables: [MusicTracksActions],
        emitChange: function() {
            this.trigger();
        },
        getAll: function() {
            return _musictracks;
        }
    });

module.exports = MusicTracksStore;
