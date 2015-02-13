'use strict';
var React = require('react'),
    AlbumTracks = require('./items/album_tracks'),
    _ = require('lodash'),
    AlbumStore = require('../../stores/album_stores'),
    getStateFromStore = function() {
        return {
            albums: AlbumStore.getAll()
        };
    },
    MusicManagerAlbumTracks = React.createClass({
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
                    return (
                        <AlbumTracks
                        id={item.id}
                        title={item.title}
                        albums={item.title}
                        artists={item.artist}
                        time={item.time}
                        label={item.label}
                        genre={item.genre}
                        uploaded={item.date_uploaded} />
                    );
                });
            return (
                <div className='table'>
                    <table className='responsive-table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='grey-text text-lighten-1'>Title</th>
                                <th className='grey-text text-lighten-1'>Artists</th>
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
module.exports =  MusicManagerAlbumTracks;
