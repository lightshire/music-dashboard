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
        onLogout: function(callback) {
            _session = {
                user_logged_in: false,
                user_type: ''
            }
        },
        onAttemptLogin: function(username, password, callback) {
            /*
             * TODO: change this =p 
             */
            if (username === 'admin') {
                _session.user_logged_in = true;
                _session.user_type = 'admin';
            } else if (username === 'record_label') {
                _session.user_logged_in = true;
                _session.user_type = 'record_label';
            } else if (username === 'artist') {
                _session.user_logged_in = true;
                _session.user_type = 'artist';
            } else {
                _session.user_logged_in = true;
                _session.user_type = 'general_user';
            }

            callback();
        },
        hasAccess: function(user_types) {
            console.log(_session);
            console.log(!!~user_types.indexOf(_session.user_type));
            return !!~user_types.indexOf(_session.user_type);
        }
    });

module.exports = SessionStore;
