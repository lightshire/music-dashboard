'use strict';
var Reflux = require('reflux'),
    AlbumsActions = Reflux.createActions([
        'addTracks',
        'deleteTracks',
        'updateStatus'
    ]);

module.exports = AlbumsActions;
