'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Search = require('./helpers/search'),
    MusicTrackpage = React.createClass({
        render: function() {
        	var latest_tracks,
        		most_downloaded,
        		tab_link,
        		music_trackpage_list;

        		latest_tracks = (
        			<li className='tab col s3'>
                        <Link
                            to='music.trackpage.tracks'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Latest Tracks
                        </Link>
                    </li>
        		);

        		most_downloaded = (
        			<li className='tab col s3'>
                        <Link
                            to='music.trackpage.downloaded'
                            className='waves-effect waves-white btn-flat white-text c_tabs'>
                            Most Downloaded
                        </Link>
                    </li>
        		);

				tab_link= (
					<li className='tab col s3'>
		                <Link
		                    to='music.trackpage.link'
		                    className='waves-effect waves-white btn-flat white-text c_tabs'>
		                    Tab Link
		                </Link>
		            </li>
				);

				music_trackpage_list = (
				    <div className="col s12">
				        <ul className='tabs default-tab'>
				            {latest_tracks}
				            {most_downloaded}
				            {tab_link}
				        </ul>
				        <ul className='tabs mobile-tab'>
				            {latest_tracks}
				            {most_downloaded}
				            {tab_link}
				        </ul>
				    </div>
				);

            return (
            	<div className='c_body'>
            	    <div className='c_header z-depth-1'>
            	        <div className='container'>
            	            <h4 className='white-text'>Browse</h4>
            	            <div className='c_links'>
            	                <div className='row'>
            	                    {music_trackpage_list}
            	                </div>
            	            </div>
            	            <Search />
            	        </div>
            	    </div>
            	    <div className='container'>
            	        <RouteHandler />
            	    </div>
            	</div>
            );
        }
    });
module.exports = MusicTrackpage;
