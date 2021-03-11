import React from 'react';

import Hero from '../Layouts/Hero/Hero';

const Nutrition = (props) => (
	<>
		<Hero hero_title={props.hero_title}
					hero_text={props.hero_text}
					hero_img_src={props.hero_img_src}
          hero_links={props.hero_links} />
  </>
);

export default Nutrition;