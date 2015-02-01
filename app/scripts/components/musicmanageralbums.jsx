'use strict';
var React = require('react');
var Albums = require('../components/manage/albums');
var _ = require('lodash');
var AlbumStore = require('../stores/AlbumStores');

var getStateFromStore = function() {
    return {
        albums: AlbumStore.getAll()
    };
};

var  MusicManagerAlbums = React.createClass({
    getInitialState: function() {
        return getStateFromStore();
    },
    componentDidMount: function() {
        this.unsubscribe = AlbumStore.listen(this._onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    render: function() {

    	var data = this.state.albums;

        var items = _.map(data, function(item) {
            return (<Albums
                id={item.id}
                albums={item.title}
                artists={item.artist}
                time={item.time}
                label={item.label}
                genre={item.genre}
                uploaded={item.date_uploaded} />);
        });

        return (
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="grey-text text-lighten-1">Album Title</th>
                            <th className="grey-text text-lighten-1">Artists</th>
                            <th className="grey-text text-lighten-1">Time</th>
                            <th className="grey-text text-lighten-1">Label</th>
                            <th className="grey-text text-lighten-1">Genre</th>
                            <th className="grey-text text-lighten-1">Uploaded</th>
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

module.exports =  MusicManagerAlbums;
