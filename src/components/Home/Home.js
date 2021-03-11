import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../Layouts/Hero/Hero';
import * as ROUTES from '../../constants/routes';

import './Home.css';

const Home = (props) => (
	<>
		<Hero hero_title={props.hero_title}
					hero_text={props.hero_text}
					hero_img_src={props.hero_img_src}
          hero_links={props.hero_links} />

	  <div className='content'>
		  <div className='row'>
		  	<div className='col-md text-container-home'>
		  		<div className='text-home'>
		  		  <h2 className='title-home'>Meet Elizabeth</h2>

    				<p className='description-home'>
    					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
    					dapibus ante ac turpis elementum, quis consequat quam dapibus. 
    					Nulla tempus aliquam dolor sit amet sodales. Cras vel leo nunc. 
    					Nam quis commodo lorem, placerat dapibus risus. Sed a dolor a 
    					ipsum laoreet convallis. Vivamus mauris arcu, convallis vitae 
    					elementum eu, condimentum et risus. Suspendisse suscipit 
    					lobortis tincidunt. Suspendisse potenti. Vivamus at tellus in 
    					diam rutrum mollis ac porttitor enim. Aenean eros mauris, ornare 
    					sit amet ante ut, sodales tincidunt quam. Cras at aliquet risus. 
    					Sed at venenatis nunc, quis euismod nisl. Praesent consequat 
    					metus ut molestie congue. Pellentesque habitant morbi tristique 
    					senectus et netus et malesuada fames ac turpis egestas. Nullam 
    					pretium scelerisque blandit.
    				</p>

    				<div className='buttons'>
  		    		<Link to={ROUTES.HOME} className='button'>
  			    		<span className='button-text'>Learn More</span>
  		        </Link>
  	        </div>
          </div>
  			</div>

  			<div className='col-md-1'></div>
		  	
		  	<div className='col-md-5'>
		  		<div className='image-container-home'>
			  		<img src='https://images.unsplash.com/photo-1595264544581-1ec3c9014f6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
			  				 className='image-home' />
		  		</div>
		  	</div>
		  </div>
		</div>
  </>
);

export default Home;