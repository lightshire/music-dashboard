'use strict';
var Reflux = require('reflux'),
    TracksActions = Reflux.createActions([
        "addTracks",
        "deleteTracks"
    ]);

module.exports = TracksActions;
