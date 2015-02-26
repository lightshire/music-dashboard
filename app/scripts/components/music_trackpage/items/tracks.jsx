'use strict';
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    CartActions = require('../../../actions/cart_actions'),
    Tracks = React.createClass({
    	getInitialState: function() {
            return {
            	addToCart : false
            };
        },
		handleAddToCart: function() {
			CartActions.addToCart(this.props.id);
			this.setState({
	            addToCart : true
	        });
		},
    	render: function() {
    		var price_class = 'price',
    			add_to_cart = '';

    		if (this.state.addToCart === true) {
	    		add_to_cart = (
	    			<li>
						<a className='teal-text' href='#!'>
							<i className='tiny mdi-action-done shopping-cart teal-text'></i>
							Added to Cart
						</a>
					</li>
	    		);
    		} else {
    			add_to_cart = (
    				<li>
						<a onClick={this.handleAddToCart} className='teal-text' href='#!'>
							<i className='tiny mdi-action-shopping-cart shopping-cart teal-text'></i>
							Add to Cart
						</a>
					</li>
    			);
    		}

    		if (this.props.price === 'free') {
    			price_class+= ' teal-text text-lighten-2';
    		} else {
    			price_class+= ' red-text';
    		}

    		return (
                <div className='card col s12 m4'>
					<div className='card-image waves-effect waves-block waves-light'>
						<img className='activator' src={this.props.image} />
					</div>
					<div className='card-content white'>
						<span className='card-title grey-text text-darken-4'>
							{this.props.title}
							<span className='dropdown nav-more'>
								<a href='#'>
									<i className='mdi-navigation-more-vert right nav-icon'></i>
								</a>
								<ul>
									{add_to_cart}
									<li className='divider'></li>
									<li>
										<a className='black-text' href='#!'>
											Play
										</a>
									</li>
									<li>
										<a className='black-text' href='#!'>
											Add to Playlist
										</a>
									</li>
									<li>
										<a className='black-text' href='#!'>
											Share
										</a>
									</li>
								</ul>
							</span>
						</span>
						<p>
							<Link to='music.trackpage.artist.tracks'>
								{this.props.artist}
							</Link>
						</p>
						<p>
							<i className='tiny mdi-action-grade grey-text text-darken-3'></i>
							<i className='tiny mdi-action-grade grey-text text-darken-3'></i>
							<i className='tiny mdi-action-grade grey-text text-darken-3'></i>
							<i className='tiny mdi-action-grade grey-text text-lighten-2'></i>
							<i className='tiny mdi-action-grade grey-text text-lighten-2'></i>
						</p>
						<p className={price_class}>
							$ {this.props.price.toFixed(2)}
						</p>
					</div>
				</div>
			);
		}
	});

module.exports = Tracks;