'use strict';
var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Modal = require('./modal'),
    ModalStore = require('../../stores/modal_stores'),
    ModalActions = require('../../actions/modal_actions'),
    getStateFromStore = function() {
        console.log(ModalStore.get());
        return ModalStore.get();
    },
    ModalWrapper = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = ModalStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        handleDismissModal: function() {
            ModalActions.dismiss();
        },
        render: function() {
            var modal;

            if (this.state.show) {
                modal = (
                    <div className='modal-overlay' onClick={this.handleDismissModal}>
                        {this.state.content}
                    </div>
                );
            }

            return (
                <ReactCSSTransitionGroup transitionName='modal'>
                    {modal}
                </ReactCSSTransitionGroup>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports = ModalWrapper;
