'use strict';
var Reflux = require('reflux'),
    SessionActions = Reflux.createActions([
        'attemptLogin',
        'logout'
    ]);

module.exports = SessionActions;
