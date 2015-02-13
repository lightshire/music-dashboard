'use strict';
var React = require('react'),
    AlbumActions = require('../../../actions/album_actions'),
    Delete = require('../../modals/delete_modal'),
    Accepted = require('../../modals/accepted_modal'),
    Pending = require('../../modals/pending_modal'),
    Rejected = require('../../modals/rejected_modal'),
    Monetize = require('../../modals/monetize_modal'),
    ModalActions = require('../../../actions/modal_actions'),
    Router = require('react-router'),
    Link = Router.Link,
    Albums = React.createClass({
        handleDeleteTracks: function() {
            AlbumActions.deleteTracks(this.props.id);
            ModalActions.dismiss();
        },
        deleteModal: function() {
            ModalActions.show(
                <Delete
                    key='delete'
                    handleDeleteTracks={this.handleDeleteTracks}
                    cancelHandler={this.cancelHandler} />, 'delete_modal'
            );
        },
        showModal: function() {
            var modal = '';

            switch (this.props.albumstatus) {
                case 'accepted':
                    modal = (
                        <Accepted
                            key = 'rejected'
                            confirmModal = {this.confirmModal} />
                    );
                    break;
                case 'pending':
                    modal = (
                        <Pending
                            key = 'rejected'
                            confirmModal = {this.confirmModal} />
                    );
                    break;
                case 'rejected':
                    modal = (
                        <Rejected
                            key = 'rejected'
                            confirmModal = {this.confirmModal} />
                    );
                    break;
                case 'not_monetize':
                    modal = (
                        <Monetize
                            key = 'not_monetize'
                            monetizeModal = {this.monetizeModal}
                            cancelHandler = {this.cancelHandler} />
                    );
                    break;
            }
            ModalActions.show(modal, this.props.albumstatus);
        },
        monetizeModal: function() {
            this.props.albumstatus = 'pending';
            ModalActions.show(
                <Pending
                    key = 'rejected'
                    confirmModal = {this.confirmModal} />, this.props.albumstatus
            );
        },
        confirmModal: function () {
            ModalActions.dismiss();
        },
        cancelHandler: function() {
            ModalActions.dismiss();
        },
        render: function() {
            var monetize_class = 'mdi-editor-attach-money';

            switch (this.props.albumstatus) {
                case 'accepted':
                    monetize_class += ' green-text';
                    break;
                case 'pending':
                    monetize_class += ' orange-text';
                    break;
                case 'rejected':
                    monetize_class += ' red-text';
                    break;
                case 'not_monetize':
                    monetize_class += ' grey-text';
                    break;
            }

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
                        <div className='right-align'>
                            <i onClick={this.showModal} id='earn' className={monetize_class}></i>
                            <i className='mdi-editor-mode-edit'></i>
                            <i onClick={this.deleteModal} className='mdi-action-delete'></i>
                        </div>
                    </td>
                </tr>
            );
        }
    });

module.exports = Albums;
