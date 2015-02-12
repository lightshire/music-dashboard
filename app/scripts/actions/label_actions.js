'use strict';
var Reflux = require('reflux'),
    LabelsActions = Reflux.createActions([
        'addTracks',
        'deleteTracks',
        'updateStatus'
    ]);

module.exports = LabelsActions;
