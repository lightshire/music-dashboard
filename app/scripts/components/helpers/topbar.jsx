'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    Constrainable = require('../mixins/constrainable'),
    LayoutActions = require('../../actions/layout_actions'),
    Player = require('../player'),
    ShoppingCart = require('../helpers/shopping_cart'),
    Login = require('../helpers/login'),
    TopBar = React.createClass({
        toggleSidebar: function() {
            LayoutActions.toggleSidebar();
        },
        mixins: [Constrainable, Router.State, Router.Navigation],
        render: function() {
            var shopping_cart = '';

            if (this.hasAccess(['admin', 'general_user', 'artist', 'record_label'])) {
                shopping_cart=(<ShoppingCart />);
            }

            return (
                <header>
                    <div className='navbar-fixed'>
                        <nav className='top-nav'>
                            <div className='nav-wrapper row'>
                                <div className='col l12'>
                                    <div className='right'>
                                        <Player />
                                        {shopping_cart}
                                        <Login />
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
