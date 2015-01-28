'use strict';
var Reflux = require('reflux');

var TracksActions = Reflux.createActions([
    "addTracks",
    "deleteTracks"
]);

module.exports = TracksActions;