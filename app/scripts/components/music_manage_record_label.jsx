'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    TrackActions = require('../actions/track_actions'),
    Search = require('./helpers/search'),
    Modal = require('./helpers/modal'),
    InputField = require('./helpers/textfield'),
    Actions = require('./modals/action_modal'),
    CreateAlbum = require('./modals/create_album_modal'),
    Upload = require('./modals/upload_modal'),
    UploadFilename = require('./modals/upload_filename_modal'),
    UploadProgress = require('./modals/upload_progress_modal'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    MusicManagerRecordLabel = React.createClass({
        handleAddTracks: function() {
            TrackActions.addTracks();
            this.setState({
                done: false
            });
        },
        getInitialState: function() {
            return {
                action_modal: false,
                create_album_modal: false,
                upload_modal: false,
                upload_filename_modal: false,
                upload_progress_modal: false,
                upload_save_modal: false
            };
        },
        createModal: function() {
            this.setState({action_modal: !this.state.action_modal});
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
        mixins: [Router.State],
        render: function() {
            var id = this.getParams().id,
                upload_filename_modal = this.uploadFilenameModal,
                uploading_modal = this.uploadingModal,
                sample_add = this.handleAddTracks,
                cancel = this.cancelHandler,
                uploading = '',
                done = '',
                modal = '',
                modal_content_3,
                modal_content_4,
                modal_content_5,
                modal_buttons_1,
                modal_buttons_2,
                modal_buttons_3,
                modal_buttons_uploading,
                modal_buttons_disabled;

            

            modal_content_4 = (
                <div key='done_modal' className='container center-align c_upload_music_file_modal'>
                    <p>
                        <i className='mdi-navigation-check large'></i>
                        <h5>Upload complete</h5>
                        <h6>
                            Please provide track title and description. Click done to confirm
                        </h6>
                        <InputField
                            textfield_type='text'
                            textfield_label='Title'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='title'
                            textfield_label_for='title' />
                        <InputField
                            textfield_type='textarea'
                            textfield_label='Description'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='description'
                            textfield_label_for='description' />
                    </p>
                </div>
            );
            
            modal_content_5 = (
                <div key='createalbum_modal' className='container center-align c_upload_music_file_modal'>
                    <p>
                        <InputField
                            textfield_type='text'
                            textfield_label='Title'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='title'
                            textfield_label_for='title' />
                        <InputField
                            textfield_type='textarea'
                            textfield_label='Description'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='description'
                            textfield_label_for='description' />
                        <h5>Upload an album art</h5>
                        <img src='http://placehold.it/85x85&text=avatar' />
                        <h6>At least 1600 x 1600 pixels in size</h6>
                        <a className='c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' >Choose from File</a>
                    </p>
                </div>
            );

            modal_buttons_1 = ([
                {
                    text : 'Upload',
                    onclick : upload_progress_modal,
                    class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]);

            modal_buttons_uploading = ([
                {
                    text : 'Upload',
                    onclick : uploading_modal,
                    class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]);

            modal_buttons_2 = ([
                {
                    text : 'Done',
                    onclick : sample_add,
                    class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]);

            modal_buttons_3 = ([
                {
                    text : 'Create Album',
                    onclick : cancel,
                    class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]);
            if (this.state.action_modal) {
                modal = <Actions
                            key='action'
                            showModal={this.showModal}
                            createAlbumModal={this.createAlbumModal} />;
            } else if (this.state.create_album_modal) {
                modal = <CreateAlbum
                            key='createalbum'
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.upload_modal) {
                modal = <Upload
                            key='upload'
                            uploadModal={this.uploadModal}
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.upload_filename_modal) {
                modal = <UploadFilename
                            key='uploadfilename'
                            uploadFilenameModal={this.uploadFilenameModal}
                            cancelHandler={this.cancelHandler} />;
            } else if (this.state.upload_progress_modal) {
                modal = <UploadProgress
                            key='uploadprogress'
                            uploadProgressModal={this.uploadProgressModal}
                            cancelHandler={this.cancelHandler} />;
            }


            if (this.state.done === true) {
                done = (<Modal
                            id='modal4'
                            title='Upload'
                            content={modal_content_4}
                            buttons={modal_buttons_2} />);
            }

            return (
                <div className='c_body'>
                    <div className='c_header'>
                        <div className='container'>
                            <h4 className='white-text'>Music Manager</h4>
                            <div className='c_links'>
                                <Link to='music.manager.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Tracks</Link>
                                <Link to='music.manager.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>
                                <Link to='music.manager.record.label.artists' params={{id: id}} className='waves-effect waves-white btn-flat white-text c_tabs'>Artists</Link>
                            </div>
                            <Search />
                            <div onClick={this.createModal} className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red'>
                                    <i className='mdi-content-add'></i>
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

module.exports = MusicManagerRecordLabel;
