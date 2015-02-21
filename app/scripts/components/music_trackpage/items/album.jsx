'use strict';
var React = require('react'),
   
    ArtistTracks = React.createClass({
        componentDidMount : function() {
            var classI = 'small mdi-action-shopping-cart grey-text text-lighten-1';
        },
        addToCart : function(x){
            console.log(x.target);
            console.log(this);
        },
        render: function() {
            return (
                <tr className='songs'>
                    <td><div className='right-align'><i></i>{this.props.id}</div></td>
                    <td data-column-title=''><div className='right-align'><i className="mdi-content-add"></i></div></td>
                    <td data-column-title='Track'>{this.props.title}</td>
                    <td data-column-title='Time'>{this.props.time}</td>
                    <td data-column-title='' className='right-align'>
                        <div onClick={this.addToCart} className='cart'><i className='small mdi-action-shopping-cart grey-text text-lighten-1' ></i></div>
                        <div onClick={this.addToCart} className='text-teal-accent-3 added-cart'><i className='small mdi-navigation-check' ></i>Add to Cart</div>
                    </td>
                </tr>
            );
        }
    });

module.exports = ArtistTracks;
