'use strict';
var React = require('react/addons'),
    MyAccount = React.createClass({
        render: function() {
            return (
                <div className='c_my_account_updgrade'>
                	<div className='row'>
                		<div className='col s8'>
                			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                		</div>
                		<div className='col s4'>&nbsp;</div>
                	</div>
                	<div className='row'>
                		<div className='col s6'>
						    <div className='row'>
						        <div className='col s12'>
						          	<div className='card'>
							            <div className='card-content'>
							            	<div className='center-align'>
							            		<i className='mdi-action-account-circle large'></i>
							            		<h5>Artist</h5>
							            	</div>
							            	<br/><p>Upgrade this user to an Artist. Artists have the ability to add, manage and monetize their own tracks and albums.</p>
							            </div>
							            <div className='card-action'>
								            <div className='right-align'>
								            	<a href='#'>Upgrade to Artist</a>
								            </div>
							            </div>
						          	</div>
						        </div>
						    </div>
                		</div>
                		<div className='col s6'>
                			<div className='row'>
						        <div className='col s12'>
						          	<div className='card'>
							            <div className='card-content'>
							            	<div className='center-align'>
							            		<i className='mdi-image-adjust large'></i>
							            		<h5>Record Label</h5>
							            	</div>
							            	<br/><p>Upgrade this user to a Record Label. Record Labels have the ability to add, manage and monetize tracks, artists and albums.</p>
							            </div>
							            <div className='card-action'>
								            <div className='right-align'>
								            	<a href='#'>Upgrade to Record Label</a>
								            </div>
							            </div>
						          	</div>
						        </div>
						    </div>
                		</div>
                	</div>
                </div>
            );
        }
    });
module.exports = MyAccount;
