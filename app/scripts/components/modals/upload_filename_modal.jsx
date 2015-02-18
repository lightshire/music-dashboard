'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    UploadFilename = React.createClass({
        render: function() {
            var content = '',
                button = '',
                upload_progress_modal = this.props.uploadProgressModal,
                cancel = this.props.cancelHandler;

            content = (
                <div className='container center-align c-upload-music-file-modal'>
                    <p>
                        <i className='mdi-av-my-library-music large'></i>
                        <h5>filename.mp3</h5>
                        <h6>Ready for upload</h6>
                    </p>
                </div>
            );

            button = ([
                {
                    text : 'Upload',
                    onclick : upload_progress_modal,
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
                    id='modal2'
                    title='Upload'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  UploadFilename;
