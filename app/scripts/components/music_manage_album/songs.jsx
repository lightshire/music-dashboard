'use strict';
var React = require('react'),
    Songs = require('./items/song'),
    _ = require('lodash'),
    TracksForAlbumStore = require('../../stores/tracksforalbum_stores'),
    getStateFromStore = function() {
        return {
            tracksforalbum: TracksForAlbumStore.getAll()
        };
    },
    MusicManagerAlbumSongs = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = TracksForAlbumStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.tracksforalbum,
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
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th className="grey-text text-lighten-1">Song Title</th>
                                <th className="grey-text text-lighten-1">Artists</th>
                                <th className="grey-text text-lighten-1">Time</th>
                                <th className="grey-text text-lighten-1">Label</th>
                                <th className="grey-text text-lighten-1">Genre</th>
                                <th className="grey-text text-lighten-1">Uploaded</th>
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

module.exports =  MusicManagerAlbumSongs;
