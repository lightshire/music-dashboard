'use strict';
var React = require('react'),
    InputField = require('../helpers/textfield'),
    MusicManagerArtistAlbumInfo = React.createClass({
        render: function() {

            return (
                <div className='c_album_info'>
                    <div className='row'>
                        <div className='col m6 s12'>
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
                        </div>
                        <div className='col m6 s12'>
                            <h5>Upload an album art</h5><br/>
                            <div className='row'>
                                <div className='col s4'>
                                    <img className="responsive-img" src='http://placehold.it/85x85&text=avatar' />
                                </div>
                                <div className='col s8'>
                                    <small>At least 1600 x 1600 pixels in size</small><br/>
                                    <a className='c_modal_buttons waves-effect waves-light btn modal-action' >Choose from File</a>
                                </div>
                            </div>
                        </div>
                    </div><hr className='c_album_info_divider'/>
                    <div className='right-align'>
                        <div className='row'>
                            <div className='hidden-small-button'>
                                <div className='col s6'><a className='c_album_info_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5'>Cancel</a></div>
                                <div className='col s6'><a className='c_album_info_buttons waves-effect waves-light btn'>Done</a></div>
                            </div>
                            <div className='hidden-big-button right-align'>
                                <div className='col l12 m12'>
                                    <a className='c_album_info_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5'>Cancel</a>&nbsp; &nbsp;
                                    <a className='c_album_info_buttons waves-effect waves-light btn'>Done</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            );
        }
    });

module.exports =  MusicManagerArtistAlbumInfo;