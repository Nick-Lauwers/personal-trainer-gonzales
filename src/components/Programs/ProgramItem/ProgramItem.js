import React from 'react';
import { Link } from 'react-router-dom';

import './ProgramItem.css'

const ProgramItem = (props) => ( 
	<li>
	  <div className='program'>
	  	<div className='text-program col-program'>
	  		<div className='text-content-program'>
		  		<h2 className='title-program'>{props.title}</h2>
		  		<div className='price-program'>{props.price}</div>
		  		<p>{props.description}</p>
		  		
		  		<div className='buttons'>
			  		<Link to='#' className='button'>
			    		<span className='button-text'>Add to Cart</span>
		        </Link>
		      </div>
	      </div>
	  	</div>

	  	<div className='col-program'>
	  		<div className='image-container-program'>
	  			<img src={props.img_src} className='image-program' />
	  		</div>
	  	</div>
	  </div>
	</li>
)

export default ProgramItem;