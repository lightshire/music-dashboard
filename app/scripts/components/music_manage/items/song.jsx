'use strict';
var React = require('react'),
    TracksActions = require('../../../actions/track_actions'),
    Delete = require('../../modals/delete_modal'),
    Accepted = require('../../modals/accepted_modal'),
    Pending = require('../../modals/pending_modal'),
    Rejected = require('../../modals/rejected_modal'),
    Monetize = require('../../modals/monetize_modal'),
    ModalActions = require('../../../actions/modal_actions'),
    Router = require('react-router'),
    Link = Router.Link,
    Songs = React.createClass({
        handleDeleteTracks: function() {
            TracksActions.deleteTracks(this.props.id);
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

            switch (this.props.songstatus) {
                case 'accepted':
                    modal = (
                        <Accepted
                            key = 'accepted'
                            confirmModal = {this.confirmModal} />
                    );
                    break;
                case 'pending':
                    modal = (
                        <Pending
                            key = 'pending'
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
            ModalActions.show(modal, this.props.songstatus);
        },
        monetizeModal: function() {
            TracksActions.updateStatus(this.props.id, 'pending');

            ModalActions.show(
                <Pending
                    key = 'pending'
                    confirmModal = {this.confirmModal} />, this.props.songstatus
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

            switch (this.props.songstatus) {
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
                    <td data-column-title=''>
                        <div>
                            <i className='mdi-av-play-arrow'></i>
                            <i className='mdi-content-add'></i>
                        </div>
                    </td>
                    <td data-column-title='Title'>{this.props.songs}</td>
                    <td data-column-title='Artist'>
                        <Link to='music.manager.artist.songs'>
                            {this.props.artists}
                        </Link>
                    </td>
                    <td data-column-title='Item'>{this.props.time}</td>
                    <td data-column-title='Label'>{this.props.label}</td>
                    <td data-column-title='Genre'>{this.props.genre}</td>
                    <td data-column-title='Uploaded'>{this.props.uploaded}</td>
                    <td data-column-title=''>
                        <div className="right-align">
                            <i onClick={this.showModal} id="earn" className={monetize_class}></i>
                            <i className="mdi-editor-mode-edit"></i>
                            <i onClick={this.deleteModal} className="mdi-action-delete"></i>
                        </div>
                    </td>
                </tr>
            );
        }
    });

module.exports = Songs;
