'use strict';
var React = require('react'),
    Preloader = React.createClass({
        render: function() {
            var preloader = '';

            if(this.props.type === 'linear-determinate') {
                preloader = (
                    <div className="progress">
                        <div className="determinate"></div>
                    </div>
                );
            } else if(this.props.type === 'linear-indeterminate') {
                preloader = (
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                );
            } else if(this.props.type === 'circular') {
                /*
                TODO: use react way of adding class
                */
                if(this.props.size === 'big') {
                    $('.preloader-wrapper').addClass('.big');
                } else if(this.props.size === 'small') {
                    $('.preloader-wrapper').addClass('.small');
                }

                preloader = (
                    <div className="preloader-wrapper active">
                        <div className="spinner-layer spinner-blue">
                            <div className="circle-clipper left">
                            <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                            </div><div className="circle-clipper right">
                            <div className="circle"></div>
                            </div>
                        </div>

                        <div className="spinner-layer spinner-red">
                            <div className="circle-clipper left">
                            <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                            </div><div className="circle-clipper right">
                            <div className="circle"></div>
                            </div>
                        </div>

                        <div className="spinner-layer spinner-yellow">
                            <div className="circle-clipper left">
                            <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                            </div><div className="circle-clipper right">
                            <div className="circle"></div>
                            </div>
                        </div>

                        <div className="spinner-layer spinner-green">
                            <div className="circle-clipper left">
                            <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                            </div><div className="circle-clipper right">
                            <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                );
            }

            return (
                <div>
                    {preloader}
                </div>
            );
        }
    });

module.exports = Preloader;
