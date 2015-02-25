'use strict';
var Reflux = require('reflux'),
    CartActions = Reflux.createActions([
    	'addToCart',
        'deleteItem'
    ]);

module.exports = CartActions;
