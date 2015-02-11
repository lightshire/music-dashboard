'use strict';
var React = require('react'),
    Constrainable = require('../mixins/constrainable'),
    Modal = require('../helpers/modal'),
    Actions = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
        render: function() {
            var content = '',
                class_name = '',
                class_space = '',
                class_s2 = 'col s2 m2 toCenter',
                class_s3 = 'col s3 m3 toCenter',
                artist = (
                    <div className={class_s2}>
                        <a className='createHover' onClick={this.props.createArtistModal}>
                            <span className='modalCreate'>
                                <i className='large mdi-action-perm-identity'></i>
                            </span>
                            <span>
                                Artist
                            </span>
                        </a>
                    </div>
                ),
                record_label = (
                    <div className={class_s2}>
                        <a className='createHover' onClick={this.props.createRecordLabelModal}>
                            <span className='modalCreate'>
                                <i className='large mdi-image-adjust'></i>
                            </span>
                            <span>
                                Record Label
                            </span>
                        </a>
                    </div>
                );

            if (this.hasAccess(['artist'])) {
                class_space = class_s3;
                class_name = class_s3;
                artist= '';
                record_label = '';
            }

            if (this.hasAccess(['record_label'])) {
                class_name = class_s2;
                class_space = class_s3;
                record_label = '';
            }

            if (this.hasAccess(['admin'])) {
                class_space = class_s2;
                class_name = class_s2;
            }

            content = (
                <div>
                    <div className='row col s12'>
                        <div className={class_space}>&nbsp;</div>
                        <div className={class_name}>
                            <a className='createHover' onClick={this.props.showModal}>
                                <span className='modalCreate'>
                                    <i className='large mdi-file-file-upload'></i>
                                </span>
                                <span>
                                    Upload
                                </span>
                            </a>
                        </div>
                        <div className={class_name}>
                            <a className='createHover' onClick={this.props.createAlbumModal}>
                                <span className='modalCreate'>
                                    <i className='large mdi-file-folder-open'></i>
                                </span>
                                <span>
                                    Album
                                </span>
                            </a>
                        </div>
                        {artist}
                        {record_label}
                        <div className={class_space}>&nbsp;</div>
                    </div>
                </div>
            );

            return (
                <Modal
                    id='modal12'
                    title='New'
                    content={content} />
            );
        }
    });

module.exports =  Actions;
