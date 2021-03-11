import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../../../constants/routes';

import './Menu.css';

const links = [
  {id: 1, name: 'Testimonials', route: ROUTES.TESTIMONIALS},
  {id: 2, name: 'Gallery', route: ROUTES.GALLERY},
  {id: 3, name: 'Programs', route: ROUTES.PROGRAMS},
  {id: 4, name: 'Nutrition', route: ROUTES.NUTRITION},
  {id: 5, name: 'Blog', route: ROUTES.BLOG},
  {id: 6, name: 'Contact', route: ROUTES.ARTICLE}
];

const linkList = links.map((link) => (
  <li key={link.id}>
    <Link to={link.route}>
      <span className='link-text-menu'>{link.name}</span>
    </Link>
  </li>
));

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.menuOpen,
      seen: true
    }
  }

  render() {
    return (
      <div className={this.props.menuOpen ? 'menu active' : 'menu'}
           style={this.props.height}>
      	<ol className='links-menu'>
          {linkList}
        </ol>
      </div>
    );
  };
};

export default Menu;