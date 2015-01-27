var React = require('react');

var Slider = React.createClass({
	componentDidMount: function() {
       $('.slider').slider({full_width: true});
    },
    render: function() {
        return (
            <div className="slider">
              <ul className="slides">
                {this.props.children}
              </ul>
            </div>
        );
    }
});

module.exports = Slider;