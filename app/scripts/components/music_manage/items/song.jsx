'use strict';
var React = require('react'),
    TracksActions = require('../../../actions/track_actions'),
    Modal = require('../../helpers/modal'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Songs = React.createClass({
        handleDeleteTracks: function() {
            TracksActions.deleteTracks(this.props.id);
        },
        getInitialState: function() {
            return {
                earnings_g: false,
                earnings_o: false,
                earnings_r: false,
            };
        },
        showModal: function() {
            function hasClass(element, cls) {
                return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
            }
            var el = document.getElementById('earn');
            if (hasClass(el,'green-text')) {
                this.setState({earnings_g: true});
            } else if (hasClass(el,'orange-text')) {
                this.setState({earnings_o: true});
            } else if (hasClass(el,'red-text')) {
                this.setState({earnings_r: true});
            }
        },
        hideModal: function () {
            this.setState({earnings_g: false});
            this.setState({earnings_o: false});
            this.setState({earnings_r: false});
        },
        render: function() {
            var modal_earnings = '',
            hide_modal = this.hideModal,
            modal_content_6 = (
                <div className='c_monetize_modal'>
                    <div className='c_track_info row'>
                        <div className='col s12'>
                            <h6>Unfortunately, this song was rejected due to copyright issues.</h6><br/>
                        </div>
                        <div className='col s2'>
                            <img src='http://placehold.it/100x100' />
                        </div>
                        <div className='col s10'>
                            <h5>Song Name</h5>
                            <h6>Artist</h6>
                            <span className='red-text'>Status: Rejected</span>
                        </div>
                    </div>
                </div>
            ),
            modal_content_7 = (
                <div className='c_monetize_modal'>
                    <div className='c_track_info row'>
                        <div className='col s12'>
                            <h6>Your request to monetize this track has been submitted. The process usually takes 2-3 days.</h6><br/>
                        </div>
                        <div className='col s2'>
                            <img src='http://placehold.it/100x100' />
                        </div>
                        <div className='col s10'>
                            <h5>Song Name</h5>
                            <h6>Artist</h6>
                            <span className='orange-text'>Status: Pending</span>
                        </div>
                    </div>
                </div>
            ),
            modal_content_8 = (
                <div key='modal_earnings' className='c_monetize_modal'>
                    <div className='c_track_info row'>
                        <div className='col s12'>
                            <h6>Great! Your song was successfully monetized. You can now see earnings for this song.</h6><br/>
                        </div>
                        <div className='col s2'>
                            <img src='http://placehold.it/100x100' />
                        </div>
                        <div className='col s10'>
                            <h5>Song Name</h5>
                            <h6>Artist</h6>
                            <span className='green-text'>Status: Approved</span>
                        </div>
                        <div className='col s12'>
                            <br/><h6>Earnings: $0.99 per day</h6>
                        </div>
                    </div>
                </div>
            ),
            modal_buttons_4 = ([
                { 'text' : 'Got it!', 'onclick' : hide_modal, 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5' }
            ]);
            if (this.state.earnings_g === true) {
                modal_earnings = (
                    <Modal
                        id='modal8'
                        title='Monetize'
                        content={modal_content_8}
                        buttons={modal_buttons_4} />
                );
            } else if (this.state.earnings_o === true) {
                modal_earnings = (
                    <Modal
                        id='modal7'
                        title='Monetize'
                        content={modal_content_7}
                        buttons={modal_buttons_4} />
                );
            } else if (this.state.earnings_r === true) {
                modal_earnings = (
                    <Modal
                        id='modal6'
                        title='Monetize'
                        content={modal_content_6}
                        buttons={modal_buttons_4} />
                );
            }
            return (
                <tr className='songs'>
                    <td>
                        <div>
                            <i className='mdi-av-play-arrow'></i>
                            <i className='mdi-content-add'></i>
                        </div>
                    </td>
                    <td>{this.props.songs}</td>
                    <td>{this.props.artists}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.label}</td>
                    <td>{this.props.genre}</td>
                    <td>{this.props.uploaded}</td>
                    <td>
                        <div className='right-align'>
                            <i onClick={this.showModal} id='earn' className='red-text mdi-editor-attach-money'></i>
                            <i className='mdi-editor-mode-edit'></i>
                            <i onClick={this.handleDeleteTracks} className='mdi-action-delete'></i>
                        </div>
                    </td>
                    <ReactCSSTransitionGroup transitionName='modal_earnings'>
                        {modal_earnings}
                    </ReactCSSTransitionGroup>
                </tr>
            );
        }
    });
module.exports = Songs;
