var React = require('react');

var InputField = React.createClass({
    render: function() {
        console.log('TEXTFIELD PROPERTIES: ', this.props);
        var size = "input-field " + this.props.outerdiv_size;
        var input = '';

        switch (this.props.textfield_type) {
        	case 'textarea':
        		input = (<textarea className="materialize-textarea"></textarea>)
        		break;
        	default:
        		input = (<input id={this.props.textfield_id} type={this.props.textfield_type} className={this.props.textfield_state}/>);
        }
        return (
		    <div className={size}>
		        {this.props.textfield_icon}
		        {input}
		        <label for={this.props.textfield_label_for}>{this.props.textfield_label}</label>
		    </div>
        );
    }
});

module.exports = InputField;