import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as ROUTES from '../../constants/routes';

import './Contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			phone: '',
			message: '',
			errors: ''
		};
	};

	handleChange(event) {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		const { name, email, phone, message } = this.state;

		return (
			<div className='hero'>
				<div className='row'>
					<div className='col-md image-container-hero'>
						<img src='https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80' 
								 className='image-hero' />

						<div className='social-container social-container-hero'>
			        <a href='#' target='_blank' rel='noopener noreferrer'>
			          <div className='social'>
			          	<FontAwesomeIcon icon={['fab', 'instagram']}
			          									 className='social-icon' />
			          </div>
			        </a>

			        <a href='#' target='_blank' rel='noopener noreferrer'>
			          <div className='social'>
			          	<FontAwesomeIcon icon={['fab', 'facebook-f']}
			          									 className='social-icon' />
			          </div>
			        </a>
			      </div>
					</div>

					<div className='col-md text-container-hero'>
						<div className='text-hero'>
							<div className='title-container-hero'>
				    		<h1 className='title-hero'>Contact Elizabeth</h1>
				    		<span className='watermark-hero'>Contact Elizabeth</span>
				    	</div>

			    		<form className='form-contact'>
				    		<input type='text'
				    					 name='name'
				    					 placeholder='Name'
				    					 value={name}
				    					 onChange={this.handleChange} />

				    		<input type='email'
				    					 name='email'
				    					 placeholder='Email'
				    					 value={email}
				    					 onChange={this.handleChange} />

				    		<input type='tel'
				    					 name='phone'
				    					 placeholder='Phone Number'
				    					 value={phone}
				    					 onChange={this.handleChange} />

				    		<textarea name='message'
				    							placeholder='Message'
				    							value={message}
				    					 		onChange={this.handleChange} />

				    		<div>
					    		<button type='submit' className='submit'>
					    			<span className='submit-text'>Contact Elizabeth</span>
					    		</button>
					    	</div>
							</form>
						</div>
					</div>
				</div>

				<svg className='svg'></svg>

				<div className='disclosure'>
			  	<FontAwesomeIcon icon='info-circle' size='lg' />

					<span>
						I am committed to ensuring the safety of my clients through safe COVID 
						practices.
					</span>
				</div>
			</div> 
		);
	};
};

export default Contact;