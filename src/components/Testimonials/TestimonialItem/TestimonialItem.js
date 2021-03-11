import React from 'react';

import './TestimonialItem.css';

const TestimonialItem = (props) => (
	<li className='testimonial'>
		<h2 className='title-testimonial'>{props.name}</h2>
		<p className='content-testimonial'>{props.content}</p>
	</li>
);

export default TestimonialItem;