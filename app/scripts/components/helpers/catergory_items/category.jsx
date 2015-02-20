'use strict';
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Categories = React.createClass({
        render: function() {
            return (                
                <li key={this.props.id}><a href='#' className='waves-effect waves-blue collapsed-link'>{this.props.title}</a></li>
            );
        }
    });

module.exports = Categories;
