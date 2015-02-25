'use strict';
var React = require('react'),
    CartActions = require('../../../actions/cart_actions'),
    Cart = React.createClass({
        handleDeleteTracks: function() {
            CartActions.deleteItem(this.props.id);
        },
        render: function() {

            return (
                <tr className='songs'>
                    <td data-column-title=''>
                        <div className="right-align">
                            <i onClick={this.handleDeleteTracks} className='mdi-content-clear'></i>
                        </div>
                    </td>
                    <td data-column-title='Track'>{this.props.title}</td>
                    <td data-column-title='Time'>{this.props.time}</td>
                    <td data-column-title='Album'>{this.props.album}</td>
                    <td className='red-text' data-column-title='Price'>${this.props.price.toFixed(2)}</td>
                </tr>
            );
        }
    });

module.exports = Cart;
