var React = require('react/addons');
var helpers = require('../mixins/helpers');

var Card = React.createClass({
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
        }
    },
    render: function() {
        var classes = ['card'].concat(this.stringToArray(this.props.classes)).join(' ');
        var textColor = this.stringToArray(this.props.text_color).join(' ');

        var cardTitle = (
            <span className={['card-title activator'].concat(textColor).join(' ')}>
                <span className="activator">{this.props.title}</span>
                {this.props.reveal ? <i className="activator mdi-navigation-more-vert right"></i> : ''}
            </span>
            );

        var image = this.props.image_url
            ? (<div className={['card-image'].concat(this.stringToArray(this.props.image_effect)).join(' ')}>
                <img className="activator" src={this.props.image_url}/>
                {this.props.reveal ? '' : cardTitle}
              </div>)
            : '';

        var actions = this.props.actions
            ? (<div className="card-action">
                {this.props.actions}
              </div>)
            : '';

        var reveal = this.props.reveal
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
            <div className={['card-content'].concat(textColor).join(' ')}>
                {this.props.image_url && !this.props.reveal ? '' : cardTitle}
                <p>{this.props.content}</p>
            </div>
              {actions}
              {reveal}
          </div>
        );
    }
});

module.exports = Card;