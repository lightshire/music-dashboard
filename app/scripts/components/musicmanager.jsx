var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var TracksActions = require('../actions/TracksActions');
var Search = require('./search');

var MusicManager = React.createClass({
    handleAddTracks: function() {
        TracksActions.addTracks();
    },
    render: function() {
        return (
            <div className='c_body'>
                <div className="c_header">
                    <div className="container">
                        <h4 className="white-text">Music Manager</h4>
                        <div className="c_links">
                            <Link to="music.manager.songs" className="waves-effect waves-white btn-flat white-text c_tabs">Songs</Link>
                            <Link to="music.manager.albums" className="waves-effect waves-white btn-flat white-text c_tabs">Albums</Link>

                            <input type="text" />
                        </div>
                        <Search />
                        <div onClick={this.handleAddTracks} className="upload-btn right-align">
                            <a className="btn-floating btn-large waves-effect waves-light red">
                                <i className="mdi-file-file-upload"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container c_main_container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = MusicManager;
