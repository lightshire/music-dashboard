'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    LayoutStore = require('../../stores/layout_stores'),
    TopBar = require('../helpers/topbar'),
    SideBar = require('../helpers/sidebar'),
    Link = Router.Link,
    SideBar = React.createClass({
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
	        return (
	            <div className='side-bar zindex_supertop'>
	  				<ul className='side-nav'>  
						<li className='sidebar-li'>
							<Link to='home' className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.activeSidebarHome}>Home</Link>
						</li>					
		      			<li className='sidebar-li'>
		      				<ul className='collapsible collapsible-accordion'>
		      					<li className='sidebar-li'>
		      						<a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>My Account</a>
		      						<div className='collapsible-body'>
			      						<ul>
			      							<li><Link to='my.account.settings' className='waves-effect waves-blue collapsed-link'>Account Settings</Link></li>
			      							<li><Link to='my.account.security' className='waves-effect waves-blue collapsed-link'>Security</Link></li>
			      							<li><Link to='my.account.upgrade' className='waves-effect waves-blue collapsed-link'>Upgrade</Link></li>
			      						</ul>
			      					</div>
				      			</li>
				      			<li className='sidebar-li'>
		      						<a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>Music Manager</a>
			      					<div className='collapsible-body'>
			      						<ul>
			      							<li><Link to='music.manager.songs' className='waves-effect waves-blue collapsed-link'>Songs</Link></li>
					      					<li><Link to='music.manager.albums' className='waves-effect waves-blue collapsed-link'>Album</Link></li>
			      						</ul>
			      					</div>
				      			</li>
				      			<li className='sidebar-li'>
			      					<a className='waves-effect waves-blue collapsible-header collapse-link' onClick={this.revoidLink}>My Earnings</a>
			      					<div className='collapsible-body'>
			      						<ul>
			      							<li><a className='waves-effect waves-blue collapsed-link'>Songs</a></li>
			      						</ul>
			      					</div>
				      			</li>
		      				</ul>
		      			</li>	
	  				</ul>
	            </div>
	        );
	    }
	});
	module.exports = SideBar;