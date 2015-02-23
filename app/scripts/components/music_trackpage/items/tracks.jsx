'use strict';
var React = require('react'),
    MusicTracksActions = require('../../../actions/music_tracks_actions'),
    Tracks = React.createClass({
    	componentDidMount: function() {
    		$('.mdi-navigation-more-vert').dropdown({
    		      inDuration: 300,
    		      outDuration: 225,
    		      constrain_width: false, // Does not change width of dropdown to that of the activator
    		      hover: false, // Activate on click
    		      alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
    		      gutter: 0, // Spacing from edge
    		      belowOrigin: false // Displays dropdown below the button
    		    }
    		  );
    	},
    	handleAddToCart: function() {
    	},
    	render: function() {
    		var price_class='price';

    		if (this.props.price === 'free') {
    			price_class+= ' teal-text text-lighten-2';
    		} else {
    			price_class+= ' red-text';
    		}

    		return (
                <div className='card col s12 m3'>
					<div className='card-image waves-effect waves-block waves-light'>
						<img className='activator' src={this.props.image} />
					</div>
					<div className='card-content white'>
						<span className='card-title grey-text text-darken-4'>
							{this.props.title}
							<i className='mdi-navigation-more-vert right' data-activates='nav-more' data-beloworigin='true'></i>
							<ul id='nav-more' className='dropdown-content'>
								<li>
									<a onClick={this.handleAddToCart} className='blue-text' href='#!'>
										<i className='tiny mdi-action-shopping-cart shopping-cart'></i>
										Add to Cart
									</a>
								</li>
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
						<p>
							<a href='#'>
								{this.props.artist}
							</a>
						</p>
						<p>
							<i className='tiny mdi-action-grade grey-text text-darken-3'></i>
							<i className='tiny mdi-action-grade grey-text text-darken-3'></i>
							<i className='tiny mdi-action-grade grey-text text-darken-3'></i>
							<i className='tiny mdi-action-grade grey-text text-lighten-2'></i>
							<i className='tiny mdi-action-grade grey-text text-lighten-2'></i>
						</p>
						<p className={price_class}>
							$ {this.props.price}
						</p>
					</div>
				</div>
			);
		}
	});

module.exports = Tracks;