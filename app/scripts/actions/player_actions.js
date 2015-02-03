'use strict';
var Reflux = require('reflux'),
    PlayerActions = Reflux.createActions([
        'addTrackToPlaylist',
        'removeTrackFromPlaylist',
        'volumeChange',
        'togglePlaylist',
        'hideModal',
        'toggleVolumeControl',
        'changeVolume',
        'togglePlay',
        'changeCurrentTrack',
        'updateCurrentTrackLength',
        'seekTrack',
        'updateCurrentTime'
    ]);

module.exports = PlayerActions;
