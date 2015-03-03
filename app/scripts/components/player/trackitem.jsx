'use strict';
var React = require('react'),
    PlayerActions = require('../../actions/player_actions'),
    TrackItem = React.createClass({
        handleRemoveTrack: function() {
            PlayerActions.removeTrackFromPlaylist(this.props.id);
        },
        handleChangeCurrentTrack: function() {
            PlayerActions.changeCurrentTrack(this.props.id);
        },
        render: function() {
            return (    
                <div className='row track'>
                    <div className='col s2 thumb'>
                        <img src={this.props.thumbnail} />
                    </div>
                    <div className='col s8 info'>
                        <div className='title'><span>{this.props.title}</span></div>
                        <div className='artist'><small>{this.props.artist}</small></div>
                    </div>
                    <div className='col s2 remove'>
                        <div>
                            <a href='#' onClick={this.handleRemoveTrack} className='track-remove'>
                                <i className='mdi-content-clear'></i>
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    });
module.exports = TrackItem;
