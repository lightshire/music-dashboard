'use strict';
var React = require('react'),
    ArtistData = require('./data/artist_data'),
    Artists = React.createClass({
        render: function() {
        	var artist_data = ([
        		{
        			row_class_name : 'c_row_admin_artists',
            		artist_img : 'http://placehold.it/50x50',
            		artist_img_class : 'c_labels_image',
            		artist_name : 'Artist 1',
            		album_count : 15,
            		track_count : 150,
            		added : 'JAN, 2, 2015'
        		},
        		{
        			row_class_name : 'c_row_admin_artists',
            		artist_img : 'http://placehold.it/50x50',
            		artist_img_class : 'c_labels_image',
            		artist_name : 'Artist 2',
            		album_count : 15,
            		track_count : 150,
            		added : 'JAN, 2, 2015'
        		} 
        	]);
            return (
            	<div className='table'>
    	            <table>
    	                <thead>
    	                    <tr>
    	                        <th></th>
    	                        <th className='grey-text text-lighten-1'>Artist</th>
    	                        <th className='grey-text text-lighten-1'>Albums</th>
    	                        <th className='grey-text text-lighten-1'>Tracks</th>
    	                        <th className='grey-text text-lighten-1'>Added</th>
    	                        <th></th>
    	                    </tr>
    	                </thead>
    	                <ArtistData data={artist_data} />
    	            </table>
    	        </div>
            );
        }
    });
module.exports = Artists;
