'use strict';
var React = require('react/addons'),
	Router = require('react-router'),
	RouteHandler = Router.RouteHandler,
	Search = require('./helpers/search'),
    Constrainable = require('./mixins/constrainable'),
    Checkout = React.createClass({
        render: function() {
            return (
                 <div className='c-body'>
                    <div className='c-header z-depth-1'>
                        <div className='container'>
                            <h4 className='white-text'><i className='mdi-navigation-arrow-back'></i>Checkout</h4>
                            <div className='c-links'>
                                <div className='row'>	                                                               	
                                </div>
                            </div>
                            <Search />
                        </div>                         
                    </div>                    
                    <div className='container c-main-container z-depth-1'>
                    	<div className='row top-padding'>
                    		<div className='col s12 m6 l6'>
                    			<div className='row'>
			                		<div className='input-field col s12 m6 l6'>
								    	<input id='cardholder_name' type='text' className='validate' />
								        <label htmlFor='cardholder_name'>Cardholder Name</label>
								    </div>
								    <div className='input-field col s12 m6 l6'>
								    	<input id='card_name' type='text' className='validate' />
								        <label htmlFor='card_name'>Card Name</label>
								    </div>
							    </div>
						    	<div className='col s4 m4 l4 selectfield'> 
						    		<select>
										<option value="" disabled selected>MM</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>
						    	<div className='col s4 m4 l4 selectfield'>
						    		<select>
										<option value="" disabled selected>YYYY</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
						    	</div>
						    	<div className='col s4 m4 l4 selectfield'>
						    		<select>
										<option value="" disabled selected>CVC</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
						    	</div>
								   
		                    </div>
		                    <div className='col s12 m6 l6'>
			                    <div className='row'>
			                    	<img src='http://fontmeme.com/images/Paypal-Logo.jpg' className='img-responsive paypal-logo' />
			                    </div>		                    	
		                    </div>
                    	</div> 
                    	<div className='row'>
                    		<div className='col s12'>
	                    		<div className='right'>
	                    			<a className="waves-effect waves-blue blue-text text-lighten-2 btn no-bg">Cancel</a>
	                    			<a className="waves-effect waves-light btn">Complete Purchase</a>
	                    		</div>                    			
                    		</div>
                    	</div>                       
                    </div>
                </div>
            );
        }
    });
module.exports = Checkout;
