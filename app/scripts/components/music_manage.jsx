'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    TrackActions = require('../actions/track_actions'),
    Search = require('./helpers/search'),
    Actions = require('./modals/action_modal'),
    CreateArtist = require('./modals/create_artist_modal'),
    CreateRecordLabel = require('./modals/create_record_label_modal'),
    CreateAlbum = require('./modals/create_album_modal'),
    Upload = require('./modals/upload_modal'),
    UploadFilename = require('./modals/upload_filename_modal'),
    UploadProgress = require('./modals/upload_progress_modal'),
    UploadSave = require('./modals/upload_save_modal'),
    Constrainable = require('./mixins/constrainable'),
    ModalActions = require('../actions/modal_actions'),
    MusicManager = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        handleAddTracks: function() {
            TrackActions.addTracks();
            ModalActions.dismiss();
        },
        actionModal: function() {
            ModalActions.show(<Actions
                            key='action'
                            showModal={this.showModal}
                            createAlbumModal={this.createAlbumModal}
                            createArtistModal={this.createArtistModal}
                            createRecordLabelModal={this.createRecordLabelModal} />, 'action_modal' );
        },
        createAlbumModal: function() {
            ModalActions.show(<CreateAlbum
                            key='createalbum'
                            cancelHandler={this.cancelHandler} />, 'createalbum_modal' );
        },
        createArtistModal: function() {
            ModalActions.show(<CreateArtist
                            key='createartist'
                            cancelHandler={this.cancelHandler} />, 'createartist_modal' );
        },
        createRecordLabelModal: function() {
            ModalActions.show(<CreateRecordLabel
                            key='createrecordlabel'
                            cancelHandler={this.cancelHandler} />, 'createrecordlabel_modal' );
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
                            handleAddTracks={this.handleAddTracks}
                            cancelHandler={this.cancelHandler} />, 'uploadsave_modal' );
        },
        cancelHandler: function() {
            ModalActions.dismiss();
        },
        render: function() {
            var modal = '',
                modal_trigger = this.showModal,
                admin_sign = '',
                music_manager_songs = (
                    <Link 
                        to='music.manager.songs' 
                        className='waves-effect waves-white btn-flat white-text c_tabs'>
                        Tracks
                    </Link>
                ),
                music_manager_albums = (
                    <Link 
                        to='music.manager.albums' 
                        className='waves-effect waves-white btn-flat white-text c_tabs'>
                        Albums
                    </Link>
                ),
                music_manager_artists = (
                    <Link 
                        to='music.manager.artists'
                        className='waves-effect waves-white btn-flat white-text c_tabs'>
                        Artists
                    </Link>
                ),
                music_manager_labels = (
                    <Link 
                        to='music.manager.labels'
                        className='waves-effect waves-white btn-flat white-text c_tabs'>
                        Record Labels
                    </Link>
                );

            if (this.state.action_modal) {
                modal = <Actions
                            key='action'
                            showModal={this.showModal}
                            createAlbumModal={this.createAlbumModal} />;
            } else if (this.state.action_admin_modal) {
                modal = <ActionsAdmin
                            key='actionadmin'
                            showModal={this.showModal}
                            createAlbumModal={this.createAlbumModal}
                            createArtistModal={this.createArtistModal}
                            createRecordLabelModal={this.createRecordLabelModal} />;
            } else if (this.state.action_rl_modal) {
                modal = <ActionsRL
                            key='actionrl'
                            showModal={this.showModal}
                            createAlbumModal={this.createAlbumModal}
                            createArtistModal={this.createArtistModal} />;
            } else if (this.state.create_record_label_modal) {
                modal = <CreateRecordLabel
                            key='createrecordlabel'
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.create_album_modal) {
                modal = <CreateAlbum
                            key='createalbum'
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.create_artist_modal) {
                modal = <CreateArtist
                            key='createartist'
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.upload_modal) {
                modal = <Upload
                            key='upload'
                            uploadFilenameModal={this.uploadFilenameModal}
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.upload_filename_modal) {
                modal = <UploadFilename
                            key='uploadfilename'
                            uploadProgressModal={this.uploadProgressModal}
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.upload_progress_modal) {
                modal = <UploadProgress
                            key='uploadprogress'
                            uploadSaveModal={this.uploadSaveModal}/>;
            } else if (this.state.upload_save_modal) {
                modal = <UploadSave
                            key='uploadsave'
                            handleAddTracks={this.handleAddTracks}
                            cancelHandler={this.cancelHandler} />;
            }


            
            if (this.hasAccess(['admin'])) {
                modal_trigger = this.actionAdminModal;
                admin_sign = 'mdi-content-add';
            }

            if (this.hasAccess(['artist'])) {
                modal_trigger = this.actionModal;
                music_manager_artists = '';
                admin_sign = 'mdi-file-file-upload';
            }

            if (this.hasAccess(['general_user'])) {
                music_manager_albums = '';
                music_manager_artists = '';
                admin_sign = 'mdi-file-file-upload';
                music_manager_labels = '';
            }

            if (this.hasAccess(['record_label'])) {
                modal_trigger = this.actionModal;
                music_manager_labels = '';
                admin_sign = 'mdi-file-file-upload';
            }

            if (this.hasAccess(['admin'])) {
                modal_trigger = this.actionModal;
            }

            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>Music Manager</h4>
                            <div className='c_links'>
                               {music_manager_songs}
                               {music_manager_albums}
                               {music_manager_artists}
                               {music_manager_labels}
                            </div>
                            <Search />
                            <div onClick={modal_trigger} className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red lighten-2'>
                                    <i className={admin_sign}></i>
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
module.exports = MusicManager;
