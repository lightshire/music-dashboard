'use strict';
var React = require('react'),
    Modal = React.createClass({
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
                    <h4>{this.props.title}</h4>
                    {this.props.content}
                    {buttons}
                </div>
            );
    }
});

module.exports =  Modal;
