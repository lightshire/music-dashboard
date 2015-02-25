'use strict';
var Reflux = require('reflux'),
    _albumtrackpage = {
        1: {
            id: 1,
            title: 'Bombtrack',
            time: '3:00'
        },
        2: {
            id: 2,
            title: 'Killing In The Name',
            time: '3:00'
        },
        3: {
            id: 3,
            title: 'Take The Power Back',
            time: '3:00'
        },
        4: {
            id: 4,
            title: 'Settle For Nothing',
            time: '3:00'
        },
        5: {
            id: 5,
            title: 'Bullet In The Head',
            time: '3:00'
        },
        6: {
            id: 6,
            title: 'Know Your Enemy',
            time: '3:00'
        },
        7: {
            id: 7,
            title: 'Wake Up',
            time: '3:00'
        },
        8: {
            id: 8,
            title: 'Fistful Of Steel',
            time: '3:00'
        },
        9: {
            id: 9,
            title: 'Township Rebellion',
            time: '3:00'
        }
    },
    AlbumTrackPageStore = Reflux.createStore({
        getAll: function() {
            return _albumtrackpage;
        }
    });

module.exports = AlbumTrackPageStore;
