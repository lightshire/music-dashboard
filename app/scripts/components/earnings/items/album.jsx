'use strict';
var React = require('react'),
    Albums = React.createClass({
        handleDeleteTracks: function() {
        },
        render: function() {
            return (
                <tr className='c_row_admin_artists'>
                    <td>
                        <div>
                            <i className="mdi-av-play-arrow"></i>
                            <i className="mdi-content-add"></i>
                        </div>
                    </td>
                    <td data-column-title='Title'>{this.props.title}</td>
                    <td data-column-title='Artist'>{this.props.artist}</td>
                    <td data-column-title='Tracks'>{this.props.track_count}</td>
                    <td data-column-title='Earnings'>{this.props.total_earnings}</td>
                    <td data-column-title='Added'>{this.props.added}</td>
                    <td>
                        <i className='mdi-action-stars'></i>
                        <i className='mdi-action-stars'></i>
                        <i className='mdi-action-stars'></i>
                    </td>
                    <td data-column-title='Downloads'>{this.props.downloads}</td>
                </tr>
            );
        }
    });
module.exports = Albums;
