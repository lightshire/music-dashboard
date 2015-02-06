'use strict';
var React = require('react'),
    TracksActions = require('../../../actions/track_actions'),
    Modal = require('../../helpers/modal'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Songs = React.createClass({
        render: function() {
            return (
                <tr className="songs">
                    <td>
                        <div>
                            <i className="mdi-av-play-arrow"></i>
                            <i className="mdi-content-add"></i>
                        </div>
                    </td>
                    <td className="c_earnings_tracks_body" href="/track1">Track 1</td>
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
module.exports = Songs;
