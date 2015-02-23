'use strict';
var React = require('react'),
    ArtistTracks = React.createClass({
        render: function() {
            
            return (
                <tr className='songs'>
                    <td data-column-title=''>
                        <div>
                            <i className="mdi-av-play-arrow"></i>
                            <i className="mdi-content-add"></i>
                        </div>
                    </td>
                    <td data-column-title='Track'>{this.props.title}</td>
                    <td data-column-title='Time'>{this.props.time}</td>
                    <td data-column-title='Album'>{this.props.album}</td>
                    <td data-column-title=''>
                        <div className="right-align">
                            <i className='small mdi-action-shopping-cart grey-text text-lighten-1'></i>
                        </div>
                    </td>
                </tr>
            );
        }
    });

module.exports = ArtistTracks;
