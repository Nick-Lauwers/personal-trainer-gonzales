import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../Layouts/Hero/Hero';
import Modal from './Modal/Modal';

import './Gallery.css';

const images = [
  {id: 1, src: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=983&q=80', slide_to: '0'},
  {id: 2, src: 'https://images.unsplash.com/photo-1597216174311-cb8bf6e6ef9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', slide_to: '1'},
  {id: 3, src: 'https://images.unsplash.com/photo-1595269140819-6f33a38a4fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', slide_to: '2'},
  {id: 4, src: 'https://images.unsplash.com/photo-1595264544581-1ec3c9014f6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', slide_to: '3'}
];

const Gallery = (props) => {
	const imageList = images.map((image) => (
		<img key={image.id} 
				 src={image.src} 
				 data-slide-to={image.slide_to} 
				 data-target='#modalCarousel' />
	));

	return (
		<>
			<Hero hero_title={props.hero_title}
						hero_text={props.hero_text}
						hero_img_src={props.hero_img_src}
	          hero_links={props.hero_links} />

		  <div className='content'>
		  	<div className='gallery' 
		  			 data-toggle='modal'
		  			 data-target='#galleryModal'>
				    {imageList}
				</div>

				<div className='gallery-buttons buttons'>
			  	<Link to='#' className='button'>
		    		<span className='button-text'>Load More</span>
	        </Link>
	      </div>
		  </div>

			<Modal images={images}/>
	  </>
	);
};

export default Gallery;