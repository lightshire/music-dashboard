'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    LayoutStore = require('../../stores/layout_stores'),
    TopBar = require('../helpers/topbar'),
    SideBar = require('../helpers/sidebar-fixed'),
    Link = Router.Link,
    Constrainable = require('../mixins/constrainable'),
    SideBar = React.createClass({
        mixins: [Constrainable],
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
                my_earnings_labels = (<li><Link to='my.earnings.labels' className='waves-effect waves-blue collapsed-link'>Record Labels</Link></li>);

            if (!this.hasAccess(['admin', 'artist', 'general_user', 'record_label'])) {
                return (
                    <div className='side-bar zindex_supertop'>
                        <ul id='nav-mobile' className='side-nav fixed'>  
                            <li className='sidebar-li'>
                                <Link to='signin' className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.activeSidebarHome}>Sign in</Link>
                            </li>
                        </ul>
                    </div>
                );
            }

            if (this.hasAccess(['admin'])) {
                my_account_upgrade = '';
                my_earnings_songs = (<li><Link to='admin.my.earnings.songs' className='waves-effect waves-blue collapsed-link'>Tracks</Link></li>),
                my_earnings_albums = (<li><Link to='admin.my.earnings.albums' className='waves-effect waves-blue collapsed-link'>Albums</Link></li>),
                my_earnings_artists = (<li><Link to='admin.my.earnings.artists' className='waves-effect waves-blue collapsed-link'>Artists</Link></li>),
                my_earnings_labels = (<li><Link to='admin.my.earnings.labels' className='waves-effect waves-blue collapsed-link'>Record Labels</Link></li>);
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
                <div className='side-bar zindex_supertop'>
                    
                    <ul id='nav-mobile' className='side-nav fixed'>
                    <div className='logo-container col l2'>
                        <img src='images/def-logo.svg'/>       
                    </div>  
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
                            </ul>
                        </li>   
                        <li className='side-nav'>
                            <Link to='temp.admin' className='waves-effect waves-blue'> TempAdmin </Link>
                        </li>
                    </ul>
                    <a id='burger-button' href='#' data-activates="nav-mobile" className="button-collapse"><i className='mdi-navigation-menu'></i></a>
                </div>
            );
        }
    });
module.exports = SideBar;
