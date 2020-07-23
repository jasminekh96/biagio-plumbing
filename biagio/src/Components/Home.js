import React from 'react';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img7 from '../Images/img7.png';

const Home = () => {
	return (
		<div>
			<div className='header-card'>
				<h1>FREE ESTIMATES</h1>
				<h1>
					<i className='fas fa-phone-square-alt' />
					<a href='tel:+6313480301'>631.348.0301</a>
				</h1>
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
