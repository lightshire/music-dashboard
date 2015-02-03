'use strict';
var React = require('react');
var _ = require('lodash');

var LabelData = React.createClass({
    render: function() {
    	var x =  _.map(this.props.data, function(data, i){
    		console.log(data);
    		return (
    				<tr className="c_row_admin_artists">
    					<td><img className={data.artist_img_class} src={data.artist_img} /></td>
    					<td>{data.artist_name}</td>
    					<td>{data.album_count}</td>
    					<td>{data.track_count}</td>
    					<td>{data.added}</td>
    					<td>
    						<div>
    							<i className="mdi-editor-mode-edit"></i>
    							<i className="mdi-action-delete"></i>
    						</div>
    					</td>
    				</tr>
    			);
    	});
    	return (
    		<tbody>
    			{x}
    		</tbody>
    	);
    }
});

module.exports = LabelData;
