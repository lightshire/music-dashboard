'use strict';
var React = require('react'),
    InputField = React.createClass({
        render: function() {
            var size = 'input-field ' + this.props.outerdiv_size,
                input = '';
            switch (this.props.textfield_type) {
                case 'textarea':
                    input = (<textarea className='materialize-textarea'></textarea>);
                    break;
                default:
                    input = (<input id={this.props.textfield_id} type={this.props.textfield_type} className={this.props.textfield_state}/>);
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
