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

                            <div className='c_main_logo'><img src='http://placehold.it/80x64' /></div>
                            <div className='c_nav_menu_div'><a className='c_nav_icon' href='#' onClick={this.toggleSidebar}><i className='mdi-navigation-menu'></i></a></div>

                            <div className='c_player'>
                                <Player />
                            </div>

                        </nav>
                    </div>
                </header>
            );
        }
    });
module.exports = TopBar;
