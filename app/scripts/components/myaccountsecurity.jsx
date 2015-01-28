var React 			= require('react');
var Modal 			= require('./modal');
var InputField      = require('./textfield');

var  MyAccountSecurity = React.createClass({
    render: function() {
    	var preloader_style = {
	    	width: '70%'
	    };
	   	var modal_content_1 = (
	   		<div className="container center-align c_upload_music_file_modal">
		   		<p>
		    		<i className="mdi-file-file-upload large"></i>
		    		<h5>Drag a music file here</h5>
		    		<h6>- or -</h6>
		    		<a className="waves-effect waves-light btn red lighten-2 c_select_a_track_button">Select a track from your computer</a>
		    	</p>
			</div>
	    );
	   	var modal_content_2 = (
	   		<div className="container center-align c_upload_music_file_modal">
				<p>
		    		<i className="mdi-av-my-library-music large"></i>
		    		<h5>filename.mp3</h5>
		    		<h6>Ready for upload</h6>
		    	</p>
	    	</div>
	    );
	   	var modal_content_3 = (
	   		<div className="container center-align c_upload_music_file_modal">
		    	<p>
					<div className="progress">
		      			<div className="determinate" style={preloader_style}></div>
		  			</div>
		  			<h5>Uploading music file</h5>
		  			<h6>70%</h6>
		    	</p>
	    	</div>
	    );
	   	var modal_content_4 = (
	   		<div className="container center-align c_upload_music_file_modal">
		    	<p>
					<i className="mdi-navigation-check large"></i>
					<h5>Upload complete</h5>
					<h6>Please provide track title and description. Click done to conrfirm</h6><br/>
		            <InputField
	                    textfield_type="text"
	                    textfield_label="Title"
	                    outerdiv_size="s12"
	                    textfield_state="validate"
	                    textfield_id="title"
	                    textfield_label_for="title" />
	                <InputField
	                    textfield_type="textarea"
	                    textfield_label="Description"
	                    outerdiv_size="s12"
	                    textfield_state="validate"
	                    textfield_id="description"
	                    textfield_label_for="description" />
		    	</p>
	    	</div>
	    );
	    var modal_content_5 = (
	    	<div className="c_monetize_modal">
	    		<div className="c_track_info row">
	    			<div className="col s2">	
	    				<img src="http://placehold.it/100x100" />
	    			</div>
	    			<div className="col s10">
	    				<h5>Song Name</h5>
	    				<h6>Artist</h6>
	    			</div>
	    		</div>
	    		<br/>
	    		<div className="c_track_terms">
	    			<p>
	    				<b>Terms and Conditions:</b><br/><br/>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	    			</p>
	    		</div>
	    		<div className="c_i_agree">
					<p>
    					<input type="checkbox" id="test5" />
    					<label for="test5">I have read and agreed to the terms and conditions</label>
  					</p>
	    		</div>
	    	</div>
	    );
		var modal_content_6 = (
			<div className="c_monetize_modal">
	    		<div className="c_track_info row">
	    			<div className="col s12">
	    				<h6>Unfortunately, this song was rejected due to copyright issues.</h6><br/>
	    			</div>
	    			<div className="col s2">	
	    				<img src="http://placehold.it/100x100" />
	    			</div>
	    			<div className="col s10">
	    				<h5>Song Name</h5>
	    				<h6>Artist</h6>
	    				<span className="red-text">Status: Rejected</span>
	    			</div>
	    		</div>
	    	</div>
		);
		var modal_content_7 = (
			<div className="c_monetize_modal">
	    		<div className="c_track_info row">
	    			<div className="col s12">
	    				<h6>Your request to monetize this track has been submitted. The process usually takes 2-3 days.</h6><br/>
	    			</div>
	    			<div className="col s2">	
	    				<img src="http://placehold.it/100x100" />
	    			</div>
	    			<div className="col s10">
	    				<h5>Song Name</h5>
	    				<h6>Artist</h6>
	    				<span className="orange-text">Status: Pending</span>
	    			</div>
	    		</div>
	    	</div>
		);
		var modal_content_8 = (
			<div className="c_monetize_modal">
	    		<div className="c_track_info row">
	    			<div className="col s12">
	    				<h6>Great! Your song was successfully monetized. You can now see earnings for this song.</h6><br/>
	    			</div>
	    			<div className="col s2">	
	    				<img src="http://placehold.it/100x100" />
	    			</div>
	    			<div className="col s10">
	    				<h5>Song Name</h5>
	    				<h6>Artist</h6>
	    				<span className="green-text">Status: Approved</span>
	    			</div>
	    			<div className="col s12">
	    				<br/><h6>Earnings: $0.99 per day</h6>
	    			</div>
	    		</div>
	    	</div>
		);
	    var modal_buttons_1 = ([
	    	{ 'text' : 'Upload', 'onclick' : 'something', 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
	    	{ 'text' : 'Cancel', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
	    ]);
	   	var modal_buttons_2 = ([
	    	{ 'text' : 'Done', 'onclick' : 'something', 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
	    	{ 'text' : 'Cancel', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
	    ]);
	    var modal_buttons_3 = ([
	    	{ 'text' : 'Submit', 'onclick' : 'something', 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
	    	{ 'text' : 'Cancel', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
	    ]);
	    var modal_buttons_4 = ([
	    	{ 'text' : 'Got it!', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
	    ]);
        return (
	        	<div className="c_my_account_security">
	            	<p>Temporary modal viewer page</p>

					// Upload music file
	            	<Modal
	            		id="modal1"
	            		title="Upload"
	            		content={modal_content_1}
	            		buttons={modal_buttons_1} />

	            	// Upload music file finished
	            	<Modal
	            		id="modal2"
	            		title="Upload"
	            		content={modal_content_2}
	            		buttons={modal_buttons_1} />

	            	// Upload music file loading
	            	<Modal
	            		id="modal3"
	            		title="Upload"
	            		content={modal_content_3}
	            		buttons={modal_buttons_1} />

	            	// Upload music file finished
	            	<Modal
	            		id="modal4"
	            		title="Upload"
	            		content={modal_content_4}
	            		buttons={modal_buttons_2} />

					// monetize modal
	            	<Modal
	            		id="modal5"
	            		title="Monetize"
	            		content={modal_content_5}
	            		buttons={modal_buttons_3} />


	            	// monetize modal rejected
	            	<Modal
	            		id="modal6"
	            		title="Monetize"
	            		content={modal_content_6}
	            		buttons={modal_buttons_4} />

	            	// monetize modal pending
					<Modal
	            		id="modal7"
	            		title="Monetize"
	            		content={modal_content_7}
	            		buttons={modal_buttons_4} />
	            		
					// monetize modal approved
					<Modal
	            		id="modal8"
	            		title="Monetize"
	            		content={modal_content_8}
	            		buttons={modal_buttons_4} />

	            </div>
        );
    }
});

module.exports =  MyAccountSecurity;
