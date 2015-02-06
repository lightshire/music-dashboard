'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    InputField = require('../helpers/textfield'),
    UploadSave = React.createClass({
        render: function() {
            var content = '',
                button = '',
                add = this.props.handleAddTracks,
                cancel = this.props.cancelHandler,
                preloader_style = {};

            preloader_style = {
                width: '70%'
            };

            content = (
                <div className='container center-align c_upload_music_file_modal'>
                    <p>
                        <i className='mdi-navigation-check large'></i>
                        <h5>Upload complete</h5>
                        <h6>
                            Please provide track title and description. Click done to confirm
                        </h6>
                        <InputField
                            textfield_type='text'
                            textfield_label='Title'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='title'
                            textfield_label_for='title' />
                        <InputField
                            textfield_type='textarea'
                            textfield_label='Description'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='description'
                            textfield_label_for='description' />
                    </p>
                </div>
            );

            button = ([
                {
                    text : 'Done',
                    onclick : add,
                    class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]);

            return (
                <Modal
                    id='modal4'
                    title='Upload'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  UploadSave;
