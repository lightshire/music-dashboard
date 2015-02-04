'use strict';
var React = require('react'),
    TracksActions = require('../../../actions/track_actions'),
    Modal = require('../../helpers/modal'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Albums = React.createClass({
        handleDeleteTracks: function() {
            TracksActions.deleteTracks(this.props.id);
        },
        getInitialState: function() {
            return {
                earnings_green: false,
                earnings_orange: false,
                earnings_red: false,
                earnings_grey: false
            };
        },
        showModal: function(event) {
            function hasClass(element, cls) {
                return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
            }

            var el = event.target;

            if (hasClass(el,'green-text')) {
                this.setState({earnings_green: true});
            } else if (hasClass(el,'orange-text')) {
                this.setState({earnings_orange: true});
            } else if (hasClass(el,'red-text')) {
                this.setState({earnings_red: true});
            } else if (hasClass(el,'grey-text')) {
                this.setState({earnings_grey: true});
            }
        },
        hideModal: function () {
            if(this.state.earnings_grey === true){
                this.setState({earnings_grey: false});
                this.setState({earnings_orange: true});
            }
            else{
                this.setState({earnings_green: false});
                this.setState({earnings_orange: false});
                this.setState({earnings_red: false});
            }           
        },
        cancelModal: function(){
            this.setState({earnings_green: false});
            this.setState({earnings_orange: false});
            this.setState({earnings_red: false});
            this.setState({earnings_grey: false});
        },
        render: function() {
            var modal_earnings = '',
                hide_modal = this.hideModal,
                cancel_modal = this.cancelModal;

            var modal_content_6 = (
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
            );
            var modal_content_7 = (
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
            );
            var modal_content_8 = (
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
            );
            var modal_monetize = (
                <div>
                    <div key='modal_earnings' className='modal_monetize_content'>
                        <div className='c_track_info row'>
                            <div className='col s2'>
                                <img src='http://placehold.it/100x100' />
                            </div>
                            <div className='col s10'>
                                <h5>Album Name</h5>
                                <h6>Artist</h6>
                            </div>
                        </div>
                    </div>
                    <div className="modal_monetize_context">
                        <p>Fierent reprehendunt pro et, idque meliore ea est. Amet quas omnium usu te, mea hinc consequat te. Id nisl nulla phaedrum qui, lucilius splendide sea in, eu sale illum nam. Te mei primis sensibus assentior, sit in utroque adipiscing dissentiunt, et delenit placerat urbanitas quo. Vel possim malorum adolescens ad, debitis appareat perpetua eu ius, dolore voluptua vix no. Te tation sapientem sea, ei ipsum gloriatur ius.Mea suas iusto et, fabulas civibus dignissim mel te. Ius iriure expetendis intellegam cu. Cu eam nihil tractatos instructior. Sit ut minim docendi, vix vivendo scaevola ei. Vix dicunt pertinax adipiscing eu, an nostro expetenda vis. Pri ex aliquid deserunt, no his nonumes laboramus.Eu vel utamur singulis adipiscing, qui ad sumo suas vocent. Sed at prompta sanctus, eu eos prompta efficiantur. Et dolores salutatus mea. Intellegebat signiferumque et vel, ut cum scripta recusabo expetendis. Falli honestatis his at, mea singulis legendos delicata eu.Mea ex saperet oportere praesent. Nulla vidisse ullamcorper eam ad, duo principes instructior consectetuer no. Quaestio maiestatis et mei, at mei dico vitae veniam, putant consetetur cu per. Solum definitionem ius cu, eos te veritus petentium. Nostrud consulatu est ei, vide insolens cu usu.</p>
                    </div>
                    <div className="modal_monetize_checkbox">
                        <p><input class="with-gap" name="agree" type="checkbox" id="agree" />
                            <label htmlFor="agree">I have read and agreed to the terms and condition.</label>
                        </p>
                    </div>
                </div>
                
            );
            var modal_buttons_4 = ([
                { 'text' : 'Got it!', 'onclick' : hide_modal, 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5' }
            ]);
            var modal_buttons_submit_cancel = ([
                { 'text' : 'Submit', 'onclick' : hide_modal, 'class_name' : 'c_modal_buttons white-text waves-effect waves-grey lighten-4 btn black lighten-5' } , { 'text' : 'Cancel', 'onclick' : cancel_modal, 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5' }
            ]);
            if (this.state.earnings_green === true) {
                modal_earnings =  (<Modal
                            id='modal8'
                            title='Monetize'
                            content={modal_content_8}
                            buttons={modal_buttons_4} />);
            } else if (this.state.earnings_orange === true) {
                modal_earnings =  (<Modal
                            id='modal7'
                            title='Monetize'
                            content={modal_content_7}
                            buttons={modal_buttons_4} />);
            } else if (this.state.earnings_red === true) {
                modal_earnings =  (<Modal
                            id='modal6'
                            title='Monetize'
                            content={modal_content_6}
                            buttons={modal_buttons_4} />);
            } else if (this.state.earnings_grey === true) {
                modal_earnings =  (<Modal
                            id='modal6'
                            title='Monetize'
                            content={modal_monetize}
                            buttons={modal_buttons_submit_cancel}
                            agreement = 'true' />);
            }
            return (
                <tr className='songs'>
                    <td>
                        <div>
                            <i className='mdi-av-play-arrow'></i>
                            <i className='mdi-content-add'></i>
                        </div>
                    </td>
                    <td>{this.props.albums}</td>
                    <td>{this.props.artists}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.label}</td>
                    <td>{this.props.genre}</td>
                    <td>{this.props.uploaded}</td>
                    <td>
                        <div className='right-align'>
                            <i onClick={this.showModal} id='earn' className={this.props.albumstatus}></i>
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

module.exports = Albums;
