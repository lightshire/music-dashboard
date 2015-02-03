'use strict';
var Reflux = require('reflux'),
    LayoutActions = require('../actions/layout_actions'),
    _state = {
        sidebar: true
    },
    LayoutStore = Reflux.createStore({
        listenables: [LayoutActions],
        onToggleSidebar: function() {
            _state.sidebar = !_state.sidebar;
            this.emitChange();
        },
        get: function(key) {
            return typeof _state[key] !== 'undefined' ? _state[key] : null;
        },
        getAll: function() {
            return _state;
        },
        emitChange: function() {
            this.trigger();
        }
    });

module.exports = LayoutStore;
