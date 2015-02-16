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
    MusicManagerArtist = React.createClass({
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
            var id = this.getParams().id,
                artist_info_list = (
                    <div className="col s12">
                        <ul className='tabs default-tab'>
                           <li className='tab col s6'><Link to='music.manager.artist.songs' params={{id: id}} className='waves-effect waves-white btn-flat white-text c_tabs'>Tracks</Link></li>
                           <li className='tab col s6'><Link to='music.manager.artist.info' params={{id: id}} className='waves-effect waves-white btn-flat white-text c_tabs'>Artist Info</Link></li>
                        </ul>
                    </div>
                );
            return (
                <div className='c_body'>
                    <div className='c_header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>
                                <Link to='music.manager.artist'><i className='white-text mdi-hardware-keyboard-backspace black-text'></i></Link> Artist 1
                            </h4>
                            <div className='c_links'>
                                <div className='row'>
                                    {artist_info_list}
                                </div>
                            </div>
                            <Search />
                        </div>
                    </div>
                    <div className='container c_main_container z-depth-1'>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });

module.exports = MusicManagerArtist;
