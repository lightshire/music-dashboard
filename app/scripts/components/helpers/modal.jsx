'use strict';
var React = require('react');

var Modal = React.createClass({
    render: function() {
        var re_class = '',
            monetize_h4 = '',
            monetize_button = '';

        if (this.props.agreement === 'true') {
            re_class = 'modal modal_monetize';
            monetize_h4 = 'modal_monetize_h4';
            monetize_button = 'modal_monetize_button';
        } else {
            re_class = 'modal';
        }

        return (
            <div id={this.props.id} className={re_class}>
                <h4 className={monetize_h4}>{this.props.title}</h4>
                {this.props.content}
                <div className={monetize_button}>
                    {this.props.buttons.map(function(button){
                        return <a className={button.class_name} onClick={button.onclick}>{button.text}</a>;

                    })}
                </div>
            </div>
        );
    }
});

module.exports =  Modal;
