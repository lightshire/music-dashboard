'use strict';
var Reflux = require('reflux'),
    TracksActions = Reflux.createActions([
        'addTracks',
        'deleteTracks',
        'updateStatus'
    ]);

module.exports = TracksActions;
