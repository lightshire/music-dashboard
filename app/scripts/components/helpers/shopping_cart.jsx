'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    Link = Router.Link,
	CartStore = require('../../stores/cart_stores'),
	getStateFromStore = function() {
        return {
            cart: CartStore.getAll(),
            count: CartStore.count()
        };
    },
    ShoppingCart = React.createClass({
    	getInitialState: function() {
            return getStateFromStore();
        },
    	componentDidMount: function() {
    		this.unsubscribe = CartStore.listen(this._onChange);
    	},
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            return (
                <div className='shopping-cart-top'>
                    <Link to='cart'>
                       <i className='small mdi-action-shopping-cart white-text' onClick={this.addToCart}></i>
                	   <span id='cart'>{this.state.count}</span>
                    </Link>
                </div>
            );
        },
        _onChange: function() {
            return this.setState(getStateFromStore());
        }
    });
module.exports = ShoppingCart;
