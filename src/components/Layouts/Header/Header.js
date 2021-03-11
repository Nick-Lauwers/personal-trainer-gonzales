import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

import userDocumentScrollThrottled, { useOnClickOutside } from '../../../hooks';
import * as ROUTES from '../../../constants/routes';

import './Header.css';

const Header = () => {
	const [shouldShowShadow, setShouldShowShadow] = useState(false);

	const MINIMUM_SCROLL = 80;
	const TIMEOUT_DELAY = 400;

	userDocumentScrollThrottled(callbackData => { 
		const { previousScrollTop, currentScrollTop } = callbackData;
		const isScrolledDown = previousScrollTop < currentScrollTop;
		const isMinimumScrolled =  currentScrollTop > MINIMUM_SCROLL;

		setShouldShowShadow(currentScrollTop > 0);

	})

	const shadowStyle = shouldShowShadow ? 'collapsed-header' : 'expanded-header';


	const [active, setActive] = useState(false);


	const [menuOpen, setMenuOpen] = useState(false);
	const showMenu = () => setMenuOpen(!menuOpen);





	return (
		<>
			<div className={`header ${shadowStyle}`}>
				<div className='col-header'>
					<Link to={ROUTES.HOME} className='logo-header'>E. Wright</Link>
				</div>

				<div className='col-header'>
					<div onClick={showMenu}>
						<Burger active={active} 
										setActive={setActive}
										menuOpen={menuOpen} />
					</div>

					<div className={active ? 'links-header active' : 'links-header'}>
						<Link to={ROUTES.TESTIMONIALS}>Testimonials</Link>
						<Link to={ROUTES.CONTACT}>Contact Elizabeth</Link>
					</div>
				</div>
		  </div>

		  <Menu menuOpen={menuOpen} />
	 	</>
  );
};

export default Header;