'use strict';
var React = require('react'),
LabelData = require('./data/label_data'),
Labels = React.createClass({
    render: function() {
    	var label_data = ([
    		{
    			row_class_name : 'c_row_admin_labels',
        		label_img : 'http://placehold.it/50x50',
        		label_img_class : 'c_labels_image',
        		label_name : 'Record Label 1',
        		artist_count : 4,
        		album_count : 15,
        		track_count : 155,
        		added : 'JAN. 2, 2015'
    		},
    		{
    			row_class_name : 'c_row_admin_labels',
        		label_img : 'http://placehold.it/50x50',
        		label_img_class : 'c_labels_image',
        		label_name : 'Record Label 2',
        		artist_count : 4,
        		album_count : 15,
        		track_count : 155,
        		added : 'JAN. 2, 2015'
    		} 
    	]);
        return (
		    <div className='table'>
	            <table>
	                <thead>
	                    <tr>
	                        <th></th>
	                        <th className='grey-text text-lighten-1'>Record Label</th>
	                        <th className='grey-text text-lighten-1'>Artists</th>
	                        <th className='grey-text text-lighten-1'>Albums</th>
	                        <th className='grey-text text-lighten-1'>Tracks</th>
	                        <th className='grey-text text-lighten-1'>Added</th>
	                        <th></th>
	                    </tr>
	                </thead>
	                <LabelData data={label_data} />
	            </table>
	        </div>
        );
    }
});

module.exports = Labels;
