var React = require('react');
var TracksActions = require('../../actions/TracksActions');
var Modal           = require('../modal');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Songs = React.createClass({
    handleDeleteTracks: function() {
        TracksActions.deleteTracks(this.props.id);
    },
    getInitialState: function() {
        return {
            earnings: false
        }
    },
    showModal: function() {
        this.setState({earnings: !this.state.earnings});
    },
    hideModal: function () {
        this.setState({earnings: !this.state.earnings});
    },
    render: function() {
        var modal_earnings = '';
        var state = this.state;
        var hide_modal = this.hideModal;

        var modal_content_8 = (
            <div key="modal_earnings" className="c_monetize_modal">
                <div className="c_track_info row">
                    <div className="col s12">
                        <h6>Great! Your song was successfully monetized. You can now see earnings for this song.</h6><br/>
                    </div>
                    <div className="col s2">    
                        <img src="http://placehold.it/100x100" />
                    </div>
                    <div className="col s10">
                        <h5>Song Name</h5>
                        <h6>Artist</h6>
                        <span className="green-text">Status: Approved</span>
                    </div>
                    <div className="col s12">
                        <br/><h6>Earnings: $0.99 per day</h6>
                    </div>
                </div>
            </div>
        );
        
        var modal_buttons_4 = ([ 
            { 'text' : 'Got it!', 'onclick' : hide_modal, 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5' }
        ]);
        if (this.state.earnings === true) {
            modal_earnings =  <Modal
                        id="modal8"
                        title="Monetize"
                        content={modal_content_8}
                        buttons={modal_buttons_4} />
        }
        return (
            <tr className="songs">
                <td>
                    <div><i className="mdi-av-play-arrow"></i></div>
                    <div><i className="mdi-content-add"></i></div>
                </td>
                <td>{this.props.songs}</td>
                <td>{this.props.artists}</td>
                <td>{this.props.time}</td>
                <td>{this.props.label}</td>
                <td>{this.props.genre}</td>
                <td>{this.props.uploaded}</td>
                <td>
                    <div className="right-align">
                        <i onClick={this.showModal} className="mdi-editor-attach-money"></i>
                        <i className="mdi-editor-mode-edit"></i>
                        <i onClick={this.handleDeleteTracks} className="mdi-action-delete"></i>
                    </div>
                </td>
                <ReactCSSTransitionGroup transitionName="modal_earnings">
                    {modal_earnings}
                </ReactCSSTransitionGroup>  
            </tr>
        );
    }
});

module.exports = Songs;