'use strict';
var React = require('react'),
    _ = require('lodash'),
    Album = require('./items/album'),
    MyEarningsAlbums = React.createClass({
        componentDidMount: function () {
        },
        render: function() {
            var album_earnings_data = ([
                {
                    id : 1,
                    title : 'Album 1',
                    artist : 'Artist 1',
                    track_count : 144,
                    total_earnings : '$80.00',
                    added : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    id : 2,
                    title : 'Album 2',
                    artist : 'Artist 1',
                    track_count : 144,
                    total_earnings : '$80.00',
                    added : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    id : 3,
                    title : 'Album 3',
                    artist : 'Artist 1',
                    track_count : 144,
                    total_earnings : '$80.00',
                    added : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
            ]),
            label_earnings =  _.map(album_earnings_data, function(data){
                return (
                    <Album id={data.id}
                        title={data.title}
                        artist={data.artist}
                        track_count={data.track_count}
                        total_earnings={data.total_earnings}
                        added={data.added}
                        downloads={data.downloads}/>
                );
            });

            return (
                <div>
                    <div className='row'><br/>
                        <div className='selectfield col s12 m6 l6'>
                            <label>Month</label>
                            <select>
                                <option value='' disabled selected>Choose month</option>
                                <option value='1'>January</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                            </select>
                        </div>
                        <div className='selectfield col s12 m6 l6'>
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
                                    <th ></th>
                                    <th className='grey-text text-lighten-1'>Album</th>
                                    <th className='grey-text text-lighten-1'>Artist</th>
                                    <th className='grey-text text-lighten-1'>Tracks</th>
                                    <th className='grey-text text-lighten-1'>Total Earnings</th>
                                    <th className='grey-text text-lighten-1'>Added</th>
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

module.exports =  MyEarningsAlbums;
