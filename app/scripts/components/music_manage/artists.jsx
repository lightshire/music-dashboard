'use strict';
var React = require('react'),
    _ = require('lodash'),
    MusicManagerArtist = React.createClass({
        render: function() {
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
                            <tr>
                                <td>
                                    <div>
                                        <i className='mdi-av-play-arrow'></i>
                                        <i className='mdi-content-add'></i>
                                    </div>
                                </td>
                                <td>Artist 1</td>
                                <td>12</td>
                                <td>140</td>
                                <td>Alternative</td>
                                <td>JAN. 1, 2015</td>
                                <td>
                                    <div className='right-align'>
                                        <i className='mdi-editor-attach-money'></i>
                                        <i className='mdi-editor-mode-edit'></i>
                                        <i className='mdi-action-delete'></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    });

module.exports =  MusicManagerArtist;
