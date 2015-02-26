'use strict';
var Reflux = require('reflux'),
    CartActions = require('../actions/cart_actions'),
    MusicTrackStore = require('../stores/music_tracks_stores'),
    _cart = {

    },
    CartStore = Reflux.createStore({
        listenables: [CartActions],
        emitChange: function() {
            this.trigger();
        },
        getAll: function() {
            return _cart;
        },
        onAddToCart: function(id) {
            var data = MusicTrackStore.getById(id);

            if (data) {
                _cart[id] = data;
            }

            this.emitChange();
        },
        count: function() {
            return Object.keys(_cart).length;
        },
        onDeleteItem: function(id) {
            if(typeof _cart[id] !== 'undefined') {
                delete _cart[id];
            }
            this.emitChange();
        },
        onDeleteAll: function() {
            _cart = {};

            this.emitChange();
        },
        getCartTotal: function() {
            var total = 0;
            for(var i in _cart){
                if(_cart.hasOwnProperty(i)){
                    total += _cart[i].price;
                }
            }
            return total.toFixed(2);
        },
    });

module.exports = CartStore;
