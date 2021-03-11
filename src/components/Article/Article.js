import React from 'react';

import Hero from '../Layouts/Hero/Hero';

const Article = (props) => (
	<>
		<Hero hero_title={props.hero_title}
					hero_text={props.hero_text}
					hero_img_src={props.hero_img_src}
          hero_links={props.hero_links} />

	  <div className='content'>
		  <p>
		  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur 
		  	interdum pretium est a ullamcorper. Nulla dignissim ante nec ipsum 
		  	lacinia, sit amet posuere lectus commodo. Cras tempus ipsum vitae odio 
		  	sollicitudin interdum. Curabitur augue lacus, consectetur et euismod quis, 
		  	gravida eget tellus. Curabitur dictum ipsum ac sem vulputate, maximus 
		  	pellentesque odio ornare. Curabitur sem velit, semper ut nisi sed, rutrum 
		  	sodales turpis. Fusce finibus tincidunt justo, eget tincidunt velit semper 
		  	in. Suspendisse leo urna, congue nec nisl in, faucibus rhoncus nunc. Morbi 
		  	faucibus arcu tincidunt leo semper imperdiet. Morbi vulputate vulputate 
		  	sollicitudin. Ut dapibus odio at libero volutpat lobortis. Quisque cursus 
		  	fermentum rhoncus. Curabitur semper suscipit tellus eu varius. Nunc non 
		  	augue in est molestie commodo non non libero.
		  </p>
		</div>
  </>
);

export default Article;