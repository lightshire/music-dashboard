'use strict';
var React = require('react/addons'),
    ShoppingCart = React.createClass({
        render: function() {
            return (
                <div className='shopping-cart-top'>
                    <i className='small mdi-action-shopping-cart white-text'></i>
                </div>
            );
        }
    });
module.exports = ShoppingCart;
