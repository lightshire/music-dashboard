'use strict';
var React = require('react'),
    AlbumTrackpage = React.createClass({
        getInitialState : function() {
            return { 
                cartStatus: true,
                playStatus: true
            };   
        },
        addToCartel : function() {
            if(this.state.cartStatus) {
                this.setState({cartStatus: false});
            }
            if(!this.state.cartStatus) {
                this.setState({cartStatus: true});
            }
            
        },
        playStat : function() {
            if(this.state.playStatus) {
                this.setState({playStatus: false});
            }
            if(!this.state.playStatus) {
                this.setState({playStatus: true});
            }
        },
        render: function() {
            var cart = '',
                num ='';

            if(this.state.cartStatus) {
                cart = (<i className='small mdi-action-shopping-cart grey-text'></i>);
            }

            else if(!this.state.cartStatus) {
                cart = (<div className=' text-teal-accent-3 '><i className='small mdi-navigation-check left'></i>Added to Cart</div>);
            }


            if(this.state.playStatus) {
                num = (<div>{this.props.id}</div>);
            }
            else if(!this.state.playStatus) {
                num = (<i className='small mdi-av-play-circle-outline'></i>);
            }
            return (
                <tr className='songs'>
                    <td><div className='right-align' onClick={this.playStat}>{num}</div></td>
                    <td data-column-title=''><div className='right-align'><i className='mdi-content-add'></i></div></td>
                    <td data-column-title='Track'>{this.props.title}</td>
                    <td data-column-title='Time'>{this.props.time}</td>
                    <td data-column-title='' className='right-align'>
                        <div onClick={this.addToCartel}>{cart}</div>
                    </td>
                </tr>
            );
        }
    });

module.exports = AlbumTrackpage;