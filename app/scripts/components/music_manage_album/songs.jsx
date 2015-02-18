'use strict';
var React = require('react'),
    Songs = require('./items/song'),
    _ = require('lodash'),
    AlbumTracksStore = require('../../stores/album_tracks_stores'),
    getStateFromStore = function() {
        return {
            albumtracks: AlbumTracksStore.getAll()
        };
    },
    MusicManagerAlbumSongs = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = AlbumTracksStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.albumtracks,
                items;

            items = _.map(data, function(item) {
                return (<Songs
                    id={item.id}
                    songs={item.title}
                    artists={item.artist}
                    time={item.time}
                    label={item.label}
                    genre={item.genre}
                    uploaded={item.date_uploaded}
                    songstatus={item.status} />);
            });
            return (
                <div className='table'>
                    <table className='c-responsive-table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='grey-text text-lighten-1'>Track</th>
                                <th className='grey-text text-lighten-1'>Artist</th>
                                <th className='grey-text text-lighten-1'>Duration</th>
                                <th className='grey-text text-lighten-1'>Label</th>
                                <th className='grey-text text-lighten-1'>Genre</th>
                                <th className='grey-text text-lighten-1'>Uploaded</th>
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
