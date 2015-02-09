'use strict';
var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup,
    ModalWrapper = React.createClass({
        render: function() {
            var title, content, button_items, buttons;

            if (this.props.title) {
                title = this.props.title;
            }

            if (this.props.content) {
                content = this.props.content;
            }

            if (this.props.buttons instanceof Array) {
                button_items = this.props.buttons.map(function(button) {
                    return (
                        <a className={button.class_name} onClick={button.on_click}>
                            {button.text}
                        </a>
                    );
                }

                buttons = (
                    <div>
                        {button_items}
                    </div>
                );
            }

            return (
                <ReactCSSTransitionGroup name="modal">
                    <div id={this.props.id} className='modal'>
                        <h4>{this.props.title}</h4>
                    </div>
                </ReactCSSTransitionGroup>
            );
        }
    });

module.exports = ModalWrapper;
