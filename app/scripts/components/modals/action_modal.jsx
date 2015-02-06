'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    Actions = React.createClass({
        render: function() {
            var content = '';

            content = (
                <div className='container center-align c_upload_music_file_modal'>
                    <p onClick={this.props.showModal}>
                        <i className='mdi-file-file-upload large'></i>
                        <h5>Upload</h5>
                    </p>
                    <p onClick={this.props.createAlbumModal}>
                        <i className='mdi-file-folder-open large'></i>
                        <h5>Album</h5>
                    </p>
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

module.exports =  Actions;
