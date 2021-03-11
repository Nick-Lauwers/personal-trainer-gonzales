import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as ROUTES from '../../../constants/routes';

import './Hero.css';

const Hero = (props) => {
	const linkList = props.hero_links.map((link) => (
    <Link key={link.id} to={link.path} className='button'>
      <span className='button-text'>{link.title}</span>
    </Link>
  ));

	return (
		<div className='hero'>
			<div className='row'>
				<div className='col-md image-container-hero'>
					<img src={props.hero_img_src} className='image-hero' />

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
			    		<h1 className='title-hero'>{props.hero_title}</h1>
			    		<span className='watermark-hero'>{props.hero_title}</span>
			    	</div>

			    	<p className='description-hero'>
							{props.hero_text}
						</p>

						<div className='buttons'>
							{linkList}
						</div>
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

export default Hero;