'use strict';
var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    Modal = React.createClass({
        cancelHandler: function() {
            ModalActions.dismiss();
        },
        render: function() {
            var buttons = '';

            if (this.props.buttons instanceof Array) {
                buttons = (
                    <div>
                        {this.props.buttons.map(function(button){
                            return <a className={button.class_name} onClick={button.onclick}>{button.text}</a>;
                        })}
                    </div>
                );
            }

            return (
                <div id={this.props.id} className='modal'>
                    <i onClick={this.cancelHandler} className='close-modal small mdi-content-clear'></i>
                    <h4>{this.props.title}</h4>
                    {this.props.content}
                    {buttons}
                </div>
            );
        }
    });

module.exports =  Modal;
