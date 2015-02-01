'use strict';
var React = require('react/addons'),
    helpers = require('../mixins/helpers'),
    Card = React.createClass({
        mixins: [helpers],
        getDefaultProps: function() {
            return {
                classes: [],
                text_color: ['white-text'],
                title: '',
                content: '',
                actions: false,
                image_url: false,
                reveal: false
            };
        },
        render: function() {
            var classes = ['card'].concat(this.stringToArray(this.props.classes)).join(' '),
                text_color = this.stringToArray(this.props.text_color).join(' '),
                card_title = (
                    <span className={['card-title activator'].concat(text_color).join(' ')}>
                        <span className="activator">{this.props.title}</span>
                        {this.props.reveal ? <i className="activator mdi-navigation-more-vert right"></i> : ''}
                    </span>
                ),
                image = this.props.image_url
                    ? (<div className={['card-image'].concat(this.stringToArray(this.props.image_effect)).join(' ')}>
                            <img className="activator" src={this.props.image_url}/>
                            {this.props.reveal ? '' : card_title}
                        </div>)
                    : '',

                actions = this.props.actions
                    ? (<div className="card-action">
                            {this.props.actions}
                        </div>)
                    : '',
                reveal = this.props.reveal
                    ? (<div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">
                                {this.props.title}  <i className="mdi-navigation-close right"></i>
                            </span>
                            <p>
                                {this.props.reveal}
                            </p>
                        </div>)
                    : '';

            return (
                <div className={classes}>
                    {image}
                    <div className={['card-content'].concat(text_color).join(' ')}>
                        {this.props.image_url && !this.props.reveal ? '' : card_title}
                        <p>{this.props.content}</p>
                    </div>
                    {actions}
                    {reveal}
                </div>
            );
        }
    });

module.exports = Card;
