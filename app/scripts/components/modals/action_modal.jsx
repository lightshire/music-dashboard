'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    Actions = React.createClass({
        render: function() {
            var content = '';

            content = (
                <div>
                    <div className='row col s12'>
                        <div className='col s6 m6 toCenter'><a className='createHover' onClick={this.props.showModal}><span className='modalCreate'><i className='large mdi-file-file-upload'></i></span><span>Upload</span></a></div>
                        <div className='col s6 m6 toCenter'><a className='createHover' onClick={this.props.createAlbumModal}><span className='modalCreate'><i className='large mdi-file-folder-open'></i></span><span>Album</span></a></div>
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

module.exports =  Actions;
