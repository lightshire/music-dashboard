'use strict';
var Reflux = require('reflux'),
    ArtistsActions = Reflux.createActions([
        'addTracks',
        'deleteTracks',
        'updateStatus'
    ]);

module.exports = ArtistsActions;
