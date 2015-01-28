var React = require('react/addons');

var LayoutActions = require('../actions/LayoutActions');
var Player = require('./Player');

var TopBar = React.createClass({
    toggleSidebar: function() {
        console.log(123);
        LayoutActions.toggleSidebar();
    },
    render: function() {
        return (
        <header>
            <div className="navbar-fixed">
                <nav className="top-nav">
                    <div className="nav-wrapper row">
                        <div className="logo-container col l2">
                            <img src="http://placehold.it/80x60"/>
                            <a href="#" onClick={this.toggleSidebar}><i className="mdi-navigation-menu"></i></a>
                        </div>
                        <div className="col l10">
                            <div className="right">
                                <Player />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        );
    }
});

module.exports = TopBar;
