'use strict';
var React = require('react'),
    Tracks = React.createClass({
    	render: function() {
    		return (
                <div className='card col s12 m3'>
					<div className='card-image waves-effect waves-block waves-light'>
						<img className='activator' src={this.props.image} />
					</div>
					<div className='card-content white'>
						<span className='card-title activator grey-text text-darken-4'>
							{this.props.title}
							<i className='mdi-navigation-more-vert right'></i>
						</span>
						<p>
							<a href='#'>
								{this.props.artist}
							</a>
						</p>
						<p>
							<i class='tiny mdi-action-grade'></i>
							<i class='tiny mdi-action-grade'></i>
							<i class='tiny mdi-action-grade'></i>
							<i class='tiny mdi-action-grade'></i>
							<i class='tiny mdi-action-grade'></i>
						</p>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							{this.props.title}
							<i className='mdi-navigation-close right'></i>
						</span>
						<p>Here is some more information about this product that is only revealed once clicked on.</p>
					</div>
				</div>
			);
		}
	});

module.exports = Tracks;