var React = require('react');
var Modal 			= require('./modal');
var InputField      = require('./textfield');

var MyAccount = React.createClass({
    render: function() {
	   	var create_album = (
	   		<div className="container c_create_album">
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
                   	<div>
                   		<label>Upload an album art</label><br/><br/>
                   		<div className="row">
                   			<div className="col s4">
                   				<img src="http://placehold.it/100x100" />
                   			</div>
                   			<div className="col s8">
                   				<br/><label>At least 1600 x 1600 pixels</label><br/>
                   				<a className="waves-effect waves-light btn blue lighten-2">Choose From File</a>
                   			</div>
                   		</div>
                   	</div>
			</div>
	    );
		var new_upload_album = (
			<div className="center-align c_new_upload_album">
				<div className="row">
					<div className="col s3">&nbsp;</div>
					<div className="col s6">
						<div className="row">
							<div className="col s6">
								<div className="c_new_upload">
									<i className="mdi-file-file-upload large" />
									<h5>Upload</h5>
								</div>
							</div>
							<div className="col s6">
								<div className="c_new_album">
									<i className="mdi-file-folder large" />
									<h5>Album</h5>
								</div>
							</div>
						</div>					
					</div>
					<div className="col s3">&nbsp;</div>
				</div>
			</div>
		);
		var new_upload_album_artist = (
			<div className="center-align c_new_upload_album">
				<div className="row">
					<div className="col s2">&nbsp;</div>
					<div className="col s8">
						<div className="row">
							<div className="col s4">
								<div className="c_new_upload">
									<i className="mdi-file-file-upload large" />
									<h5>Upload</h5>
								</div>
							</div>
							<div className="col s4">
								<div className="c_new_album">
									<i className="mdi-file-folder large" />
									<h5>Album</h5>
								</div>
							</div>
							<div className="col s4">
								<div className="c_new_artist">
									<i className="mdi-social-person large" />
									<h5>Artist</h5>
								</div>
							</div>
						</div>					
					</div>
					<div className="col s2">&nbsp;</div>
				</div>
			</div>
		);
		var new_upload_album_artist_label = (
			<div className="center-align c_new_upload_album">
				<div className="row">
					<div className="col s1">&nbsp;</div>
					<div className="col s10">
						<div className="row">
							<div className="col s3">
								<div className="c_new_upload">
									<i className="mdi-file-file-upload large" />
									<h5>Upload</h5>
								</div>
							</div>
							<div className="col s3">
								<div className="c_new_album">
									<i className="mdi-file-folder large" />
									<h5>Album</h5>
								</div>
							</div>
							<div className="col s3">
								<div className="c_new_artist">
									<i className="mdi-social-person large" />
									<h5>Artist</h5>
								</div>
							</div>
							<div className="col s3">
								<div className="c_new_label">
									<i className="mdi-notification-disc-full large" />
									<h5>Label</h5>
								</div>
							</div>
						</div>					
					</div>
					<div className="col s1">&nbsp;</div>
				</div>
			</div>
		);
		var new_artist = (
	   		<div className="container c_create_album">
                <InputField
                    textfield_type="text"
                    textfield_label="Name"
                    outerdiv_size="s12"
                    textfield_state="validate"
                    textfield_id="name"
                    textfield_label_for="name" />
                 <InputField
                    textfield_type="textarea"
                    textfield_label="Bio"
                    outerdiv_size="s12"
                    textfield_state="validate"
                    textfield_id="bio"
                    textfield_label_for="bio" />
                   	<div>
                   		<label>Upload an artist photo</label><br/><br/>
                   		<div className="row">
                   			<div className="col s4">
                   				<img src="http://placehold.it/100x100" />
                   			</div>
                   			<div className="col s8">
                   				<br/><label>At least 1600 x 1600 pixels</label><br/>
                   				<a className="waves-effect waves-light btn blue lighten-2">Choose From File</a>
                   			</div>
                   		</div>
                   	</div>
			</div>
	    );
	    var create_album_buttons = ([
	    	{ 'text' : 'Create Album', 'onclick' : 'something', 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
	    	{ 'text' : 'Cancel', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
	    ]);
	   	var upload_complete_buttons = ([
	    	{ 'text' : 'Done', 'onclick' : 'something', 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
	    	{ 'text' : 'Cancel', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
	    ]);
	   	var create_album_buttons = ([
	    	{ 'text' : 'Done', 'onclick' : 'something', 'class_name' : 'c_modal_buttons waves-effect waves-light btn green lighten-2 modal-action' },
	    	{ 'text' : 'Cancel', 'onclick' : '', 'class_name' : 'c_modal_buttons black-text waves-effect waves-grey lighten-4 btn white lighten-5 modal-action modal-close' }
	    ]);
	    return (
	    	<div className="c_my_account_upgrade">


	    		/*** create album modal */
    		    <Modal
            		id="create_album_modal"
            		title="Create Album"
            		content={create_album}
            		buttons={create_album_buttons} />

            	/*** new upload or album modal */
    		    <Modal
            		id="new_upload_album_modal"
            		title="New"
            		content={new_upload_album} />

            	/*** new upload or album or artist modal */
    		    <Modal
            		id="new_upload_album_artist_modal"
            		title="New"
            		content={new_upload_album_artist} />

            	/*** add new artist modal */
    		    <Modal
            		id="add_new_artist"
            		title="New Artist"
            		content={new_artist}
            		buttons={create_album_buttons} />

            	/*** new upload or album or artist modal */
    		    <Modal
            		id="new_upload_album_artist_label_modal"
            		title="New"
            		content={new_upload_album_artist_label} />



	    	</div>
	    );
    }
});

module.exports = MyAccount;
