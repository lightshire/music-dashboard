'use strict';
var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    CategoryData = require('./category'),
    ArtistData = require('./artist'),
    CategoryItems = require('../../stores/category'),
    ArtistItems = require('../../stores/artist_stores'),
    _ = require('lodash'),
    Constrainable = require('../mixins/constrainable'),
    getStateFromStore = function() {
        return {
            category: CategoryItems.getAll(),
            artist: ArtistItems.getAll()
        };
    },
    CategorySidebar = React.createClass({
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
        render: function() {
            var data = this.state.category,
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
            return (
                <div>
                    <div className='side-bar zindex-supertop'>
                         <ul id='nav-mobile' className='side-nav fixed'>
                            <li className='no-hover'>
                                <div className='logo-container col sl2'>
                                    <img src='images/def-logo.svg'/>
                                </div>
                            </li>
                            <li className='sidebar-li'>
                                <Link to='my.account.settings' className='sidebarHome waves-effect waves-blue collapsible-header collapse-link'>Back to My Accounts</Link>
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
                        asd
                        <a id='burger-button' href='#' data-activates="nav-mobile" className="button-collapse"><i className='mdi-navigation-menu'></i></a>
                    </div>
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports =  CategorySidebar;
