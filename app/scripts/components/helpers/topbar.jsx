'use strict';
var React = require('react/addons'),
    LayoutActions = require('../../actions/layout_actions'),
    Player = require('../player'),
    TopBar = React.createClass({
        toggleSidebar: function() {
            LayoutActions.toggleSidebar();
        },
        render: function() {
            return (
                <header>
                    <div className='navbar-fixed'>
                        <nav className='top-nav'>
                            <div className='nav-wrapper row'>
                                <div className='col l10'>
                                    <div className='right'>
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
//onClick={this.toggleSidebar} 
