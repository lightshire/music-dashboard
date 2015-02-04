'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    TrackActions = require('../actions/track_actions'),
    Search = require('./helpers/search'),
    Modal = require('./helpers/modal'),
    InputField = require('./helpers/textfield'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    MusicManager = React.createClass({
        handleAddTracks: function() {
            TrackActions.addTracks();
            this.setState({
                done: false
            });
        },
        getInitialState: function() {
            return {
                selectmusic: false,
                upload: false,
                uploading: false,
                done: false
            };
        },
        showModal: function() {
            this.setState({selectmusic: !this.state.selectmusic});
        },
        uploadModal: function() {
            this.setState({selectmusic: false});
            this.setState({upload: !this.state.upload});
        },
        uploadingModal: function() {
            this.setState({upload: false});
            this.setState({uploading: !this.state.uploading});
        },
        doneModal: function() {
            this.setState({uploading: false});
            this.setState({done: !this.state.done});
        },
        cancelHandler: function() {
            this.setState({
                selectmusic: false,
                upload: false,
                uploading: false,
                done: false
            });
        },
        render: function() {
            var upload_modal = this.uploadModal,
                uploading_modal = this.uploadingModal,
                sample_add = this.handleAddTracks,
                cancel = this.cancelHandler,
                select = '',
                upload = '',
                uploading = '',
                done = '',
                modal_content_1,
                modal_content_2,
                modal_content_3,
                modal_content_4,
                modal_buttons_1,
                modal_buttons_2,
                modal_buttons_uploading,
                modal_buttons_disabled,
                preloader_style = {};
            preloader_style = {
                width: '70%'
            };
            modal_content_1 = (
                <div key='select_modal'
                    className='container center-align c_upload_music_file_modal'>
                    <p>
                        <i className='mdi-file-file-upload large'></i>
                        <h5>Drag a music file here</h5>
                        <h6>- or -</h6>
                        <a className='waves-effect waves-light btn red lighten-2 c_select_a_track_button'>
                            Select a track from your computer
                        </a>
                    </p>
                </div>
            ),
            modal_content_2 = (
                <div key='upload_modal' className='container center-align c_upload_music_file_modal'>
                    <p>
                        <i className='mdi-av-my-library-music large'></i>
                        <h5>filename.mp3</h5>
                        <h6>Ready for upload</h6>
                    </p>
                </div>
            ),
            modal_content_3 = (
                <div key='uploading_modal' onClick={this.doneModal}
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
            ),
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
            ),
            modal_buttons_1 = ([
                {
                    text : 'Upload',
                    onclick : upload_modal,
                    class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]),
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
            ]),
            modal_buttons_disabled = ([
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
            ]),
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
            if (this.state.selectmusic === true) {
                select = (
                    <Modal
                        id='modal1'
                        title='Upload'
                        content={modal_content_1}
                        buttons={modal_buttons_1} />
                );
            }
            if (this.state.upload === true) {
                upload = (
                    <Modal
                        id='modal2'
                        title='Upload'
                        content={modal_content_2}
                        buttons={modal_buttons_uploading} />
                );
            }
            if (this.state.uploading === true) {
                uploading = (
                    <Modal
                        id='modal3'
                        title='Upload'
                        content={modal_content_3}
                        buttons={modal_buttons_disabled} />
                );
            }
            if (this.state.done === true) {
                done = (
                    <Modal
                        id='modal4'
                        title='Upload'
                        content={modal_content_4}
                        buttons={modal_buttons_2} />
                );
            }
            return (
                <div className='c_body'>
                    <div className='c_header'>
                        <div className='container'>
                            <h4 className='white-text'>Music Manager</h4>
                            <div className='c_links'>
                                <Link to='music.manager.songs' className='waves-effect waves-white btn-flat white-text c_tabs'>Songs</Link>
                                <Link to='music.manager.albums' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>
                            </div>
                            <Search />
                            <div onClick={this.showModal} className='upload-btn right-align'>
                                <a className='btn-floating btn-large waves-effect waves-light red lighten-2'>
                                    <i className='mdi-file-file-upload'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <RouteHandler />
                    </div>
                    <ReactCSSTransitionGroup transitionName='select_modal'>
                        {select}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='upload_modal'>
                        {upload}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='uploading_modal'>
                        {uploading}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='done_modal'>
                        {done}
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    });
    module.exports = MusicManager;
