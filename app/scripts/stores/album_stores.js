'use strict';
var Reflux = require('reflux'),
    TrackActions = require('../actions/track_actions'),
    _albums = {
        1: {
            id: 1,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'green-text mdi-editor-attach-money'
        },
        2: {
            id: 2,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'grey-text mdi-editor-attach-money'
        },
        3: {
            id: 3,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'red-text mdi-editor-attach-money'
        },
        4: {
            id: 4,
            title: 'Potato Album',
            artist: 'The Peelers',
            time: '20:00',
            label: 'Mashed Records',
            genre: 'Psychedelic',
            date_uploaded: 'an hour ago',
            status: 'orange-text mdi-editor-attach-money'
        }
    },
    AlbumStore = Reflux.createStore({
        listenables: [TrackActions],
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
                date_uploaded: 'an hour ago'
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
