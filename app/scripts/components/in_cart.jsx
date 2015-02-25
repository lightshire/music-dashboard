'use strict';
var React = require('react'),
    Router = require('react-router'),
    Search = require('./helpers/search'),
    _ = require('lodash'),
    Cart = require('./music_trackpage/items/cart'),
    CartStore = require('../stores/cart_stores'),
    Constrainable = require('./mixins/constrainable'),
    getStateFromStore = function() {
        return {
            cart: CartStore.getAll(),
            count: CartStore.count(),
            total: CartStore.getCartTotal()
        };
    },
    InCart = React.createClass({
        mixins: [Constrainable, Router.Navigation],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = CartStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.cart,
                items;

            items = _.map(data, function(item) {
                return (<Cart
                    id={item.id}
                    title={item.title}
                    time={item.time}
                    album={item.album}
                    price={item.price} />);
            });
            return (
                <div className='c-body'>
                    <div className='c-header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>In Cart ({this.state.count})</h4>
                            <div className='c-links'>
                                <div className='row'>
                                </div>
                            </div>
                            <Search />
                        </div>
                    </div>
                    <div className='container c-main-container z-depth-1'>
                        <div className='table'>
                            <table className='c_responsive_table'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='grey-text text-lighten-1'>Track</th>
                                        <th className='grey-text text-lighten-1'>Time</th>
                                        <th className='grey-text text-lighten-1'>Album</th>
                                        <th className='grey-text text-lighten-1'>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items}
                                    <tr>
                                        <td className='total-price'>Total: ${this.state.total}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports = InCart;
