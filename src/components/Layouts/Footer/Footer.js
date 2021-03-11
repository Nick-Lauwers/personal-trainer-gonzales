import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as ROUTES from '../../../constants/routes';

import './Footer.css';

const Footer = () => (
	<>
		<svg className='svg'></svg>

		<div className='image-container-footer'>
	  	<div className='image-overlay-footer'></div>

		  <img src='https://images.unsplash.com/photo-1595269140819-6f33a38a4fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
		  		 className='image-footer' />

		 	<div className='title-container-footer'>
		 		<h3 className='title-footer'>Work With Elizabeth</h3>

		 		<div className='subtitle-footer'>
		 			Call Elizabeth today to schedule a private session
		 		</div>

		 		<Link to={ROUTES.HOME} className='button button-transparent'>
	    		<span className='button-text'>Contact</span>
	      </Link>
		 	</div>
		</div>

		<div className='details-container-footer'>
			<h3 className='logo-footer'>Elizabeth Wright</h3>

			<div className='row details-footer'>
				<div className='col-md-2'>
					<span className='link-title-footer'>SITEMAP</span>

					<ol className='links-footer'>
						<li><Link to={ROUTES.TESTIMONIALS}>Testimonials</Link></li>
						<li><Link to={ROUTES.PROGRAMS}>Programs</Link></li>
						<li><Link to={ROUTES.NUTRITION}>Nutrition</Link></li>
						<li><Link to={ROUTES.CONTACT}>Contact</Link></li>
					</ol>
				</div>

				<div className='col-md-2'>
					<span className='link-title-footer'>CONTACT</span>

					<div className='contact-footer'>
						555.555.5555 <br/>
						elizabeth@wright.com
					</div>
				</div>

				<div className='col-md-2'>
					<span className='link-title-footer'>ADDRESS</span>

					<div className='contact-footer'>
						Elizabeth Wright <br/>
						1662 Newcomb Avenue <br/>
						San Francisco, CA 94124
					</div>
				</div>

				<div className='col-md-6'>
					<div className='social-container social-container-footer'>
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
			</div>

			<div className='copyright-footer'>
				Elizabeth Wright is a real estate salesperson affiliated with Compass. 
				Compass is a licensed real estate broker and abides by equal housing 
				opportunity laws. All material presented herein is intended for 
				informational purposes only. Information is compiled from sources deemed 
				reliable but is subject to errors, omissions, changes in price, 
				condition, sale, or withdrawal without notice. No statement is made as 
				to accuracy of any description. All measurements and square footages are 
				approximate. This is not intended to solicit property already listed. 
				Nothing herein shall be construed as legal, accounting or other 
				professional advice outside the realm of real estate brokerage.
				<br /><br />
		  	Website developed by Nick Lauwers. (C) Copyright 2020
		  </div>
		</div>
	</>
)

export default Footer;