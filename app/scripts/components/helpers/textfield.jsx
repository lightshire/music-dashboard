'use strict';
var React = require('react');

var InputField = React.createClass({
    render: function() {
        var size = 'input-field ' + this.props.outerdiv_size,
            c_class = 'materialize-textarea ' + this.props.textfield_state,
            input = '';

        if(this.props.textfield_value) {
            switch (this.props.textfield_type) {
                case 'textarea':
                    input = (<textarea className={c_class}>{this.props.textfield_value}</textarea>);
                    break;
                default:
                    input = (<input id={this.props.textfield_id} type={this.props.textfield_type} defaultValue={this.props.textfield_value} className={this.props.textfield_state}/>);
            }
        } else {
            switch (this.props.textfield_type) {
                case 'textarea':
                    input = (<textarea className={c_class}></textarea>);
                    break;
                default:
                    input = (<input id={this.props.textfield_id} type={this.props.textfield_type} className={this.props.textfield_state}/>);
            }
        }


        if (this.props.textfield_icon) {
            return (
                <div className={size}>
                    {this.props.textfield_icon}
                    {input}
                    <label for={this.props.textfield_label_for}>{this.props.textfield_label}</label>
                </div>
            );
        }

        return (
            <div className={size}>
                {input}
                <label for={this.props.textfield_label_for}>{this.props.textfield_label}</label>
            </div>
        );
    }
});

module.exports = InputField;
