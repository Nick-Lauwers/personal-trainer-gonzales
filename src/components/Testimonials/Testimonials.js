import React from 'react';

import Hero from '../Layouts/Hero/Hero';
import TestimonialItem from './TestimonialItem/TestimonialItem';

import './Testimonials.css';

const testimonials = [
	{id: 1, name: 'Caleb Murphy', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac facilisis erat. Maecenas nec purus quis tellus eleifend hendrerit. Sed vel porta dolor. Cras ornare facilisis viverra. Duis ullamcorper agna sed risus tempus tristique. Nullam eget libero efficitur, auctor quam ut, luctus turpis. Nulla sagittis dolor et lorem aliquam, et dictum nibh tincidunt. In molestie nibh ipsum, id mollis metus accumsan aliquet. Quisque viverra luctus quam et tristique. Quisque tincidunt ex quis nibh faucibus, convallis rutrum ligula vulputate. Mauris blandit gravida justo, id pellentesque mi consectetur a. Vestibulum molestie, erat at interdum faucibus, massa urna tincidunt metus, vitae sagittis nisl nunc eget felis. Morbi scelerisque vitae lectus porttitor bibendum. Donec pulvinar rhoncus sodales. Sed ornare dictum risus ut blandit.'},
	{id: 2, name: 'Jessica Delray', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac facilisis erat. Maecenas nec purus quis tellus eleifend hendrerit. Sed vel porta dolor. Cras ornare facilisis viverra. Duis ullamcorper agna sed risus tempus tristique. Nullam eget libero efficitur, auctor quam ut, luctus turpis. Nulla sagittis dolor et lorem aliquam, et dictum nibh tincidunt. In molestie nibh ipsum, id mollis metus accumsan aliquet. Quisque viverra luctus quam et tristique. Quisque tincidunt ex quis nibh faucibus, convallis rutrum ligula vulputate. Mauris blandit gravida justo, id pellentesque mi consectetur a.'},
	{id: 3, name: 'Katherine Tacchini', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac facilisis erat. Maecenas nec purus quis tellus eleifend hendrerit. Sed vel porta dolor. Cras ornare facilisis viverra. Duis ullamcorper agna sed risus tempus tristique. Nullam eget libero efficitur, auctor quam ut, luctus turpis. Nulla sagittis dolor et lorem aliquam, et dictum nibh tincidunt. In molestie nibh ipsum, id mollis metus accumsan aliquet. Quisque viverra luctus quam et tristique. Quisque tincidunt ex quis nibh faucibus, convallis rutrum ligula vulputate. Mauris blandit gravida justo, id pellentesque mi consectetur a.'}
];

const Testimonials = (props) => {
	const testimonialList = testimonials.map((testimonial) =>
		<TestimonialItem key={testimonial.id} 
								 		 name={testimonial.name} 
								 		 content={testimonial.content} />
	);

	return (
		<>
			<Hero hero_title={props.hero_title}
						hero_text={props.hero_text}
						hero_img_src={props.hero_img_src}
	          hero_links={props.hero_links} />

		  <div className='content'>
		  	<ol className='list-testimonials'>
		  		{testimonialList}
		  	</ol>
			</div>
	  </>
	);
};

export default Testimonials;