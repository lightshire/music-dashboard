var React = require('react');

var TrackItem = React.createClass({
    render: function() {
        return (
            <li>
                <div className='row track-item'>
                    <div className='col s2 track-thumb-container'>
                        <img className='track-thumb' src='https://placeimg.com/80/80/music/1' />
                    </div>
                    <div className='col s8 track-title-container'>
                        <span className='track-title'>
                            Song Title
                        </span>
                    </div>
                    <div className='col s2 track-remove-container'>
                        <a href='#' className='track-remove'>
                            <i className='mdi-navigation-cancel'></i>
                        </a>
                    </div>
                </div>
            </li>
        );
    }
});

module.exports = TrackItem;
