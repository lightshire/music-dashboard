'use strict';
var React = require('react'),
    ArtistTracks = require('./items/bio'),
    _ = require('lodash'),
    MusicTracksBio = require('../../stores/album_trackspage_stores'),
    getStateFromStore = function() {
        return {
            albumtracks: MusicTracksBio.getAll()
        };
    },
    MusicTrackpageBio = React.createClass({
        getInitialState: function() {
            return getStateFromStore();
        },
        componentDidMount: function() {
            this.unsubscribe = MusicTracksBio.listen(this._onChange);
        },
        componentWillUnmount: function() {
            this.unsubscribe();
        },
        render: function() {
            var data = this.state.albumtracks,
                items;

            items = _.map(data, function(item) {
                return (<ArtistTracks
                    id={item.id}
                    title={item.title}
                    time={item.time}
                    album={item.album}
                    state='false' />);
            });
            return (
                <div className='row'>
                    <div className='col s3' >
                        <img src='http://placehold.it/350x150' className='responsive-img bio-img' />
                    </div>
                    <div className='col s9'>
                        <p><b>Rage Against the Machine</b> was an American rock band from Los Angeles, California. Formed in 1987, the group consisted of rapper/vocalist Zack de la Rocha, bassist and backing vocalist Tim Commerford, guitarist Tom Morello and drummer Brad Wilk. They draw inspiration from early heavy metal instrumentation, as well as hip hop acts such as Afrika Bambaataa, Public Enemy, the Beastie Boys and Dutch crossover band Urban Dance Squad. Rage Against the Machine is well known for its leftist political views, which are expressed in many of its songs. As of 2010, they have sold over 16 million records worldwide.</p>
                    </div>
                </div>
            );
        },
        _onChange: function() {
            this.setState(getStateFromStore());
        }
    });

module.exports =  MusicTrackpageBio;
