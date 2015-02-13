'use strict';
var React = require('react'),
    MyEarningsArtists = React.createClass({
        render: function() {
            return (
                <div className="table">
                    <table className='c_responsive_table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className="grey-text text-lighten-1">Artist</th>
                                <th className="grey-text text-lighten-1">Tracks</th>
                                <th className="grey-text text-lighten-1">Albums</th>
                                <th className="grey-text text-lighten-1">Added</th>
                                <th className="grey-text text-lighten-1">Rating</th>
                                <th className="grey-text text-lighten-1">Downloads</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="albums">
                                <td>
                                    <div>
                                        <i className="mdi-av-play-arrow"></i>
                                        <i className="mdi-content-add"></i>
                                    </div>
                                </td>
                                <td>Artist 1</td>
                                <td>450</td>
                                <td>25</td>
                                <td>JAN. 1, 2015</td>
                                <td>
                                    <i className="mdi-action-stars"></i>
                                    <i className="mdi-action-stars"></i>
                                    <i className="mdi-action-stars"></i>
                                </td>
                                <td>2,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });
module.exports =  MyEarningsArtists;
