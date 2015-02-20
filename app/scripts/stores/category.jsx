'use strict';
var Reflux = require('reflux'),
    _category = {
        1: {
            id: 1,
            title: 'Alternative Rock'
        },
        2: {
            id: 2,
            title: 'Ambient'
        },
        4: {
            id: 4,
            title: 'Classical'
        },
        5: {
            id: 5,
            title: 'Country'
        },
        6: {
            id: 6,
            title: 'Dance'
        },
        7: {
            id: 7,
            title: 'Deep House'
        },
        8: {
            id: 8,
            title: 'Disco'
        },
        9: {
            id: 9,
            title: 'Drum & Bass'
        }
    },
    Categories = Reflux.createStore({
        getAll: function() {
            return _category;
        }
    });

module.exports = Categories;