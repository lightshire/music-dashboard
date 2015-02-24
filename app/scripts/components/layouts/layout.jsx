'use strict';
var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    LayoutStore = require('../../stores/layout_stores'),
    TopBar = require('../helpers/topbar'),
    SideBar = require('../helpers/sidebar-fixed'),
    ModalWrapper = require('../helpers/modal_wrapper'),
    Constrainable = require('../mixins/constrainable'),
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
        mixins: [Constrainable, Router.State, Router.Navigation],
        render: function() {
            var global_floating_button='';

            if (this.hasAccess(['admin', 'general_user', 'artist', 'record_label'])) {
                global_floating_button=(<GlobalFloatingButton />);
            }

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
                    </div>
                    {global_floating_button}
                    <ModalWrapper />
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports = Layout;
