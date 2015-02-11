'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    Accepted = React.createClass({
        render: function() {
            var content = '',
                button = '',
                confirm_modal = this.props.confirmModal;

            content = (
                <div key='modal_earnings' className='c_monetize_modal'>
                    <div className='c_track_info row'>
                        <div className='col s12'>
                            <h6>Great! Your song was successfully monetized. You can now see earnings for this song.</h6><br/>
                        </div>
                        <div className='col s2'>
                            <img src='http://placehold.it/100x100' />
                        </div>
                        <div className='col s10'>
                            <h5>Song Name</h5>
                            <h6>Artist</h6>
                            <span className='green-text'>Status: Approved</span>
                        </div>
                        <div className='col s12'>
                            <br/><h6>Earnings: $0.99 per day</h6>
                        </div>
                    </div>
                </div>
            );

            button = ([
                {
                    text : 'Got it!',
                    onclick : confirm_modal,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5'
                }
            ]);

            return (
                <Modal
                    id='modal9'
                    title='Monetize'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  Accepted;
