var React = require('react');

var Modal = React.createClass({
    render: function() {
    	console.log('modal properties: ', this.props)
        return (
			<div id={this.props.id} className="modal">
			    <h4>{this.props.title}</h4>
			    {this.props.content}
			    <div>
					{this.props.buttons.map(function(button){
			    		return <a href="#" className={button.class_name}>{button.text}</a>;
		            })}
			    </div>
			</div>
        );
    }
});

module.exports =  Modal;
