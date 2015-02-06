'use strict';
var Reflux = require('reflux'),
    TrackActions = require('../actions/track_actions'),
    _tracksforalbum = {
        1: {
            id: 1,
            title: 'French Fries',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago'
        }
    },
    TracksForAlbumStore = Reflux.createStore({
        listenables: [TrackActions],
        emitChange: function() {
            // this.trigger(this.getAll);
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
                date_uploaded: 'an hour ago'
            };

            _tracksforalbum[data.id] = data;
            this.emitChange();
        },
        onDeleteTracks: function(id) {
            if(typeof _tracksforalbum[id] !== 'undefined') {
                delete _tracksforalbum[id];
            }
            this.emitChange();
        },
        getAll: function() {
            return _tracksforalbum;
        }
    });

module.exports = TracksForAlbumStore;
