'use strict';
var Reflux = require('reflux'),
    TrackActions = require('../actions/track_actions'),
    _artists = {
        1: {
            id: 1,
            avatar: 'http://placehold.it/50x50',
            artist: 'The Peelers',
            albums: '12',
            tracks: '144',
            added: 'Jan 15, 2015'
        }
    },
    ArtistsStore = Reflux.createStore({
        listenables: [TrackActions],
        emitChange: function() {
            // this.trigger(this.getAll);
            this.trigger();
        },
        onAddTracks: function() {
            var data = {
                id: Math.random()*1000,
                avatar: 'http://placehold.it/100x100',
                artist: 'The Peelers',
                albums: '12',
                tracks: '144',
                added: 'Jan 15, 2015'
            };

            _artists[data.id] = data;
            this.emitChange();
        },
        onDeleteTracks: function(id) {
            if(typeof _artists[id] !== 'undefined') {
                delete _artists[id];
            }
            this.emitChange();
        },
        getAll: function() {
            return _artists;
        }
    });

module.exports = ArtistsStore;
