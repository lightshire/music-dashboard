'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    TrackActions = require('../actions/track_actions'),
    Search = require('./helpers/search'),
    Actions = require('./modals/action_modal'),
    ActionsAdmin = require('./modals/action_admin_modal'),
    CreateRecordLabel = require('./modals/create_record_label_modal'),
    CreateAlbum = require('./modals/create_album_modal'),
    Upload = require('./modals/upload_modal'),
    UploadFilename = require('./modals/upload_filename_modal'),
    UploadProgress = require('./modals/upload_progress_modal'),
    UploadSave = require('./modals/upload_save_modal'),
    Constrainable = require('./mixins/constrainable'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    MusicManager = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        handleAddTracks: function() {
            TrackActions.addTracks();
            this.setState({
                upload_save_modal: false
            });
        },
        getInitialState: function() {
            return {
                action_modal: false,
                action_admin_modal: false,
                create_album_modal: false,
                upload_modal: false,
                upload_filename_modal: false,
                upload_progress_modal: false,
                upload_save_modal: false
            };
        },
        actionModal: function() {
            this.setState({action_modal: !this.state.action_modal});
        },
        actionAdminModal: function() {
            this.setState({action_admin_modal: !this.state.action_admin_modal});
        },
        createRecordLabelModal: function() {
            this.setState({action_admin_modal: false});
            this.setState({create_record_label_modal: !this.state.create_record_label_modal});
        },
        createAlbumModal: function() {
            this.setState({action_modal: false});
            this.setState({create_album_modal: !this.state.create_album_modal});
        },
        showModal: function() {
            this.setState({action_modal: false});
            this.setState({upload_modal: !this.state.upload_modal});
        },
        uploadFilenameModal: function() {
            this.setState({upload_modal: false});
            this.setState({upload_filename_modal: !this.state.upload_filename_modal});
        },
        uploadProgressModal: function() {
            this.setState({upload_filename_modal: false});
            this.setState({upload_progress_modal: !this.state.upload_progress_modal});
        },
        uploadSaveModal: function() {
            this.setState({upload_progress_modal: false});
            this.setState({upload_save_modal: !this.state.upload_save_modal});
        },
        cancelHandler: function() {
            this.setState({
                create_album_modal: false,
                upload_modal: false,
                upload_filename_modal: false,
                upload_progress_modal: false,
                upload_save_modal: false
            });
        },
        render: function() {
            var modal = '',
                music_manager_songs = (<Link to='music.manager.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Tracks</Link>),
                music_manager_albums = (<Link to='music.manager.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>);


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
                            createRecordLabelModal={this.createRecordLabelModal} />;
            } else if (this.state.create_record_label_modal) {
                modal = <CreateRecordLabel
                            key='createrecordlabel'
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.create_album_modal) {
                modal = <CreateAlbum
                            key='createalbum'
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

            var modal_trigger = this.showModal;

            
            if (this.hasAccess(['general_user'])) {
                music_manager_albums = '';
            }

            if (this.hasAccess(['artist'])) {
                modal_trigger = this.actionModal;
            }
            
            if (this.hasAccess(['admin'])) {
                modal_trigger = this.actionAdminModal;
            }


            return (
                <div className='c_body'>
                    <div className='c_header'>
                        <div className='container'>
                            <h4 className='white-text'>Music Manager</h4>
                            <div className='c_links'>
                               {music_manager_songs}
                               {music_manager_albums}
                            </div>
                            <Search />
                            <div onClick={modal_trigger} className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red lighten-2'>
                                    <i className='mdi-file-file-upload'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <RouteHandler />
                    </div>
                    <ReactCSSTransitionGroup className='21321' transitionName='modal'>
                        {modal}
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    });
module.exports = MusicManager;
