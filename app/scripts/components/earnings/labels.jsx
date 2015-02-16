'use strict';
var React = require('react'),
    _ = require('lodash'),
    Label = require('./items/label'),
    MyEarningsLabels = React.createClass({
        componentDidMount: function () {
        },
        render: function() {
            var label_earnings_data = ([
                {
                    image : 'http://placehold.it/50x50',
                    name : 'Label 1',
                    artist_count : 8,
                    album_count : 12,
                    track_count : 144,
                    total_earnings : '$80.00',
                    artist_since : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    image : 'http://placehold.it/50x50',
                    name : 'Label 2',
                    artist_count : 8,
                    album_count : 12,
                    track_count : 144,
                    total_earnings : '$80.00',
                    artist_since : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    image : 'http://placehold.it/50x50',
                    name : 'Label 3',
                    artist_count : 8,
                    album_count : 12,
                    track_count : 144,
                    total_earnings : '$80.00',
                    artist_since : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
            ]),
            label_earnings =  _.map(label_earnings_data, function(data){
                return (
                    <Label image={data.image}
                        name={data.name}
                        artist_count={data.artist_count}
                        album_count={data.album_count}
                        track_count={data.track_count}
                        total_earnings={data.total_earnings}
                        artist_since={data.artist_since}
                        downloads={data.downloads}/>
                );
            });

            return (
                <div>
                    <div className='row'>
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
                                    <th className='grey-text text-lighten-1'>Record Label</th>
                                    <th className='grey-text text-lighten-1'>Artists</th>
                                    <th className='grey-text text-lighten-1'>Albums</th>
                                    <th className='grey-text text-lighten-1'>Tracks</th>
                                    <th className='grey-text text-lighten-1'>Earnings</th>
                                    <th className='grey-text text-lighten-1'>Artist Since</th>
                                    <th className='grey-text text-lighten-1'>Rating</th>
                                    <th className='grey-text text-lighten-1'>Downloads</th>
                                    <th></th>
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
module.exports =  MyEarningsLabels;
