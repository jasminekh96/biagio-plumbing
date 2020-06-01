import React from 'react';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img8 from '../Images/img8.png';
import img6 from '../Images/img6.png';
import img7 from '../Images/img7.png';

import Slider from 'react-slick';

const Home = () => {
	return (
		<div>
			<div className='header-card'>
				<h1>FREE ESTIMATES</h1>
			</div>
			<div className='row'>
				<div className='column'>
					<img className='homePic' src={img7} alt='Indirect Water Heater' width='100%' />
				</div>
				<div className='column'>
					<img className='homePic' src={img2} alt='Four Zone Boiler with Press Fittings' width='100%' />
				</div>
				<div className='column'>
					<img className='homePic' src={img3} alt='Wall Hanging High Efficiency Heat and Hot Water Unit' width='100%' />
				</div>
			</div>

			{/* <div className='homeContainer'>
				//{' '}
				<Slider className='slider' speed={500} slidesToShow={1} slidesToScroll={1} dots={true}>
					//{' '}
					<div>
						// <img className='homePageImg' src={img1} alt='First slide' />
						//{' '}
					</div>
					//{' '}
					<div>
						// <img className='homePageImg' src={img2} alt='Second slide' />
						//{' '}
					</div>
					//{' '}
					<div>
						// <img className='homePageImg' src={img3} alt='Second slide' />
						//{' '}
					</div>
					//{' '}
					<div>
						// <img className='homePageImg' src={img4} alt='Second slide' />
						//{' '}
					</div>
					//{' '}
					<div>
						// <img className='homePageImg' src={img5} alt='Second slide' />
						//{' '}
					</div>
					//{' '}
					<div>
						// <img className='homePageImg' src={img6} alt='Second slide' />
						//{' '}
					</div>
					//{' '}
				<div> */}
		</div>
	);
};

export default Home;