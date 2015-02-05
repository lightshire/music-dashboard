'use strict';
var React = require('react'),
    InputField = React.createClass({
        render: function() {
            var size = 'input-field ' + this.props.outerdiv_size,
                c_class = 'materialize-textarea ' + this.props.textfield_state,
                input = '',
                icon = '';

            switch (this.props.textfield_type) {
                case 'textarea':
                    input = (<textarea className={c_class}>{this.props.textfield_value}</textarea>);
                    break;
                default:
                    input = (<input id={this.props.textfield_id} type={this.props.textfield_type} defaultValue={this.props.textfield_value} className={this.props.textfield_state}/>);
            }
          
            if(this.props.textfield_icon){
                icon = this.props.textfield_icon;
            }

            return (
                <div className={size}>
                    {icon}
                    {input}
                    <label for={this.props.textfield_label_for}>{this.props.textfield_label}</label>
                </div>
            );
        }
    });

module.exports = InputField;
