'use strict';
var Reflux = require('reflux'),
    SessionActions = require('../actions/session_actions'),
    _session = {
        user_logged_in: false,
        user_type: ''
    },
    SessionStore = Reflux.createStore({
        listenables: [SessionActions],
        emitChange: function() {
            this.trigger();
        },
        getUser: function() {
            return _session;
        },
        isLoggedIn: function() {
            return _session.user_logged_in;
        },
        hasAccess: function(user_types) {
            return ~user_types.indexOf(_session._user_type);
        }
    });

module.exports = SessionStore;
