'use strict';
var React = require('react'),
    Labels = require('./items/labels'),
    LabelsStore = require('../../stores/label_stores'),
    _ = require('lodash'),
    getStateFromStore = function() {
        return {
            labels: LabelsStore.getAll()
        };
    },
    MusicManagerLabels = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = LabelsStore.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.labels,
                items;

            items = _.map(data, function(item) {
                return (<Labels
                    id={item.id}
                    avatar={item.avatar}
                    artist={item.artist}
                    albums={item.albums}
                    tracks={item.tracks}
                    genre={item.genre}
                    added={item.added} />);
            });

            return (
                <div className='table'>
                    <table className='c_responsive_table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='grey-text text-lighten-1'>Labels</th>
                                <th className='grey-text text-lighten-1'>Albums</th>
                                <th className='grey-text text-lighten-1'>Tracks</th>
                                <th className='grey-text text-lighten-1'>Genre</th>
                                <th className='grey-text text-lighten-1'>Added</th>
                                <th></th>
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

module.exports =  MusicManagerLabels;
