'use strict';
var React = require('react'),
    Artist = React.createClass({
        render: function () {
            return (
                <tr className='c_row_admin_artists'>
                    <td><img className="c_labels_image" src={this.props.image} /></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.album_count}</td>
                    <td>{this.props.track_count}</td>
                    <td>{this.props.total_earnings}</td>
                    <td>{this.props.artist_since}</td>
                    <td>
                        <i className='mdi-action-stars'></i>
                        <i className='mdi-action-stars'></i>
                        <i className='mdi-action-stars'></i>
                    </td>
                    <td>{this.props.downloads}</td>
                </tr>
            );
        }
    });

module.exports = Artist;
