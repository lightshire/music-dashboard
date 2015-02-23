'use strict';
var React = require('react/addons'),
    _ = require('lodash'),
	Cart = require('./music_trackpage/items/cart'),
	MusicTracksActions = require('../stores/music_tracks_stores'),
	getStateFromStore = function() {
        return {
            musictracks: MusicTracksActions.getAll()
        };
    },
    ShoppingCart = React.createClass({
    	getInitialState: function() {
            return getStateFromStore();
        },
    	componentDidMount: function() {
    		$('.mdi-action-shopping-cart').dropdown({
    		      inDuration: 300,
    		      outDuration: 225,
    		      constrain_width: false, // Does not change width of dropdown to that of the activator
    		      hover: false, // Activate on click
    		      alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
    		      gutter: 0, // Spacing from edge
    		      belowOrigin: false // Displays dropdown below the button
    		});
    		this.unsubscribe = MusicTracksActions.listen(this._onChange);
    	},
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        addToCart: function() {
        	MusicTracksActions.addToCart();
        },
        render: function() {
            return (
                <div className='shopping-cart-top'>
                    <i className='small mdi-action-shopping-cart white-text' onClick={this.addToCart}></i>
                	<span id='cart'>0</span>
                </div>
            );
        }
    });
module.exports = ShoppingCart;
