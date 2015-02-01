'use strict';
var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var LayoutStore = require('../stores/LayoutStores');

var TopBar = require('./topbar');
var SideBar = require('./sidebar');

var getStateFromStore = function() {
    return {
        layout: LayoutStore.getAll()
    };
};

var Layout = React.createClass({
    getInitialState: function() {
        return getStateFromStore();
    },
    componentDidMount: function() {
        this.unsubscribe = LayoutStore.listen(this._onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
  render: function() {
    return (
      <div className="App ">
          <TopBar />
          <div className="contents">
              <ReactCSSTransitionGroup transitionName="sidebar">
                  {this.state.layout.sidebar 
                      ? (<SideBar key="sidebar" />)
                      : ''}
              </ReactCSSTransitionGroup>
              <div className={this.state.layout.sidebar ? 'main-route-container' : 'main-route-container no-sidebar'}>
                  <RouteHandler />
              </div>
          </div>
      </div>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStore());
  }
});

module.exports = Layout;
