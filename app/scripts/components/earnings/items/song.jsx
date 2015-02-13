'use strict';
var React = require('react'),
    Songs = React.createClass({
        render: function() {
            return (
                <tr className="songs">
                    <td>
                        <div>
                            <i className="mdi-av-play-arrow"></i>
                            <i className="mdi-content-add"></i>
                        </div>
                    </td>
                    <td data-column-title='Title' href="/track1">Track 1</td>
                    <td data-column-title='Duration'>04:00</td>
                    <td data-column-title='Earnings'>$20.00</td>
                    <td data-column-title='Monetized Since'>JAN. 1, 2015</td>
                    <td data-column-title='Earnings'>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                        <i className="mdi-action-stars"></i>
                    </td>
                    <td data-column-title='Downloads'>2,500</td>
                </tr>
            );
        }
    });
module.exports = Songs;
