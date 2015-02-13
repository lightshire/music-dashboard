'use strict';
var React = require('react'),
    Delete = require('../../modals/delete_modal'),
    ModalActions = require('../../../actions/modal_actions'),
    LabelActions = require('../../../actions/label_actions'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    RecordLabel = React.createClass({
        deleteModal: function() {
            ModalActions.show(
                <Delete
                    key='delete'
                    handleDeleteTracks={this.handleDeleteTracks}
                    cancelHandler={this.cancelHandler} />, 'delete_modal'
            );
        },
        handleDeleteTracks: function() {
            LabelActions.deleteTracks(this.props.id);
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
                    <td data-column-title='Artists'>{this.props.artist}</td>
                    <td data-column-title='Albums'>{this.props.albums}</td>
                    <td data-column-title='Tracks'>{this.props.tracks}</td>
                    <td>{this.props.added}</td>
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
module.exports = RecordLabel;
