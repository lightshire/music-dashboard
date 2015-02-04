'use strict';
var React = require('react'),
    Albums = require('./items/album'),
    _ = require('lodash'),
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
                <div className="table">
                    <InputField
                        textfield_type='text'
                        textfield_label='Album Title'
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
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports =  MusicManagerArtistAlbumInfo;
