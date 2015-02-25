'use strict';
var React = require('react'),
    ArtistTracks = require('./items/album'),
    _ = require('lodash'),
    MusicTracksActions = require('../../../stores/album_trackspage_stores'),
    getStateFromStore = function() {
        return {
            albumtracks: MusicTracksActions.getAll()
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
            var data = this.state.albumtracks,
                items;

            items = _.map(data, function(item) {
                return (<ArtistTracks
                    id={item.id}
                    title={item.title}
                    time={item.time}
                    album={item.album}
                    state='false' />);
            });
            return (
                <div className='table trackpage'>
                    <div className='title-div'>
                        <div className='row'>
                            <div className='col s2'>
                                <img src='http://placehold.it/100x100' className='circle responsive-img'></img>
                            </div>
                            <div className='col s10'>
                                <p className='title-album'>Rage Against The Machine - XX (20th Anniversary Special)</p>
                                <p className='title-album-year grey-text'>2012</p>
                                <a className="waves-effect waves-light light-blue accent-3 btn"><i className="mdi-action-shopping-cart white-text left"></i>Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <table className='c-responsive-table bordered hoverable '>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th className='grey-text text-lighten-1 left-align'>Track</th>
                                <th className='grey-text text-lighten-1 left-align'>Time</th>
                                <th className='right-align'></th>
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
