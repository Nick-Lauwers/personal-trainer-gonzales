import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../Layouts/Hero/Hero';
import BlogItem from './BlogItem/BlogItem';

import { ARTICLE } from '../../constants/routes';

import './Blog.css';

const articles = [
  {id: 1, date: '12 November, 2020', title: 'Blog Title No. 6', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img_src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80', route: ARTICLE},
  {id: 2, date: '11 November, 2020', title: 'Blog Title No. 5', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img_src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', route: ARTICLE},
  {id: 3, date: '10 November, 2020', title: 'Blog Title No. 4', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img_src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80', route: ARTICLE},
  {id: 4, date: '9 November, 2020', title: 'Blog Title No. 3', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img_src: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', route: ARTICLE},
  {id: 5, date: '8 November, 2020', title: 'Blog Title No. 2', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img_src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', route: ARTICLE},
  {id: 6, date: '7 November, 2020', title: 'Blog Title No. 1', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img_src: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', route: ARTICLE}
];

const Blog = (props) => {
	const articleList = articles.map((article) => (
		<BlogItem key={article.id} 
						 	date={article.date} 
						 	title={article.title} 
						 	summary={article.summary} 
						 	img_src={article.img_src}
						 	route={article.route} />
	));

	return (
		<>
			<Hero hero_title={props.hero_title}
						hero_text={props.hero_text}
						hero_img_src={props.hero_img_src}
	          hero_links={props.hero_links} />
		  <div className='blog'>
			  <div className='row'>
			  	{articleList}
			  </div>
			</div>
	  </>
	);
};

export default Blog;