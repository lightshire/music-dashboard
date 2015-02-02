'use strict';
var React = require('react'),
    Tabs = React.createClass({
        componentDidMount: function() {
            $('ul.tabs').tabs();
        },
        render: function() {
            return (
                <div>
                    <div className="row">
                        <div className="col s12">
                        <ul className="tabs">
                                <li className={this.props.classes}>
                                    <a href={this.props.link}>{this.props.title}</a>
                                </li>
                        </ul>
                        </div>
                    </div>
                    {this.props.children}
                    <div id="test1" className="col s12">Test 1</div>
                    <div id="test2" className="col s12">Test 2</div>
                    <div id="test3" className="col s12">Test 3</div>
                    <div id="test4" className="col s12">Test 4</div>
                </div>
            );
        }
    });

module.exports = Tabs;
