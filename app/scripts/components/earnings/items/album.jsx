'use strict';
var React = require('react'),
    TrackActions = require('../../../actions/track_actions'),
    Albums = React.createClass({
        handleDeleteTracks: function() {
            TrackActions.deleteTracks(this.props.id);
        },
        render: function() {
            return (
                <tr className="albums">
                    <td>
                        <div>
                            <i className="mdi-av-play-arrow"></i>
                            <i className="mdi-content-add"></i>
                        </div>
                    </td>
                    <td href="/album1">Album 1</td>
                    <td>04:00</td>
                    <td>$20.00</td>
                    <td>JAN. 1, 2015</td>
                    <td>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                    </td>
                    <td>2,500</td>
                </tr>
            );
        }
    });
module.exports = Albums;
