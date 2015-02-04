'use strict';
var React = require('react');

var Modal = React.createClass({
    render: function() {
        if (this.props.buttons) {
    return (
                <div id={this.props.id} className="modal">
                    <h4>{this.props.title}</h4>
                    {this.props.content}
                    <div>
                        {this.props.buttons.map(function(button){
                            return <a className={button.class_name} onClick={button.onclick}>{button.text}</a>;

                        })}
                    </div>
                </div>
            );
        }else {
            return (
            <div id={this.props.id} className="modal">
                <h4>{this.props.title}</h4>
                {this.props.content}
            </div>
        );
        }
    }
});

module.exports =  Modal;
