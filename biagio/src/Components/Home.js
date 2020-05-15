import React from 'react';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';

import Slider from 'react-slick';

const Home = () => {
	return (
		<div className='homeContainer'>
			<Slider className='slider' speed={500} slidesToShow={1} slidesToScroll={1} dots={true}>
				<div>
					<img className='homePageImg' src={img1} alt='First slide' />
				</div>
				<div>
					<img className='homePageImg' src={img2} alt='Second slide' />
				</div>
				<div>
					<img className='homePageImg' src={img3} alt='Second slide' />
				</div>
				{/* <div>
					<img className='homePageImg' src={img4} alt='Second slide' />
				</div>
				<div>
					<img className='homePageImg' src={img5} alt='Second slide' />
				</div>
				<div>
					<img className='homePageImg' src={img6} alt='Second slide' />
				</div> */}
			</Slider>
		</div>
	);
};

export default Home;
