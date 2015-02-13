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
        componentDidMount: function(){
            $('.modal-trigger').leanModal();
            $('#lean-overlay').click(function(){
                console.log('a');
                });
            $('#modal1').closeModal();
        },
        getInitialState: function() {
            return {
                    createMod: false,
                    createRLabel: false,
                    upload: false,
                    uploadReady: false,
                    uploadProgress: false,
                    createArtist: false,
                    uploadedSave: false,
                    done: false
                   };
        },
        selectAlbumOrMusic : function() {
            this.setState({createMod : true});
        },
        createRecordLabel : function() {
            this.setState({createMod : false});
            this.setState({createRLabel : true});
        },
        selectUpload : function () {
            this.setState({createMod : false});
            this.setState({upload : true});
        },
        uploadingReady : function () {
            this.setState({upload : false});
            this.setState({uploadReady : true});
        },
        uploadSave :function () {

            this.setState({uploadProgress : false});
            this.setState({uploadedSave : true});

        },
        uploadingProgress :function () {
            this.setState({uploadReady : false});
            this.setState({uploadProgress : true});
        },
        cancelHandler: function() {
            this.setState({
                createRLabel: false,
                createMod: false,
                upload : false,
                uploadReady : false,
                uploadProgress :false,
                uploadedSave : false
            });
            $('#modal1').closeModal();
            $('#lean-overlay').remove();
        },
        render: function() {
            var showModal ='',
                create_label = '',
                select_upload_file = '',
                uploading_file = '',
                uploading_progress = '',
                uploaded_save = '',
                preloader_style = {width: '0%'},
                modal_create = (
                        <div key='create_modal'>
                            <div className='row col s12'>
                                <div className='col s3 m3 toCenter'><a className='createHover' onClick={this.selectUpload}><span className='modalCreate'><i className='large mdi-file-file-upload'></i></span><span>Upload</span></a></div>
                                <div className='col s3 m3 toCenter'><a className='createHover'><span className='modalCreate'><i className='large mdi-file-folder-open'></i></span><span>Album</span></a></div>
                                <div className='col s3 m3 toCenter'><a className='createHover'><span className='modalCreate'><i className='large mdi-action-perm-identity'></i></span><span>Artist</span></a></div>
                                <div className='col s3 m3 toCenter'><a className='createHover'><span className='modalCreate' onClick={this.createRecordLabel}><i className='large mdi-image-adjust'></i></span><span>Record Label</span></a></div>
                            </div>
                        </div>
                    ),
                chooseButton = (
                    <div>
                        <a className='c_modal_buttons waves-effect waves-light btn black white-text lighten-2'>Choose File</a>
                    </div>
                ),
                modal_create_record_label = (
                        <div key='create_artist' className='container center-align'>
                            <div className='row'>
                                <form className='col s12'>
                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input id='form_name' type='text' className='validate' />
                                            <label htmlFor='form_name'>Name</label>
                                        </div> 
                                    </div>
                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input id='bio' type='text' className='validate' />
                                            <label htmlFor='bio'>Bio</label>
                                        </div> 
                                    </div>
                                </form>
                            </div>
                            <div className='row'>                        
                                <div className='col s12'>
                                    <p className='toLeft'>Upload an artist photo</p>
                                    <div className='row'>
                                        <div className='col s3 toLeft'>
                                            <img src='http://placehold.it/100x100' />
                                        </div>
                                        <div className='col s9 toLeft'>
                                            <p>at least 1600x1600 pixels in size</p>
                                            {chooseButton}
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ),
                modal_select_upload = (
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
                modal_uploading_ready = (
                    <div key='upload_modal_ready' className='container center-align c_upload_music_file_modal'>
                        <p>
                            <i className='mdi-av-my-library-music large'></i>
                            <h5>filename.mp3</h5>
                            <h6>Ready for upload</h6>
                        </p>
                    </div>
                ),
                modal_uploading_progress = (
                    <div key='uploading_progress'className='container center-align c_upload_music_file_modal'>
                        <p>
                            <div className='progress'>
                                <div id = 'percentProgress' className='determinate'
                                    style={preloader_style}>
                                </div>
                            </div>
                            <h5>Uploading music file</h5>
                            <h6 id = 'percentText'>0%</h6>
                        </p>
                    </div>
                ),
                modal_uploaded_save = (
                    <div key='uploaded_save' className='container center-align'>
                       <div className='row'>
                           <p className='toCenter grey-text no-margin'><i className='medium mdi-navigation-check'></i></p>
                           <p className='toCenter grey-text no-margin'>Upload Complete</p>
                           <p className='toCenter grey-text no-margin'>Please Provide track title and description. Click done to confirm.</p>
                       </div>
                       <div className='row'>
                            <form className='col s12'>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input id='titles' type='text' className='validate' />
                                        <label htmlFor='titles'>Title</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input id='description' type='text' className='validate' />
                                        <label htmlFor='description'>Description</label>
                                    </div>
                                </div>                                
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <select>
                                            <option defaultValue>Choose your option</option>
                                            <option >Choose your option</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                       </div>
                    </div>
                ),
                no_button = ([
                        {
                            text : '',
                        },
                    ]),
                done_cancel_button = ([
                    {
                        text : 'Done',
                        onclick : this.cancelHandler,
                        class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action modal-trigger modal-close'
                    },
                    {
                        text : 'Cancel',
                        onclick : this.cancelHandler,
                        class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                    }
                ]),
                done_cancel_button_upload = ([
                    {
                        text : 'Next',
                        onclick : this.uploadingReady,
                        class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action modal-trigger modal-close'
                    },
                    {
                        text : 'Cancel',
                        onclick : this.cancelHandler,
                        class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                    }
                ]),
                done_cancel_button_uploading = ([
                    {
                        text : 'Upload',
                        onclick : this.uploadingProgress,
                        class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action modal-trigger modal-close'
                    },
                    {
                        text : 'Cancel',
                        onclick : this.cancelHandler,
                        class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                    }
                ]),
                done_cancel_button_progress = ([
                    {
                        text : 'Cancel',
                        onclick : this.uploadSave,
                        class_name : 'close_now c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                    }
                ]);

            if (this.state.createMod === true) {
                showModal = (<Modal 
                                id= 'modal1'
                                title = 'New'
                                content = {modal_create}
                                buttons = {no_button}

                            />);
            }
            if (this.state.createRLabel === true) {
                create_label = (<Modal 
                                id= 'modal1'
                                title = 'New'
                                content = {modal_create_record_label}
                                buttons = {done_cancel_button}

                            />);
            }
            if (this.state.upload === true) {
                select_upload_file = (<Modal 
                                id= 'modal1'
                                title = 'Select File'
                                content = {modal_select_upload}
                                buttons = {done_cancel_button_upload}

                            />);
            }
            if (this.state.uploadReady === true) {
                uploading_file = (<Modal 
                                id= 'modal1'
                                title = 'Upload Ready'
                                content = {modal_uploading_ready}
                                buttons = {done_cancel_button_uploading}

                            />);
            }
            if (this.state.uploadProgress === true) {
                uploading_progress = (<Modal 
                                id= 'modal1'
                                title = 'Uploading...'
                                content = {modal_uploading_progress}
                                buttons = {done_cancel_button_progress}
                            />);
            }
            if (this.state.uploadedSave === true) {
                uploaded_save = (<Modal 
                                id= 'modal1'
                                title = 'Save Upload'
                                content = {modal_uploaded_save}
                                buttons = {done_cancel_button}
                            />);
            }

            return (
                <div className='c_body'>
                    <div className='c_header'>
                        <div className='container'>
                            <h4 className='white-text'>Admin</h4>
                            <div className='c_links'>
                                <Link to='home' className='waves-effect waves-white btn-flat white-text c_tabs'>Songs</Link>
                                <Link to='home' className='waves-effect waves-white btn-flat white-text c_tabs'>Albums</Link>
                                <Link to='home' className='waves-effect waves-white btn-flat white-text c_tabs'>Artists</Link>
                                <Link to='home' className='waves-effect waves-white btn-flat white-text c_tabs'>Labels</Link>
                                <Link to='home' className='waves-effect waves-white btn-flat white-text c_tabs'>Label Earnings</Link>
                                <Link to='home' className='waves-effect waves-white btn-flat white-text c_tabs'>Artist Earnings</Link>
                            </div>
                            <Search />
                            <div className='upload-btn right-align modal-trigger' onClick={this.selectAlbumOrMusic}>
                                <a className='btn-floating btn-large waves-effect waves-light'>
                                    <i className='mdi-content-add'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <RouteHandler />
                    </div>
                    <ReactCSSTransitionGroup transitionName='showModal'>
                        {showModal}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='create_label'>
                        {create_label}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='select_upload_file'>
                        {select_upload_file}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='uploading_file'>
                        {uploading_file}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='uploading_progress'>
                        {uploading_progress}
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup transitionName='uploading_progress'>
                        {uploaded_save}
                    </ReactCSSTransitionGroup>
                    
                </div>
            );
        }
    });
module.exports = MusicManager;
