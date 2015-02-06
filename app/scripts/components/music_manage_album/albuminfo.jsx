'use strict';
var React = require('react'),
    AlbumStore = require('../../stores/album_stores'),
    InputField = require('../helpers/textfield'),
    getStateFromStore = function() {
        return {
            albums: AlbumStore.getAll()
        };
    },
    MusicManagerArtistAlbumInfo = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = AlbumStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {

            return (
                <div>
                    <div className="table">
                        <InputField
                            textfield_type='text'
                            textfield_label='Album Title'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='title'
                            textfield_label_for='title'
                            textfield_value='Potato Album' />
                        <InputField
                            textfield_type='textarea'
                            textfield_label='Description'
                            outerdiv_size='s12'
                            textfield_state='validate'
                            textfield_id='description'
                            textfield_label_for='description'
                            textfield_value='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' />
                        <h5>Upload an album art</h5>
                        <img src='http://placehold.it/85x85&text=avatar' />
                        <h6>At least 1600 x 1600 pixels in size</h6>
                        <a className='c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' >Choose from File</a>
                    </div>
                    <div className='right-align'>
                        <a className='c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' >Cancel</a>
                        <a className='c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' >Done</a>
                    </div>
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports =  MusicManagerArtistAlbumInfo;
