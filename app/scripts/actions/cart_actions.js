'use strict';
var Reflux = require('reflux'),
    CartActions = Reflux.createActions([
    	'addToCart',
        'deleteItem',
        'deleteAll'
    ]);

module.exports = CartActions;
