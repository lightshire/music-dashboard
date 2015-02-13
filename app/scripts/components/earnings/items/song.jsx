'use strict';
var React = require('react'),
    Song = React.createClass({
        render: function() {
            return (
                <tr className="songs">
                    <td>
                        <div>
                            <i className="mdi-av-play-arrow"></i>
                            <i className="mdi-content-add"></i>
                        </div>
                    </td>
                    <td data-column-title='Track'>{this.props.title}</td>
                    <td data-column-title='Artist'>{this.props.artist}</td>
                    <td data-column-title='Album'>{this.props.album}</td>
                    <td data-column-title='Total Earnings'>{this.props.total_earnings}</td>
                    <td data-column-title='Added'>{this.props.added}</td>
                    <td data-column-title='Rating'>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                    </td>
                    <td data-column-title='Downloads'>{this.props.downloads}</td>
                </tr>
            );
        }
    });
module.exports = Song;
