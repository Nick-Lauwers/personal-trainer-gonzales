import React from 'react';

import './Modal.css';

const Modal = (props) => {
	const carouselList = props.images.map((image) => (
		<div key={image.id} 
				 className={`carousel-item 
				 						 ${image === props.images[0] ? 'active' : ''}`}>
			<img src={image.src} className='carousel-image' />
		</div>
	));

	return (
		<div className='modal fade' 
				 id='galleryModal' 
				 tabindex='-1' 
				 role='dialog' 
				 aria-hidden='true'>
		  <div className='modal-dialog' role='document'>
		    <div className='modal-content'>
		      <div className='modal-body'>
		      	<div id='modalCarousel'
		      		 	 className='carousel slide' 
		      		 	 data-ride='carousel'>
		          <div className='carousel-inner'>
		            {carouselList}
		          </div>

		          <a className='carousel-control-prev' 
		          	 href='#modalCarousel' 
		          	 role='button' 
		          	 data-slide='prev'>
		            <span className='carousel-control-prev-icon' 
		            			aria-hidden='true'></span>
		            <span className='sr-only'>Previous</span>
		          </a>

		          <a className='carousel-control-next' 
		          	 href='#modalCarousel' 
		          	 role='button' 
		          	 data-slide='next'>
		            <span className='carousel-control-next-icon' 
		            			aria-hidden='true'></span>
		            <span className='sr-only'>Next</span>
		          </a>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	);
};

export default Modal;