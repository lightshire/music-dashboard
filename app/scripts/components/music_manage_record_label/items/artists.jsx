'use strict';
var React = require('react'),
    Delete = require('../../modals/delete_modal'),
    TrackActions = require('../../../actions/track_actions'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Artists = React.createClass({
        getInitialState: function() {
            return {
                delete_modal: false
            };
        },
        deleteModal: function() {
            this.setState({
                delete_modal: !this.delete_modal
            });
        },
        handleDeleteTracks: function() {
            this.setState({
                delete_modal: false
            });
            TrackActions.deleteTracks(this.props.id);
        },
        cancelHandler: function() {
            this.setState({
                delete_modal: false
            });
        },
        render: function() {
            var modal = '';

            console.log('abcd: ',this.state.delete_modal);
            if (this.state.delete_modal) {
                modal = <Delete
                            key='delete'
                            handleDeleteTracks={this.handleDeleteTracks}
                            cancelHandler={this.cancelHandler} />;
            }

            return (
                <tr className='songs'>
                    <td>
                        <img className='circle' src={this.props.avatar} />
                    </td>
                    <td>{this.props.artist}</td>
                    <td>{this.props.albums}</td>
                    <td>{this.props.tracks}</td>
                    <td>{this.props.added}</td>
                    <td>
                        <div className='right-align'>
                            <i className='mdi-editor-mode-edit'></i>
                            <i onClick={this.deleteModal} className='mdi-action-delete'></i>
                        </div>
                    </td>
                    <ReactCSSTransitionGroup transitionName='modalx'>
                        {modal}
                    </ReactCSSTransitionGroup>
                </tr>
            );
        }
    });
module.exports = Artists;
