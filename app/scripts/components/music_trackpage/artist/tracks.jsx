'use strict';
var React = require('react'),
    ArtistTracks = require('./items/artist_tracks'),
    _ = require('lodash'),
    MusicTracksActions = require('../../../stores/music_tracks_stores'),
    getStateFromStore = function() {
        return {
            musictracks: MusicTracksActions.getAll()
        };
    },
    MusicTrackpageArtistTracks = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = MusicTracksActions.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.musictracks,
                items;

            items = _.map(data, function(item) {
                return (<ArtistTracks
                    id={item.id}
                    title={item.title}
                    time={item.time}
                    album={item.album} />);
            });
            return (
                <div className='table'>
                    <table className='c-responsive-table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='grey-text text-lighten-1'>Track</th>
                                <th className='grey-text text-lighten-1'>Time</th>
                                <th className='grey-text text-lighten-1'>Album</th>
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

module.exports =  MusicTrackpageArtistTracks;
