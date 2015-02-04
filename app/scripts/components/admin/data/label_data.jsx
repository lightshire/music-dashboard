'use strict';
var React = require('react'),
    _ = require('lodash'),
    label_data = React.createClass({
        render: function() {
            var label_data =  _.map(this.props.data, function(data, i){

                return (
                    <tr className="c_row_admin_labels">
                        <td><img className={data.label_img_class} src={data.label_img} /></td>
                        <td>{data.label_name}</td>
                        <td>{data.artist_count}</td>
                        <td>{data.album_count}</td>
                        <td>{data.track_count}</td>
                        <td>{data.added}</td>
                        <td>
                            <div>
                                <i className='mdi-editor-mode-edit'></i>
                                <i className='mdi-action-delete'></i>
                            </div>
                        </td>
                    </tr>
                );
            });

            return (
                <tbody>
                    {label_data}
                </tbody>
            );
        }
    });

module.exports = label_data;
