'use strict';
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Artist = React.createClass({
        render: function() {
            return (                
                <li key={this.props.id}><a className='waves-effect waves-blue collapsed-link'>{this.props.artist}</a></li>
            );
        }
    });

module.exports = Artist;
