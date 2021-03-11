import React from 'react';

import Hero from '../Layouts/Hero/Hero';
import ProgramItem from './ProgramItem/ProgramItem';

import './Programs.css';

const programs = [
	{id: 1, title: "Men's 4-Day Training Program", price: '$14.99', img_src:'https://images.unsplash.com/photo-1551984427-6d77a1918093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1553&q=80', description: 'The ideal intermediate program. My 4-day split is a classic upper/lower rotation that sets you up for quality gains by focusing on both strength and hypertrophy. Easy to run by those with hectic schedules, you’ll find everything you need to make the progress you want in the gym right here.'},
	{id: 2, title: "Men's 4-Day Training Program", price: '$14.99', img_src:'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', description: 'The ideal intermediate program. My 4-day split is a classic upper/lower rotation that sets you up for quality gains by focusing on both strength and hypertrophy. Easy to run by those with hectic schedules, you’ll find everything you need to make the progress you want in the gym right here.'},
	{id: 3, title: "Men's 4-Day Training Program", price: '$14.99', img_src:'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', description: 'The ideal intermediate program. My 4-day split is a classic upper/lower rotation that sets you up for quality gains by focusing on both strength and hypertrophy. Easy to run by those with hectic schedules, you’ll find everything you need to make the progress you want in the gym right here.'},
];

const Programs = (props) => {
	const programList = programs.map((program) =>
		<ProgramItem key={program.id}
								 title={program.title}
								 price={program.price}
								 img_src={program.img_src}
								 description={program.description} />
	);

	return (
		<>
			<Hero hero_title={props.hero_title}
						hero_text={props.hero_text}
						hero_img_src={props.hero_img_src}
	          hero_links={props.hero_links} />

		  <div className='content'>
		  	<ol className='list-programs'>
		  		{programList}
				</ol>
			</div>
	  </>
	);
};

export default Programs;