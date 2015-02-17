'use strict';
var React = require('react'),
    Delete = require('../../modals/delete_modal'),
    ModalActions = require('../../../actions/modal_actions'),
    ArtistActions = require('../../../actions/artist_actions'),
    Router = require('react-router'),
    Link = Router.Link,
    Artists = React.createClass({
        deleteModal: function() {
            ModalActions.show(
                <Delete
                    key='delete'
                    handleDeleteTracks={this.handleDeleteTracks}
                    cancelHandler={this.cancelHandler} />, 'delete_modal'
            );
        },
        handleDeleteTracks: function() {
            ArtistActions.deleteTracks(this.props.id);
            ModalActions.dismiss();
        },
        cancelHandler: function() {
            ModalActions.dismiss();
        },
        render: function() {
            return (
                <tr className='songs'>
                    <td data-column-title='Avatar'>
                        <img className='circle' src={this.props.avatar} />
                    </td>
                    <td data-column-title='Artist'>
                        <Link to='music.manager.artist.songs'>
                            {this.props.artist}
                        </Link>
                    </td>
                    <td data-column-title='Albums'>{this.props.albums}</td>
                    <td data-column-title='Tracks'>{this.props.tracks}</td>
                    <td data-column-title='Genre'>{this.props.genre}</td>
                    <td data-column-title='Added'>{this.props.added}</td>
                    <td data-column-title='Actions'>
                        <div className='right-align'>
                            <i className='mdi-editor-mode-edit'></i>
                            <i onClick={this.deleteModal} className='mdi-action-delete'></i>
                        </div>
                    </td>
                </tr>
            );
        }
    });

module.exports = Artists;
