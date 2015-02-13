'use strict';
var React = require('react'),
    Artist = React.createClass({
        render: function () {
            return (
                <tr className='c_row_admin_artists'>
                    <td data-column-title='Avatar'><img className="c_labels_image" src={this.props.image} /></td>
                    <td data-column-title='Name'>{this.props.name}</td>
                    <td data-column-title='Album Count'>{this.props.album_count}</td>
                    <td data-column-title='Track Count'>{this.props.track_count}</td>
                    <td data-column-title='Total Earnings'>{this.props.total_earnings}</td>
                    <td data-column-title='Since'>{this.props.artist_since}</td>
                    <td data-column-title='Rating'>
                        <i className='mdi-action-stars'></i>
                        <i className='mdi-action-stars'></i>
                        <i className='mdi-action-stars'></i>
                    </td>
                    <td data-column-title='Downloads'>{this.props.downloads}</td>
                </tr>
            );
        }
    });

module.exports = Artist;
