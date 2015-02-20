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
        		music_trackpage_list;

        		latest_tracks = (
        			<li className='tab col s6'>
                        <Link
                            to='music.trackpage.tracks'
                            className='waves-effect waves-white btn-flat white-text c-tabs'>
                            Latest Tracks
                        </Link>
                    </li>
        		);

        		most_downloaded = (
        			<li className='tab col s6'>
                        <Link
                            to='music.trackpage.downloaded'
                            className='waves-effect waves-white btn-flat white-text c-tabs'>
                            Most Downloaded
                        </Link>
                    </li>
        		);

				music_trackpage_list = (
				    <div className='col s6'>
				        <ul className='tabs default-tab row-aligned-tab'>
				            {latest_tracks}
				            {most_downloaded}
				        </ul>
				    </div>
				);

            return (
            	<div className='c-body'>
            	    <div className='c-header z-depth-1'>
            	        <div className='container'>
            	            <h4 className='white-text'>Browse</h4>
            	            <div className='c-links'>
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
