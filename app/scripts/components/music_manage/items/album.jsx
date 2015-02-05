'use strict';
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    TrackActions = require('../../../actions/track_actions'),
    Albums = React.createClass({
        handleDeleteTracks: function() {
            TrackActions.deleteTracks(this.props.id);
        },
        render: function() {
            return (
                <tr className='songs'>
                    <td>
                        <div><i className='mdi-av-play-arrow'></i></div>
                        <div><i className='mdi-content-add'></i></div>
                    </td>
                    <td>
                        <Link to='music.manager.album.songs' params={{id: this.props.id}} >
                            {this.props.albums}
                        </Link>
                    </td>
                    <td>{this.props.artists}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.label}</td>
                    <td>{this.props.genre}</td>
                    <td>{this.props.uploaded}</td>
                    <td>
                        <div><i className='mdi-editor-attach-money'></i></div>
                        <div><i className='mdi-editor-mode-edit'></i></div>
                        <div onClick={this.handleDeleteTracks}><i className='mdi-action-delete'></i></div>
                    </td>
                </tr>
            );
        }
    });
module.exports = Albums;
