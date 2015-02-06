'use strict';
var React = require('react'),
    TracksActions = require('../../../actions/track_actions'),
    Modal = require('../../helpers/modal'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    AlbumTracks = React.createClass({
        render: function() {
            return (
                <tr className='songs'>
                    <td>
                        <div>
                            <i className='mdi-av-play-arrow'></i>
                            <i className='mdi-content-add'></i>
                        </div>
                    </td>
                    <td>Track 1</td>
                    <td>Artist 1</td>
                    <td>5:00</td>
                    <td>Label 1</td>
                    <td>Alternative</td>
                    <td>an hour ago</td>
                    <td>
                        <div>
                            <i className='red-text mdi-editor-attach-money'></i>
                            <i className='mdi-editor-mode-edit'></i>
                            <i className='mdi-action-delete'></i>
                        </div>
                    </td>
                </tr>
            );
        }
    });
module.exports = AlbumTracks;
