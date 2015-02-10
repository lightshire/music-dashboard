'use strict';
var React = require('react/addons'),
    Reflux = require('reflux'),
    ModalActions = require('../actions/modal_actions'),
    _modal = {
        show: false,
        content: '',
        key: '',
    },
    ModalStore = Reflux.createStore({
        listenables: [ModalActions],
        emitChange: function() {
            this.trigger();
        },
        onShow: function(content, key) {
            _modal.show = true;
            _modal.content = content;

            this.emitChange();
        },
        onDismiss: function() {
            _modal.show = false;
            _modal.content = '';
            _modal.key = '';

            console.log('asdfghjklsdf');

            this.emitChange();
        },
        get: function() {
            return _modal;
        }
    });

module.exports = ModalStore;
