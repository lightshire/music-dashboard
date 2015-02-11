'use strict';
var Reflux = require('reflux'),
    AlbumTracksActions = Reflux.createActions([
        'addTracks',
        'deleteTracks',
        'updateStatus'
    ]);

module.exports = AlbumTracksActions;
