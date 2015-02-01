'use strict';
var React = require('react'),
    Footer = React.createClass({
        render: function() {
            return (
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">{this.props.title}</h5>
                            <p className="grey-text text-lighten-4">{this.props.content}</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">{this.props.linksTitle}</h5>
                            {this.props.children}
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            {this.props.copyright}
                            <a className="grey-text text-lighten-4 right" href="#!">{this.props.moreLinks}</a>
                        </div>
                    </div>
                </footer>
            );
        }
    });

module.exports = Footer;
