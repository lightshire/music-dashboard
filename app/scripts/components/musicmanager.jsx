var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var TracksActions = require('../actions/TracksActions');
var Search = require('./search');
var Modal           = require('./modal');
var InputField      = require('./textfield');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MusicManager = React.createClass({
    /*handleAddTracks: function() {
        TracksActions.addTracks();
    },*/
    getInitialState: function() {
        return {
            selectmusic: false,
            upload: false
        }
    },
    showModal: function() {
        this.setState({selectmusic: !this.state.selectmusic});
    },
    uploadModal: function() {
        this.setState({selectmusic: !this.state.selectmusic});
        this.setState({upload: !this.state.upload});
    },
    cancelHandler: function() {
        this.setState({
            selectmusic: false,
        });
    },
    render: function() {
        var modal1 = '';
        var modal2 = '';
        var state = this.state;
        var upload_modal = this.uploadModal;
        var cancel = this.cancelHandler;


        var preloader_style = {
            width: '70%'
        };
        var modal_content_1 = (
            <div key="modal1" className="container center-align c_upload_music_file_modal">
                <p>
                    <i className="mdi-file-file-upload large"></i>
                    <h5>Drag a music file here</h5>
                    <h6>- or -</h6>
                    <a className="waves-effect waves-light btn red lighten-2 c_select_a_track_button">Select a track from your computer</a>
                </p>
            </div>
        );
        var modal_content_2 = (
            <div className="container center-align c_upload_music_file_modal">
                <p>
                    <i className="mdi-av-my-library-music large"></i>
                    <h5>filename.mp3</h5>
                    <h6>Ready for upload</h6>
                </p>
            </div>
        );
        var modal_content_3 = (
            <div className="container center-align c_upload_music_file_modal">
                <p>
                    <div className="progress">
                        <div className="determinate" style={preloader_style}></div>
                    </div>
                    <h5>Uploading music file</h5>
                    <h6>70%</h6>
                </p>
            </div>
        );
        var modal_content_4 = (
            <div className="container center-align c_upload_music_file_modal">
                <p>
                    <i className="mdi-navigation-check large"></i>
                    <h5>Upload complete</h5>
                    <h6>Please provide track title and description. Click done to conrfirm</h6><br/>
                    <InputField
                        textfield_type="text"
                        textfield_label="Title"
                        outerdiv_size="s12"
                        textfield_state="validate"
                        textfield_id="title"
                        textfield_label_for="title" />
                    <InputField
                        textfield_type="textarea"
                        textfield_label="Description"
                        outerdiv_size="s12"
                        textfield_state="validate"
                        textfield_id="description"
                        textfield_label_for="description" />
                </p>
            </div>
        );
        var modal_buttons_1 = ([
            { 'text' : 'Upload', 'onclick' : upload_modal, 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
            { 'text' : 'Cancel', 'onclick' : cancel, 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
        ]);
        var modal_buttons_2 = ([
            { 'text' : 'Done', 'onclick' : 'something', 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
            { 'text' : 'Cancel', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
        ]);
        if (this.state.selectmusic === true) {
            modal1 =  <Modal
                        id="modal1"
                        title="Upload"
                        content={modal_content_1}
                        buttons={modal_buttons_1} />
        }
        if (this.state.upload === true) {
            modal2 =  <Modal
                        id="modal2"
                        title="Upload"
                        content={modal_content_2}
                        buttons={modal_buttons_1} />
        }
        return (
            <div className='c_body'>
                <div className="c_header">
                    <div className="container">
                        <h4 className="white-text">Music Manager</h4>
                        <div className="c_links">
                            <Link to="music.manager.songs" className="waves-effect waves-white btn-flat white-text c_tabs">Songs</Link>
                            <Link to="music.manager.albums" className="waves-effect waves-white btn-flat white-text c_tabs">Albums</Link>
                        </div>
                        <Search />
                        <div onClick={this.showModal} className="upload-btn right-align">
                            <a className="btn-floating btn-large waves-effect waves-light red">
                                <i className="mdi-file-file-upload"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container c_main_container">
                    <RouteHandler />
                </div>
                <ReactCSSTransitionGroup transitionName="modal1">
                    {modal1}
                </ReactCSSTransitionGroup>   
                <ReactCSSTransitionGroup transitionName="modal2">
                    {modal2}
                </ReactCSSTransitionGroup>   
            </div>
        );
    }
});

module.exports = MusicManager;
