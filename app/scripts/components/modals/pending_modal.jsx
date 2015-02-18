'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    Pending = React.createClass({
        render: function() {
            var content = '',
                button = '',
                confirm_modal = this.props.confirmModal;

            content = (
                <div className='c-monetize-modal'>
                    <div className='c-track-info row'>
                        <div className='col s12'>
                            <h6>Your request to monetize this track has been submitted. The process usually takes 2-3 days.</h6><br/>
                        </div>
                        <div className='col s2'>
                            <img src='http://placehold.it/100x100' />
                        </div>
                        <div className='col s10'>
                            <h5>Song Name</h5>
                            <h6>Artist</h6>
                            <span className='orange-text'>Status: Pending</span>
                        </div>
                    </div>
                </div>
            );

            button = ([
                {
                    text : 'Got it!',
                    onclick : confirm_modal,
                    class_name : 'c-modal-buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5'
                }
            ]);

            return (
                <Modal
                    id='modal10'
                    title='Monetize'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  Pending;
