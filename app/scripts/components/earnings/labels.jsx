'use strict';
var React = require('react'),
    _ = require('lodash'),
    MusicManagerAlbums = React.createClass({
        componentDidMount: function () {
            $(document).ready(function() {
                $('select').material_select();
            });
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
            label_earnings =  _.map(label_earnings_data, function(data, i){
                return (
                    <tr className='c_row_admin_artists'>
                        <td><img className="c_labels_image" src={data.image} /></td>
                        <td>{data.name}</td>
                        <td>{data.artist_count}</td>
                        <td>{data.album_count}</td>
                        <td>{data.track_count}</td>
                        <td>{data.total_earnings}</td>
                        <td>{data.artist_since}</td>
                        <td>
                            <i className='mdi-action-stars'></i>
                            <i className='mdi-action-stars'></i>
                            <i className='mdi-action-stars'></i>
                        </td>
                        <td>{data.downloads}</td>
                    </tr>
                );
            });
            return (
                <div>
                    <div className="row"><br/>
                        <div className="col s6">
                            <label>Month</label>
                            <select>
                                <option value="" disabled selected>Choose month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <label>Year</label>
                            <select>
                                <option value="" disabled selected>Choose year</option>
                                <option value="1">2014</option>
                                <option value="2">2013</option>
                                <option value="3">2012</option>
                            </select>
                        </div>
                    </div>
                    <div className='table'>
                        <table>
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
module.exports =  MusicManagerAlbums;