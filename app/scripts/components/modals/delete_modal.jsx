'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    Delete = React.createClass({
        render: function() {
            var content = '',
                button = '',
                delete_modal = this.props.handleDeleteTracks,
                cancel = this.props.cancelHandler;

            content = (
                <div className='container center-align'>
                    <p>
                        Are you sure you want to delete this item?
                    </p>
                </div>
            );

            button = ([
                {
                    text : 'Confirm',
                    onclick : delete_modal,
                    class_name : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action'
                },
                {
                    text : 'Cancel',
                    onclick : cancel,
                    class_name : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close'
                }
            ]);

            return (
                <Modal
                    id='modal6'
                    title='Delete'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  Delete;
