'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    UploadProgress = React.createClass({
        render: function() {
            var content = '',
                button = '',
                preloader_style = {};

            preloader_style = {
                width: '70%'
            };

            content = (
                <div key='uploading_modal' onClick={this.props.doneModal}
                    className='container center-align c_upload_music_file_modal'>
                    <p>
                        <div className='progress'>
                            <div className='determinate'
                                style={preloader_style}>
                            </div>
                        </div>
                        <h5>Uploading music file</h5>
                        <h6>70%</h6>
                    </p>
                </div>
            );

            button = ([
                {
                    text : 'Upload',
                    onclick : '',
                    class_name : 'c_modal_buttons waves-effect waves-light btn grey lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : '',
                    class_name : 'c_modal_buttons waves-effect waves-light btn grey lighten-2 modal-action modal-close'
                }
            ]);

            return (
                <Modal
                    id='modal3'
                    title='Upload'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  UploadProgress;
