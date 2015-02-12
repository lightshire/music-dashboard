'use strict';
var Reflux = require('reflux'),
    LabelActions = require('../actions/label_actions'),
    _labels = {
        1: {
            id: 1,
            avatar: 'http://placehold.it/50x50',
            artist: 'The Peelers',
            albums: '12',
            tracks: '144',
            genre: 'Psychedelic',
            added: 'Jan 15, 2015'
        },
        2: {
            id: 2,
            avatar: 'http://placehold.it/50x50',
            artist: 'The Peelers',
            albums: '12',
            tracks: '144',
            genre: 'Psychedelic',
            added: 'Jan 15, 2015'
        }
    },
    LabelsStore = Reflux.createStore({
        listenables: [LabelActions],
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
                genre: 'Psychedelic',
                added: 'Jan 15, 2015'
            };

            _labels[data.id] = data;
            this.emitChange();
        },
        onDeleteTracks: function(id) {
            if(typeof _labels[id] !== 'undefined') {
                delete _labels[id];
            }
            this.emitChange();
        },
        getAll: function() {
            return _labels;
        }
    });

module.exports = LabelsStore;
