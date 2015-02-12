'use strict';
var React = require('react'),
    Songs = require('./items/song'),
    _ = require('lodash'),
    TracksStore = require('../../stores/track_stores'),
    getStateFromStore = function() {
        return {
            tracks: TracksStore.getAll()
        };
    },
    MusicManagerSongs = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = TracksStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.tracks,
                items;
                items = _.map(data, function(item) {
                    return (<Songs
                        id={item.id}
                        songs={item.title}
                        artists={item.artist}
                        time={item.time}
                        label={item.label}
                        genre={item.genre}
                        uploaded={item.date_uploaded} />);
                });
            return (
                <div className="table">
                    <table className='responsive-table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className="grey-text text-lighten-1">Title</th>
                                <th className="grey-text text-lighten-1">Duration</th>
                                <th className="grey-text text-lighten-1">Earnings (Monthly) <i className="mdi-navigation-more-vert"></i></th>
                                <th className="grey-text text-lighten-1">Monetized Since</th>
                                <th className="grey-text text-lighten-1">Rating</th>
                                <th className="grey-text text-lighten-1">Downloads</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });
module.exports =  MusicManagerSongs;
