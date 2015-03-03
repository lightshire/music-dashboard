'use strict';
var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    Search = React.createClass({
        getInitialState: function() {
            return { expanded: false };
        },
        handleToggleSearch: function() {
            this.setState({expanded: !this.state.expanded});
        },
        render: function() {
            var search = '';
            if(this.state.expanded) {
                search = (<input id='search' placeholder='Search' onBlur={this.handleToggleSearch} type='text' key='search-box' required />);
            }
            return (
                <div className='search-btn right-align search-main'>
                    <form>
                        <label for='search' onClick={this.handleToggleSearch}><i className='mdi-action-search'></i></label>
                        <div className='input-field'>
                            <ReactCSSTransitionGroup transitionName='search-box'>
                                {search}
                            </ReactCSSTransitionGroup>
                        </div>
                    </form>
                </div>
            );
        }
    });
module.exports = Search;
