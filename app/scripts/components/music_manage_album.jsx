'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    AlbumTracksActions = require('../actions/album_tracks_actions'),
    Search = require('./helpers/search'),
    Upload = require('./modals/upload_modal'),
    UploadFilename = require('./modals/upload_filename_modal'),
    UploadProgress = require('./modals/upload_progress_modal'),
    UploadSave = require('./modals/upload_save_modal'),
    Constrainable = require('./mixins/constrainable'),
    ModalActions = require('../actions/modal_actions'),
    MusicManagerAlbum = React.createClass({
        mixins: [Constrainable, Router.State, Router.Navigation],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        handleAddAlbumTracks: function() {
            var id = this.getParams().id;
            
            AlbumTracksActions.addTracks();
            ModalActions.dismiss();
            this.transitionTo('music.manager.album.songs', {id: id});
        },
        showModal: function() {
            ModalActions.show(<Upload
                            key='upload'
                            uploadFilenameModal={this.uploadFilenameModal}
                            cancelHandler={this.cancelHandler} />, 'upload_modal' );
        },
        uploadFilenameModal: function() {
            ModalActions.show(<UploadFilename
                            key='uploadfilename'
                            uploadProgressModal={this.uploadProgressModal}
                            cancelHandler={this.cancelHandler} />, 'upload_modal' );
        },
        uploadProgressModal: function() {
            ModalActions.show(<UploadProgress
                            key='uploadprogress'
                            uploadSaveModal={this.uploadSaveModal}/>, 'uploadprogress_modal' );
        },
        uploadSaveModal: function() {
            ModalActions.show(<UploadSave
                            key='uploadsave'
                            handleAddTracks={this.handleAddAlbumTracks}
                            cancelHandler={this.cancelHandler} />, 'uploadsave_modal' );
        },
        cancelHandler: function() {
            ModalActions.dismiss();
        },
        render: function() {
            var id = this.getParams().id;

            return (
                <div className='c_body'>
                    <div className='c_header'>
                        <div className='container'>
                            <h4 className='white-text'>
                                <Link to='music.manager.albums'>
                                    <i className='mdi-hardware-keyboard-backspace black-text'></i>
                                </Link>
                                Potato Album
                            </h4>
                            <div className='c_links'>
                                <Link to='music.manager.album.songs' params={{id: id}} className='waves-effect waves-white btn-flat white-text c_tabs'>Tracks</Link>
                                <Link to='music.manager.album.albuminfo' params={{id: id}} className='waves-effect waves-white btn-flat white-text c_tabs'>Album Info</Link>
                            </div>
                            <Search />
                            <div onClick={this.showModal} className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red'>
                                    <i className='mdi-file-file-upload'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });

module.exports = MusicManagerAlbum;
