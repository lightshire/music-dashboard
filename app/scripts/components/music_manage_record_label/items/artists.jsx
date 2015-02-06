'use strict';
var React = require('react'),
    TracksActions = require('../../../actions/track_actions'),
    Artists = React.createClass({
        handleDeleteTracks: function() {
            TracksActions.deleteTracks(this.props.id);
        },
        render: function() {
            
            return (
                <tr className='songs'>
                    <td>
                        <img src={this.props.avatar} />
                    </td>
                    <td>{this.props.artist}</td>
                    <td>{this.props.albums}</td>
                    <td>{this.props.tracks}</td>
                    <td>{this.props.added}</td>
                    <td>
                        <div className='right-align'>
                            <i className='mdi-editor-mode-edit'></i>
                            <i onClick={this.handleDeleteTracks} className='mdi-action-delete'></i>
                        </div>
                    </td>
                </tr>
            );
        }
    });
module.exports = Artists;
