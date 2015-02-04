'use strict';
var React = require('react'),
    PlayerActions = require('../../actions/player_actions'),
    TrackItem = React.createClass({
        handleRemoveTrack: function() {
            PlayerActions.removeTrackFromPlaylist(this.props.id);
        },
        render: function() {
            return (
                <li>
                    <div className='row track-item'>
                        <div className='col s2 track-thumb-container'>
                            <img className='track-thumb' src={this.props.thumbnail} />
                        </div>
                        <div className='col s8 track-title-container'>
                            <span className='track-title'>
                                {this.props.title}
                            </span>
                        </div>
                        <div className='col s2 track-remove-container'>
                            <a href='#' onClick={this.handleRemoveTrack} className='track-remove'>
                                <i className='mdi-navigation-cancel'></i>
                            </a>
                        </div>
                    </div>
                </li>
            );
        }
    });
module.exports = TrackItem;
