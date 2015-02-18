'use strict';
var React = require('react'),
    InputField = require('../helpers/textfield'),
    Router = require('react-router'),
    Link = Router.Link,
    MusicManagerArtistAlbumInfo = React.createClass({
        render: function() {

            return (
                <div className='c-album-info'>
                    <div className='row'>
                        <div className='col s12 m12 l9'>
                            <InputField
                                textfield_type='text'
                                textfield_label='Album Title'
                                outerdiv_size='s12'
                                textfield_state='validate'
                                textfield_id='title'
                                textfield_label_for='title'
                                textfield_value='Potato Album' />
                            <InputField
                                textfield_type='text'
                                textfield_label='Location'
                                outerdiv_size='s12'
                                textfield_state='validate'
                                textfield_id='location'
                                textfield_label_for='location'
                                textfield_value='Portland, Oregon' />
                            <InputField
                                textfield_type='textarea'
                                textfield_label='Description'
                                outerdiv_size='s12'
                                textfield_state='validate'
                                textfield_id='description'
                                textfield_label_for='description'
                                textfield_value='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' />
                        </div>
                        <div className='col s12 m12 l3'>
                            <div>
                                <p>Released Albums</p>
                                <ul>
                                    <li><Link to='music.manager.album.songs' params={{id: '1'}}>Album 1</Link></li>
                                    <li><Link to='music.manager.album.songs' params={{id: '2'}}>Album 2</Link></li>
                                    <li><Link to='music.manager.album.songs' params={{id: '3'}}>Album 3</Link></li>
                                    <li><Link to='music.manager.album.songs' params={{id: '4'}}>Album 4</Link></li>
                                    <li><Link to='music.manager.album.songs' params={{id: '5'}}>Album 5</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div><hr className='c-album-info-divider'/>
                    <div className='right-align'>
                        <a className='c-album-info-buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5'>Cancel</a> &nbsp; &nbsp;
                        <a className='c-album-info-buttons waves-effect waves-light btn'>Done</a>
                    </div>
                </div>
            );
        }
    });

module.exports =  MusicManagerArtistAlbumInfo;
