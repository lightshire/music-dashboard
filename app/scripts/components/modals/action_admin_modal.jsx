'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    ActionsAdmin = React.createClass({
        render: function() {
            var content = '';

            content = (
                <div>
                    <div className='row col s12'>
                        <div className='col s3 m3 toCenter'><a className='createHover' onClick={this.props.showModal}><span className='modalCreate'><i className='large mdi-file-file-upload'></i></span><span>Upload</span></a></div>
                        <div className='col s3 m3 toCenter'><a className='createHover' onClick={this.props.createAlbumModal}><span className='modalCreate'><i className='large mdi-file-folder-open'></i></span><span>Album</span></a></div>
                        <div className='col s3 m3 toCenter'><a className='createHover'><span className='modalCreate'><i className='large mdi-action-perm-identity'></i></span><span>Artist</span></a></div>
                        <div className='col s3 m3 toCenter'><a className='createHover'><span className='modalCreate' onClick={this.props.createRecordLabelModal}><i className='large mdi-image-adjust'></i></span><span>Record Label</span></a></div>
                    </div>
                </div>
            );

            return (
                <Modal
                    id='modal12'
                    title='New'
                    content={content} />
            );
        }
    });

module.exports =  ActionsAdmin;
