'use strict';
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Category = React.createClass({
        render: function() {
            return (                
                <li key={this.props.id}><a className='waves-effect waves-blue collapsed-link'>{this.props.title}</a></li>
            );
        }
    });

module.exports = Category;
