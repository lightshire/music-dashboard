'use strict';
var React = require('react'),
    Artists = require('./items/artists'),
    ArtistsStore = require('../../stores/artist_stores'),
    _ = require('lodash'),
    getStateFromStore = function() {
        return {
            artists: ArtistsStore.getAll()
        };
    },
    MusicManagerArtists = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = ArtistsStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.artists,
                items;

            items = _.map(data, function(item) {
                return (<Artists
                    id={item.id}
                    avatar={item.avatar}
                    artist={item.artist}
                    albums={item.albums}
                    tracks={item.tracks}
                    genre={item.genre}
                    added={item.added} />);
            });

            return (
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='grey-text text-lighten-1'>Artist</th>
                                <th className='grey-text text-lighten-1'>Albums</th>
                                <th className='grey-text text-lighten-1'>Tracks</th>
                                <th className='grey-text text-lighten-1'>Genre</th>
                                <th className='grey-text text-lighten-1'>Added</th>
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

module.exports =  MusicManagerArtists;
