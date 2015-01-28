var React = require('react/addons');

var TrackItem =require('./player/trackitem');

var Player = React.createClass({
    render: function() {
        return (
            <div className='player'>
                <ul>
                    <li><a href='#'><i className='mdi-av-volume-up' /></a></li>
                    <li><a href='#'><i className='mdi-av-skip-previous' /></a></li>
                    <li><a href='#'><i className='mdi-av-play-arrow' /></a></li>
                    <li><a href='#'><i className='mdi-av-skip-next' /></a></li>
                    <li className="btn-show-playlist">
                        <a href='#'><i className='mdi-navigation-more-vert' /></a>
                        <div className='playlist'>
                             <div className='track-info'>
                                <div className='title'>Song Title</div>
                                <div className='row seek-container'>
                                    <div className='col s2 time-current-container'>
                                        <span class='time-current'>
                                            0:02
                                        </span>
                                    </div>
                                    <div className='col s8 seeker-container'>
                                        <input type='range' className='seeker' min='0' max='360' />
                                    </div>
                                    <div className='col s2 time-end-container'>
                                        <span class='time-end'>
                                            4:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='track-list'>
                                <ul>
                                    <TrackItem />
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Player;
