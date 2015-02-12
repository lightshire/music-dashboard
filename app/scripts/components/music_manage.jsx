'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    TrackActions = require('../actions/track_actions'),
    AlbumActions = require('../actions/album_actions'),
    ArtistActions = require('../actions/artist_actions'),
    LabelActions = require('../actions/label_actions'),
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
        mixins: [Constrainable, Router.Navigation],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        handleAddTracks: function() {
            TrackActions.addTracks();
            ModalActions.dismiss();
            this.transitionTo('music.manager.songs');
        },
        handleAddAlbum: function() {
            AlbumActions.addTracks();
            ModalActions.dismiss();
            this.transitionTo('music.manager.albums');
        },
        handleAddArtist: function() {
            ArtistActions.addTracks();
            ModalActions.dismiss();
            this.transitionTo('music.manager.artists');
        },
        handleAddLabel: function() {
            LabelActions.addTracks();
            ModalActions.dismiss();
            this.transitionTo('music.manager.labels');
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
                            handleAddAlbum={this.handleAddAlbum}
                            cancelHandler={this.cancelHandler} />, 'createalbum_modal' );
        },
        createArtistModal: function() {
            ModalActions.show(<CreateArtist
                            key='createartist'
                            handleAddArtist={this.handleAddArtist}
                            cancelHandler={this.cancelHandler} />, 'createartist_modal' );
        },
        createRecordLabelModal: function() {
            ModalActions.show(<CreateRecordLabel
                            key='createrecordlabel'
                            handleAddLabel={this.handleAddLabel}
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
            var modal_trigger = this.showModal,
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
                ),
                floating_btn_up = (
                    <i className='mdi-file-file-upload'></i>
                ),
                floating_btn_add = (
                    <i className='mdi-content-add'></i>
                );


            if (this.hasAccess(['artist'])) {
                modal_trigger = this.actionModal;
                music_manager_artists = '';
                music_manager_labels = '';
                floating_btn_up = '';
            }

            if (this.hasAccess(['general_user'])) {
                music_manager_albums = '';
                music_manager_artists = '';
                music_manager_labels = '';
                floating_btn_add = '';
            }

            if (this.hasAccess(['record_label'])) {
                modal_trigger = this.actionModal;
                music_manager_labels = '';
                floating_btn_up = '';
            }

            if (this.hasAccess(['admin'])) {
                modal_trigger = this.actionModal;
                floating_btn_up = '';
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
                            <div onClick={modal_trigger} className='manage-upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red lighten-2'>
                                    {floating_btn_up}
                                    {floating_btn_add}
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
