'use strict';
var React = require('react'),
    TrackActions = require('../../../../actions/track_actions'),
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
                    <td data-column-title='Album' className="c_earnings_albums_body" href="/album1">Album 1</td>
                    <td data-column-title='Duration'>04:00</td>
                    <td data-column-title='Earnings'>$20.00</td>
                    <td data-column-title='Monetized Since'>JAN. 1, 2015</td>
                    <td data-column-title='Rating'>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                    </td>
                    <td data-column-title='Downloads'>2,500</td>
                </tr>
            );
        }
    });
module.exports = Albums;
