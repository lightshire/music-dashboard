'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Constrainable = require('./mixins/constrainable'),
    MusicManager = React.createClass({
        mixins: [Constrainable],
        statics: {
            redirectTo: 'signin',
            required_login: true,
            user_types: ['admin', 'general_user', 'artist', 'record_label']
        },
         getInitialState : function() {
            return { 
                dropdown: false
            };   
        },
        showList: function() {
            

            if(this.state.dropdown) {
                this.setState({dropdown: false});
            }
            if(!this.state.dropdown) {
                this.setState({dropdown: true});
            }
        },
        render: function() {
            var earnings_list,
                more_tab,
                my_earnings_songs,
                my_earnings_albums,
                my_earnings_artists,
                my_earnings_labels,
                showlist;
                console.log('SHOWLIST'+ this.state.dropdown);
                if(this.state.dropdown) {
                    showlist = 'show';
                }
                else if(!this.state.dropdown) {
                    showlist = 'hide';
                }
                my_earnings_songs = (
                        <li className='tab col s3'>
                            <Link to='my.earnings.songs' className='waves-effect waves-white btn-flat white-text c-tabs'>Tracks</Link>
                        </li>
                );

                my_earnings_albums = (
                        <li className='tab col s3'>
                            <Link 
                                to='my.earnings.albums' 
                                className='waves-effect waves-white btn-flat white-text c-tabs'>Albums
                            </Link>
                        </li>
                );

                my_earnings_artists = (
                        <li className='tab col s3'>
                            <Link 
                                to='my.earnings.artists' 
                                className='waves-effect waves-white btn-flat white-text c-tabs'>Artists
                            </Link>
                        </li>
                );

                my_earnings_labels = (
                        <li className='tab col s3'>
                            <Link 
                                to='my.earnings.labels' 
                                className='waves-effect waves-white btn-flat white-text c-tabs'>Record Labels
                            </Link>
                        </li>
                );

                more_tab = (
                    <li onClick={this.showList} className='tab col s4 more' tabIndex='0'><a href='#' className='white-text c-tabs'>MORE<i className="mdi-navigation-arrow-drop-down right"></i></a>
                        <ul>
                            {my_earnings_artists}
                            {my_earnings_labels}
                        </ul>
                    </li>
                );

            if (this.hasAccess(['general_user'])) {
                my_earnings_albums = '';
                my_earnings_artists = '';
                my_earnings_labels = '';
            } else if (this.hasAccess(['artist'])) {
                my_earnings_artists = '';
                my_earnings_labels = '';
            } else if (this.hasAccess(['record_label'])) {
                my_earnings_labels = '';
            } else if (this.hasAccess(['admin'])) {
                
            }
            earnings_list = (
                    <div className="col s12">
                        <ul className='tabs default-tab'>
                            {my_earnings_songs}
                            {my_earnings_albums}
                            {my_earnings_artists}
                            {my_earnings_labels}
                        </ul>
                        <ul className='tabs mobile-tab'>
                            {my_earnings_songs}
                            {my_earnings_albums}
                            {more_tab}
                        </ul>
                    </div>
                );
            return (
                <div className='c-body'>
                    <div className='c-header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'>My Earnings</h4>
                            <div className='c-links'>
                                <div className="row">
                                    {earnings_list}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container c-main-container z-depth-1'>
                        <RouteHandler />
                    </div>
                </div>
            );
        }
    });
module.exports = MusicManager;
