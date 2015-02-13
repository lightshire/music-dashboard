'use strict';
var React = require('react'),
    _ = require('lodash'),
    MyEarningsTracks = React.createClass({
        componentDidMount: function () {
            $(document).ready(function() {
                $('select').material_select();
            });
        },
        render: function() {
            var track_earnings_data = ([
                {
                    title : 'Track 1',
                    artist : 'Artist 1',
                    album : 'Album 1',
                    total_earnings : '$80.00',
                    added : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    title : 'Track 2',
                    artist : 'Artist 2',
                    album : 'Album 2',
                    total_earnings : '$80.00',
                    added : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
                {
                    title : 'Track 3',
                    artist : 'Artist 3',
                    album : 'Album 3',
                    total_earnings : '$80.00',
                    added : 'JAN. 15, 2015',
                    rating : 3,
                    downloads : 1542
                },
            ]),
            label_earnings =  _.map(track_earnings_data, function(data, i){
                return (
                    <tr className='c_row_admin_artists'>
                        <td>
                            <div>
                                <i className="mdi-av-play-arrow"></i>
                                <i className="mdi-content-add"></i>
                            </div>
                        </td>
                        <td>{data.title}</td>
                        <td>{data.artist}</td>
                        <td>{data.album}</td>
                        <td>{data.total_earnings}</td>
                        <td>{data.added}</td>
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
                    <div className='row'><br/>
                        <div className='col s12 m6 l6'>
                            <label>Month</label>
                            <select>
                                <option value='' disabled selected>Choose month</option>
                                <option value='1'>January</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                            </select>
                        </div>
                        <div className='col s12 m6 l6'>
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
                        <table className='c_earnings_table responsive-table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className='grey-text text-lighten-1'>Track</th>
                                    <th className='grey-text text-lighten-1'>Artist</th>
                                    <th className='grey-text text-lighten-1'>Album</th>
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
module.exports =  MyEarningsTracks;
