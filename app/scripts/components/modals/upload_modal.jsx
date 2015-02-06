'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    Upload = React.createClass({
        render: function() {
            var content = '',
                button = '',
                upload_filename_modal = this.props.uploadFilenameModal,
                cancel = this.props.cancelHandler;

            content = (
                <div className='container center-align c_upload_music_file_modal'>
                    <p>
                        <i className='mdi-file-file-upload large'></i>
                        <h5>Drag a music file here</h5>
                        <h6>- or -</h6>
                        <a className='waves-effect waves-light btn red lighten-2 c_select_a_track_button'>
                            Select a track from your computer
                        </a>
                    </p>
                </div>
            );

            button = ([
                {
                    text : 'Upload',
                    onclick : upload_filename_modal,
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
                    id='modal1'
                    title='Upload'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  Upload;
