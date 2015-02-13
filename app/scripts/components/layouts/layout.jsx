'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    LayoutStore = require('../../stores/layout_stores'),
    TopBar = require('../helpers/topbar'),
    SideBar = require('../helpers/sidebar-fixed'),
    ModalWrapper = require('../helpers/modal_wrapper'),
    GlobalFloatingButton = require('../helpers/global_floating_button'),
    getStateFromStore = function() {
        return {
            layout: LayoutStore.getAll()
        };
    },
    Layout = React.createClass({
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
                <div className='App '>
                    <TopBar />
                    <div className='contents'>
                        <ReactCSSTransitionGroup transitionName='sidebar'>
                            {this.state.layout.sidebar
                                ? (<SideBar key='sidebar' />)
                                : ''}
                        </ReactCSSTransitionGroup>
                        <div className={this.state.layout.sidebar ? 'main-route-container' : 'main-route-container no-sidebar'}>
                            <RouteHandler />
                        </div>
                        <GlobalFloatingButton />
                    </div>
                    <ModalWrapper />
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports = Layout;
