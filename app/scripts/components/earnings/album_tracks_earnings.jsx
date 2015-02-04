'use strict';
var React = require('react'),
    AlbumTracks = require('./items/album_tracks_earnings'),
    _ = require('lodash'),
    AlbumStore = require('../../stores/album_stores'),
    getStateFromStore = function() {
        return {
            albums: AlbumStore.getAll()
        };
    },
    MusicManagerAlbums = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = AlbumStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.albums,
            items = _.map(data, function(item) {
                return (<AlbumTracks
                    id={item.id}
                    albums={item.title}
                    artists={item.artist}
                    time={item.time}
                    label={item.label}
                    genre={item.genre}
                    uploaded={item.date_uploaded} />);
            });

            return (
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='grey-text text-lighten-1'>Title</th>
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

module.exports =  MusicManagerAlbums;
