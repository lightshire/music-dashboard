'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    CreateRecordLabel = React.createClass({
        render: function() {
            var content = '',
                button = '',
                add = this.props.handleAddLabel,
                cancel = this.props.cancelHandler;

            content = (
                <div className='container center-align'>
                    <div className='row'>
                        <form className='col s12'>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='form_name' type='text' className='validate' />
                                    <label htmlFor='form_name'>Name</label>
                                </div> 
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <input id='bio' type='text' className='validate' />
                                    <label htmlFor='bio'>Bio</label>
                                </div> 
                            </div>
                        </form>
                    </div>
                    <div className='row'>                        
                        <div className='res-up-img col s12'>
                            <p className='toLeft'>Upload a photo</p>
                            <div className='row'>
                                <div className='col s3 toLeft'>
                                    <img src='http://placehold.it/100x100' />
                                </div>
                                <div className='col s9 toLeft'>
                                    <p>at least 1600x1600 pixels in size</p>
                                    <div>
                                        <a className='c-modal-buttons waves-effect waves-light btn black white-text lighten-2'>Choose File</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

            button = ([
                {
                    text : 'Done',
                    onclick : add,
                    class_name : 'c-modal-buttons waves-effect waves-light btn green lighten-2 modal-action modal-trigger modal-close'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c-modal-buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]);

            return (
                <Modal
                    id='modal'
                    title='New Record Label'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  CreateRecordLabel;
