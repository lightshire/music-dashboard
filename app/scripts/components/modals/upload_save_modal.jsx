'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    InputField = require('../helpers/textfield'),
    Constrainable = require('../mixins/constrainable'),
    UploadSave = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        render: function() {
            var content = '',
                button = '',
                add = this.props.handleAddTracks,
                cancel = this.props.cancelHandler,
                album = (
                    <span className='selectfield'>
                        <label>Choose Album</label>
                        <select>
                            <option value='' disabled selected>Choose your option</option>
                            <option value='1'>Potato Album</option>
                        </select>
                    </span>
                ),

                artist = (
                    <span className='selectfield'>
                        <label>Choose Artist</label>
                        <select>
                            <option value='' disabled selected>Choose your option</option>
                            <option value='1'>The Peelers</option>
                        </select>
                    </span>
                ),

                label = (
                    <span className='selectfield'>
                        <label>Choose Record Label</label>
                        <select>
                            <option value='' disabled selected>Choose your option</option>
                            <option value='1'>The Peelers</option>
                        </select>
                    </span>
                );

            if (this.hasAccess(['general_user'])) {
                album = '';
                artist = '';
                label = '';
            }

            if (this.hasAccess(['artist'])) {
                artist = '';
                label = '';
            }

            if (this.hasAccess(['record_label'])) {
                label = '';
            }

            content = (
                <div className='container center-align c-upload-music-file-modal'>
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
                        {album}
                        {artist}
                        {label}
                    </p>
                </div>
            );

            button = ([
                {
                    text : 'Done',
                    onclick : add,
                    class_name : 'c-modal-buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c-modal-buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
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
