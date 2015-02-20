'use strict';
var React = require('react/addons'),
    _ = require('lodash'),
    Tracks = require('./items/tracks'),
    AlbumTracksStore = require('../../stores/album_tracks_stores'),
    getStateFromStore = function() {
        return {
            albumtracks: AlbumTracksStore.getAll()
        };
    },
    LatestTracks = React.createClass({
    	getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = AlbumTracksStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
        	var data = this.state.albumtracks,
        	    items;

        	items = _.map(data, function(item) {
        	    return (<Tracks
        	        id={item.id}
        	        image={item.image}
        	        title={item.title}
        	        artist={item.artist}
        	        price={item.price} />);
        	});
            return (
            	<div className='row'>
            		{items}
            	</div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });
module.exports = LatestTracks;
