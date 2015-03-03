'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    LayoutStore = require('../../stores/layout_stores'),
    TopBar = require('../helpers/topbar'),
    SideBar = require('../helpers/sidebar-fixed'),
    CategoryData = require('./category'),
    ArtistData = require('./artist'),
    CategoryItems = require('../../stores/category'),
    ArtistItems = require('../../stores/artist_stores'),
    Link = Router.Link,
    _ = require('lodash'),
    Constrainable = require('../mixins/constrainable'),
    getStateFromStore = function() {
        return {
            category: CategoryItems.getAll(),
            artist: ArtistItems.getAll()
        };
    },
    SideBar = React.createClass({
        mixins: [Constrainable],
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount : function () {
            $('.side-bar .collapsible').collapsible({
              accordion : false
            });
            $('.button-collapse').sideNav({
                menuWidth: 240, 
                edge: 'left', 
                closeOnClick: true 
                }
            );
            $('.collapsible-body a').click(function(){
                $('.button-collapse').sideNav('hide');
            });
            $('.sidebarHome').click(function(){
                $('.button-collapse').sideNav('hide');
            });
        },
        activeSidebarHome : function(x){
            var a = x.target.parentNode.nextSibling.childNodes[0].childNodes;
            for(var i = 0; i < a.length; i++){
                var getClass = a[i].getAttribute('class');
                if(getClass.indexOf('active') != -1){
                     a[i].childNodes[0].click();
                }
            }
        },
        revoidLink: function(b){
            var c = b.target.parentNode.parentNode.childNodes;
            var d = document.getElementsByClassName('side-nav')[0].childNodes[0].childNodes[0];
            var homeClass = String(d.getAttribute('class')).replace(/active/g,'');
            d.className = homeClass;
            for(var k = 0 ; k < c.length;k++){
                if(String(c[k].childNodes[0].getAttribute('class')).indexOf('active') != -1){
                    var otherClass = c[k].childNodes[0].getAttribute('class');
                    var newClass = String(otherClass).replace(/active/g,'');
                    c[k].childNodes[0].className = newClass;
                }
            }
        },
        render: function() {
            var my_account_settings = (<li><Link to='my.account.settings' className='waves-effect waves-blue collapsed-link'>Account Settings</Link></li>),
                my_account_security = (<li><Link to='my.account.security' className='waves-effect waves-blue collapsed-link'>Security</Link></li>),
                my_account_upgrade = (<li><Link to='my.account.upgrade' className='waves-effect waves-blue collapsed-link'>Upgrade</Link></li>),

                music_manager_songs = (<li><Link to='music.manager.songs' className='waves-effect waves-blue collapsed-link'>Tracks</Link></li>),
                music_manager_albums = (<li><Link to='music.manager.albums' className='waves-effect waves-blue collapsed-link'>Album</Link></li>),
                music_manager_artists = (<li><Link to='music.manager.artists' className='waves-effect waves-blue collapsed-link'>Artists</Link></li>),
                music_manager_labels = (<li><Link to='music.manager.labels' className='waves-effect waves-blue collapsed-link'>Record Labels</Link></li>),

                my_earnings_songs = (<li><Link to='my.earnings.songs' className='waves-effect waves-blue collapsed-link'>Tracks</Link></li>),
                my_earnings_albums = (<li><Link to='my.earnings.albums' className='waves-effect waves-blue collapsed-link'>Albums</Link></li>),
                my_earnings_artists = (<li><Link to='my.earnings.artists' className='waves-effect waves-blue collapsed-link'>Artists</Link></li>),
                my_earnings_labels = (<li><Link to='my.earnings.labels' className='waves-effect waves-blue collapsed-link'>Record Labels</Link></li>),

                music_trackpage_tracks = (<li><Link to='music.trackpage.tracks' className='waves-effect waves-blue collapsed-link'>Latest Tracks</Link></li>),
                music_trackpage_downloaded = (<li><Link to='music.trackpage.downloaded' className='waves-effect waves-blue collapsed-link'>Most Downloaded</Link></li>),

                music_trackpage_artist_tracks = (<li><Link to='music.trackpage.artist.tracks' className='waves-effect waves-blue collapsed-link'>Tracks</Link></li>),
                music_trackpage_artist_album = (<li><Link to='music.trackpage.artist.albums' className='waves-effect waves-blue collapsed-link'>Album</Link></li>),
                music_trackpage_artist_bio = (<li><Link to='music.trackpage.artist.bio' className='waves-effect waves-blue collapsed-link'>Bio</Link></li>),

                data = this.state.category,
                dataArtist = this.state.artist,
                items,
                artist_items;

                items = _.map(data, function(item) {
                    return (<CategoryData
                        id={item.id}
                        key={item.id}
                        title={item.title} />);
                });

                artist_items = _.map(dataArtist, function(item_artist) {
                    return (<ArtistData
                        id={item_artist.id}
                        key={item_artist.id}
                        artist={item_artist.artist} />);
                });

            if (!this.hasAccess(['admin', 'artist', 'general_user', 'record_label'])) {
                return (
                    <div className='side-bar zindex-supertop'>
                        <ul id='nav-mobile' className='side-nav fixed'>
                            <li className='no-hover'>
                                <div className='logo-container col sl2'>
                                    <img src='images/def-logo.svg'/>
                                </div>
                            </li>
                            <li className='sidebar-li'>
                                <Link to='my.account.settings' className='sidebarHome waves-effect waves-blue collapsible-header collapse-link'>My Accounts</Link>
                            </li>
                            <li className='sidebar-li'>
                                <ul className='collapsible collapsible-accordion'>
                                    <li className='sidebar-li'>
                                        <a className='waves-effect waves-blue collapsible-header collapse-link'>Category</a>
                                        <div className='collapsible-body block'>
                                            <ul>
                                                {items}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className='sidebar-li'>
                                <ul className='collapsible collapsible-accordion'>
                                    <li className='sidebar-li'>
                                        <a className='waves-effect waves-blue collapsible-header collapse-link'>Artists</a>
                                        <div className='collapsible-body block'>
                                            <ul>
                                                {artist_items}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <a id='burger-button' href='#' data-activates="nav-mobile" className="button-collapse"><i className='mdi-navigation-menu'></i></a>
                    </div>
                );
            }

            if (this.hasAccess(['admin'])) {
                my_account_upgrade = '';
            } else if (this.hasAccess(['artist'])) {
                music_manager_artists = '';
                music_manager_labels = '';
                my_earnings_artists = '';
                my_earnings_labels = '';
            } else if (this.hasAccess(['general_user'])) {
                music_manager_albums = '';
                music_manager_artists = '';
                music_manager_labels = '';
                my_earnings_artists = '';
                my_earnings_labels = '';
                my_earnings_albums = '';
            } else if (this.hasAccess(['record_label'])) {
                music_manager_labels = '';
                my_account_upgrade = '';
                my_earnings_labels = '';
            }

            return (
                <div className='side-bar zindex-supertop'>                    
                    <ul id='nav-mobile' className='side-nav fixed'>
                        <li className='no-hover'>
                            <div className='logo-container col l2'>
                                <img src='images/def-logo.svg'/>
                            </div>
                        </li>
                        <li className='sidebar-li'>
                            <Link to='home' className='sidebarHome waves-effect waves-blue collapsible-header collapse-link' onClick={this.activeSidebarHome}>Home</Link>
                        </li>
                        <li className='sidebar-li'>
                            <ul className='collapsible collapsible-accordion'>
                                <li className='sidebar-li'>
                                    <a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>My Account</a>
                                    <div className='collapsible-body'>
                                        <ul>
                                            {my_account_settings}
                                            {my_account_security}
                                            {my_account_upgrade}
                                        </ul>
                                    </div>
                                </li>
                                <li className='sidebar-li'>
                                    <a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>Music Manager</a>
                                    <div className='collapsible-body'>
                                        <ul>
                                            {music_manager_songs}
                                            {music_manager_albums}
                                            {music_manager_artists}
                                            {music_manager_labels}
                                        </ul>
                                    </div>
                                </li>
                                <li className='sidebar-li'>
                                    <a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>My Earnings</a>
                                    <div className='collapsible-body'>
                                        <ul>
                                            {my_earnings_songs}
                                            {my_earnings_albums}
                                            {my_earnings_artists}
                                            {my_earnings_labels}
                                        </ul>
                                    </div>
                                </li>
                                <li className='sidebar-li'>
                                    <a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>Music Trackpage</a>
                                    <div className='collapsible-body'>
                                        <ul>
                                            {music_trackpage_tracks}
                                            {music_trackpage_downloaded}
                                        </ul>
                                    </div>
                                </li>
                                <li className='sidebar-li'>
                                    <a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>Music Trackpage Artists</a>
                                    <div className='collapsible-body'>
                                        <ul>
                                            {music_trackpage_artist_tracks}
                                            {music_trackpage_artist_album}
                                            {music_trackpage_artist_bio}
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </li>
                    </ul>
                    <a id='burger-button' href='#' data-activates="nav-mobile" className="button-collapse"><i className='mdi-navigation-menu'></i></a>
                </div>
            );
        }
    });
module.exports = SideBar;
