'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    InputField = require('../helpers/textfield'),
    CreateAlbum = React.createClass({
        render: function() {
            var content = '',
                button = '',
                cancel = this.props.cancelHandler;

            content = (
                <div className='container center-align c_upload_music_file_modal'>
                    <p>
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
                        <h5>Upload an album art</h5>
                        <img src='http://placehold.it/85x85&text=avatar' />
                        <h6>At least 1600 x 1600 pixels in size</h6>
                        <a className='c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' >Choose from File</a>
                    </p>
                </div>
            );

            button = ([
                {
                    text : 'Create Album',
                    onclick : cancel,
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
                    id='modal5'
                    title='Create Album'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  CreateAlbum;
