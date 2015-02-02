'use strict';
var React = require('react'),
    Item = require('../Navigation/item'),
    Dropdown = require('../Navigation/dropdown'),
    NavBar = React.createClass({
        componentDidMount: function() {
            $(".dropdown-button").dropdown({hover: false});
            if(this.props.mobile) {
                $(".button-collapse").sideNav();
            }
        },
        render: function() {
            var nav = '';
            if(this.props.mobile) {
                nav = (
                    <nav>
                        <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <ul id="nav-mobile" className={this.props.classes}>
                                <Item link="#" title="Menu 1" />
                                <Item link="#" title="Menu 2" />
                                <Item link="#" title="Menu 3" />
                                <Item dropdown={true} link="#!" title="Dropdown" dropdown_id="dropdown1" />
                                <Dropdown>
                                    <Item link="#" title="Menu 1" />
                                </Dropdown>
                            </ul>
                            <a className="button-collapse" href="#" data-activates="nav-mobile">
                                <i className="mdi-navigation-menu"></i>
                            </a>
                        </div>
                        </div>
                    </nav>
                );
            } else {
                nav = (
                    <nav>
                        <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <ul id="nav-mobile" className="right side-nav">
                                <Item link="#" title="Menu 1" />
                                <Item link="#" title="Menu 2" />
                                <Item link="#" title="Menu 3" />
                                <Item dropdown={true} link="#!" title="Dropdown" dropdown_id="dropdown1" />
                                <Dropdown>
                                    <Item link="#" title="Menu 1" />
                                </Dropdown>
                            </ul>
                        </div>

                        </div>
                    </nav>
                );
            }

            return (
                <div>
                    {nav}
                </div>
            );
        }
    });

module.exports = NavBar;
