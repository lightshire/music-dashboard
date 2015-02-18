'use strict';
var React = require('react'),
    Modal = require('../helpers/modal'),
    Monetize = React.createClass({
        render: function() {
            var content = '',
                button = '',
                monetize_modal = this.props.monetizeModal,
                cancel_modal = this.props.cancelHandler;

            content = (
                <div>
                    <div key='modal_earnings' className='modal-monetize-content'>
                        <div className='c-track-info row'>
                            <div className='col s2'>
                                <img src='http://placehold.it/100x100' />
                            </div>
                            <div className='col s10'>
                                <h5>Song Name</h5>
                                <h6>Artist</h6>
                            </div>
                        </div>
                    </div>
                    <div className="modal-monetize-context">
                        <p>Fierent reprehendunt pro et, idque meliore ea est. Amet quas omnium usu te, mea hinc consequat te. Id nisl nulla phaedrum qui, lucilius splendide sea in, eu sale illum nam. Te mei primis sensibus assentior, sit in utroque adipiscing dissentiunt, et delenit placerat urbanitas quo. Vel possim malorum adolescens ad, debitis appareat perpetua eu ius, dolore voluptua vix no. Te tation sapientem sea, ei ipsum gloriatur ius.Mea suas iusto et, fabulas civibus dignissim mel te. Ius iriure expetendis intellegam cu. Cu eam nihil tractatos instructior. Sit ut minim docendi, vix vivendo scaevola ei. Vix dicunt pertinax adipiscing eu, an nostro expetenda vis. Pri ex aliquid deserunt, no his nonumes laboramus.Eu vel utamur singulis adipiscing, qui ad sumo suas vocent. Sed at prompta sanctus, eu eos prompta efficiantur. Et dolores salutatus mea. Intellegebat signiferumque et vel, ut cum scripta recusabo expetendis. Falli honestatis his at, mea singulis legendos delicata eu.Mea ex saperet oportere praesent. Nulla vidisse ullamcorper eam ad, duo principes instructior consectetuer no. Quaestio maiestatis et mei, at mei dico vitae veniam, putant consetetur cu per. Solum definitionem ius cu, eos te veritus petentium. Nostrud consulatu est ei, vide insolens cu usu.</p>
                    </div>
                    <div className="modal-monetize-checkbox">
                        <p><input class="with-gap" name="agree" type="checkbox" id="agree" />
                            <label htmlFor="agree">
                                I have read and agreed to the terms and condition.
                            </label>
                        </p>
                    </div>
                </div>
            );

            button = ([
                {   
                    text : 'Submit',
                    onclick : monetize_modal,
                    class_name : 'c-modal-buttons white-text waves-effect waves-grey lighten-4 btn black lighten-5' 
                },
                {   
                    text : 'Cancel', 
                    onclick : cancel_modal, 
                    class_name : 'c-modal-buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5' 
                }
            ]);

            return (
                <Modal
                    id='modal8'
                    title='Monetize'
                    content={content}
                    buttons={button} />
            );
        }
    });

module.exports =  Monetize;
