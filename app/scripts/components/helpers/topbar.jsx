'use strict';
var React = require('react/addons');

var LayoutActions = require('../../actions/layout_actions');

var TopBar = React.createClass({
    toggleSidebar: function() {
        LayoutActions.toggleSidebar();
    },
    render: function() {
        return (
            <header>
                <div className="navbar-fixed">
                    <nav className="top-nav">
                        <div className="nav-wrapper">
                            <div className="logo-container">
                                <img src="http://placehold.it/80x60"/>
                                <a href="#" onClick={this.toggleSidebar}><i className="mdi-navigation-menu"></i></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
});

module.exports = TopBar;