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
        getCartTotal: function() {
            var total = 0;
            for(Object.keys in _cart){
                if(_cart.hasOwnProperty(Object.keys)){
                    total += _cart[Object.keys].price;
                }
            }
            return total.toFixed(2);
        },
    });

module.exports = CartStore;
