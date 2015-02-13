'use strict';
var React = require('react'),
    _ = require('lodash'),
    Artist = require('./items/artist'),
    MyEarningsArtists = React.createClass({
        componentDidMount: function () {
        },
        render: function() {
            var artist_earnings_data = ([
                {
                    id: 1,
                    image : 'http://placehold.it/50x50',
                    name : 'Artist 1',
                    album_count : 12,
                    track_count : 144,
                    total_earnings : '$80.00',
                    artist_since : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    id: 2,
                    image : 'http://placehold.it/50x50',
                    name : 'Artist 2',
                    album_count : 12,
                    track_count : 144,
                    total_earnings : '$80.00',
                    artist_since : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    id: 3,
                    image : 'http://placehold.it/50x50',
                    name : 'Artist 3',
                    album_count : 12,
                    track_count : 144,
                    total_earnings : '$80.00',
                    artist_since : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
            ]),
            label_earnings =  _.map(artist_earnings_data, function(data){
                return (
                    <Artist id={data.id}
                        image={data.image}
                        name={data.name}
                        album_count={data.album_count}
                        track_count={data.track_count}
                        total_earnings={data.total_earnings}
                        artist_since={data.artist_since}
                        downloads={data.downloads}/>
                );
            });

            return (
                <div>
                    <div className='row'><br/>
                        <div className='col s12 m6 selectfield'>
                            <label>Month</label>
                            <select>
                                <option value='' disabled selected>Choose month</option>
                                <option value='1'>January</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                            </select>
                        </div>
                        <div className='col s12 m6 selectfield'>
                            <label>Year</label>
                            <select>
                                <option value='' disabled selected>Choose year</option>
                                <option value='1'>2014</option>
                                <option value='2'>2013</option>
                                <option value='3'>2012</option>
                            </select>
                        </div>
                    </div>
                    <div className='table'>
                        <table className='c_responsive_table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className='grey-text text-lighten-1'>Artist</th>
                                    <th className='grey-text text-lighten-1'>Albums</th>
                                    <th className='grey-text text-lighten-1'>Tracks</th>
                                    <th className='grey-text text-lighten-1'>Earnings</th>
                                    <th className='grey-text text-lighten-1'>Artist Since</th>
                                    <th className='grey-text text-lighten-1'>Rating</th>
                                    <th className='grey-text text-lighten-1'>Downloads</th>
                                </tr>
                            </thead>
                            <tbody>
                                {label_earnings}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    });
module.exports =  MyEarningsArtists;
