'use strict';
var React = require('react'),
    Modal = React.createClass({
    render: function() {
        var re_class = '',
            monetize_h4 = '',
            monetize_button = '',
            buttons = '';

        if (this.props.agreement === 'true') {
            re_class = 'modal modal_monetize';
            monetize_h4 = 'modal_monetize_h4';
            monetize_button = 'modal_monetize_button';
        } else {
            re_class = 'modal';
        }

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
