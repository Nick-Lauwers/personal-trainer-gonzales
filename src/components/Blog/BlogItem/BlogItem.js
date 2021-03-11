import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './BlogItem.css';

const Article = (props) => {
	return (
		<div className='col-md-4'>
  		<Link to={props.route} className='blog-item'>
  			<div className='image-container-blog-item'>
  				<div className='image-overlay-blog-item'></div>
	    		<img src={props.img_src} className='image-blog-item' />

	  			<div className='text-blog-item'>
	  				<div className='date-blog-item'>{props.date}</div>
	  				<h3 className='title-blog-item'>{props.title}</h3>
	  				<div className='summary-blog-item'>{props.summary}</div>
	  			</div>

	  			<div className='angle-container-blog-item'>
  					<FontAwesomeIcon icon='angle-right' 
  													 size='lg' 
  													 className='angle-blog-item' />
  				</div>
	  		</div>
      </Link>
  	</div>
	);
};

export default Article;