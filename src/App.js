import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Layouts/Header/Header';
import Footer from './components/Layouts/Footer/Footer';
import Home from './components/Home/Home';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Programs from './components/Programs/Programs';
import Nutrition from './components/Nutrition/Nutrition';
import Blog from './components/Blog/Blog';
import Article from './components/Article/Article';
import Contact from './components/Contact/Contact';

import * as ROUTES from './constants/routes';

import './App.css';

library.add(fab, faInfoCircle, faAngleRight);

const routes = [
  {id: 1, component: Home, path: ROUTES.HOME, hero_title: 'Elizabeth Wright', hero_text: 'Since day one, my priority has always been to help people transform themselves. Even as my schedule has become increasingly busy over time, I’m committed to offering the best service I can in the online training world. Whether your goal is to build muscle, reduce body fat, or simply find some structure in your training, I can help.', hero_img_src: 'https://images.unsplash.com/photo-1597216174311-cb8bf6e6ef9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80', hero_links: [{id: 1, title: 'Testimonials', path: ROUTES.TESTIMONIALS}, {id: 2, title: 'Contact', path: ROUTES.CONTACT}]},
  {id: 2, component: Testimonials, path: ROUTES.TESTIMONIALS, hero_title: 'Testimonials', hero_text: "Read what some of Elizabeth's clients have to say.", hero_img_src: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80', hero_links: [{id: 1, title: 'Contact Elizabeth', path: ROUTES.CONTACT}]},
  {id: 3, component: Gallery, path: ROUTES.GALLERY, hero_title: 'Gallery', hero_text: "Take a look at Elizabeth's latest photo shoot.", hero_img_src: 'https://images.unsplash.com/photo-1595098802403-16c863281a12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', hero_links: [{id: 1, title: 'Contact Elizabeth', path: ROUTES.CONTACT}]},
  {id: 4, component: Programs, path: ROUTES.PROGRAMS, hero_title: 'Programs', hero_text: "I’ve created these training programs for you to follow with ease, regardless of what your goal may be.", hero_img_src: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1583&q=80', hero_links: [{id: 1, title: 'Contact Elizabeth', path: ROUTES.CONTACT}]},
  {id: 5, component: Nutrition, path: ROUTES.NUTRITION, hero_title: 'Nutrition', hero_text: "Read Elizabeth's views on proper nutrition.", hero_img_src: 'https://images.unsplash.com/photo-1514995428455-447d4443fa7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80', hero_links: [{id: 1, title: 'Contact Elizabeth', path: ROUTES.CONTACT}]},
  {id: 6, component: Blog, path: ROUTES.BLOG, hero_title: 'Fitness Insights', hero_text: "Keep up to date with Elizabeth's unique take on all things fitness.", hero_img_src: 'https://images.unsplash.com/photo-1595264544581-1ec3c9014f6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80', hero_links: [{id: 1, title: 'Contact Elizabeth', path: ROUTES.CONTACT}]},
  {id: 7, component: Article, path: ROUTES.ARTICLE, hero_title: 'Blog Title No. 6', hero_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', hero_img_src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80', hero_links: []}
];

const App = () => {
  const routeList = routes.map((route) => {
    const Component = route.component;

    return (
      <Route key={route.id}
             exact path={route.path}
             render={props => (<Component {...props}
                                          hero_title={route.hero_title}
                                          hero_text={route.hero_text}
                                          hero_img_src={route.hero_img_src}
                                          hero_links={route.hero_links} />)} />
    );
  });

  return (
    <Router>
      <Header />
      {routeList}
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;