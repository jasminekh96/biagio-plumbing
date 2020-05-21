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
			<div class='row'>
				<div class='column'>
					<img src={img7} alt='Snow' width='100%' />
					{/* <img src={img4} width='100%' />
				<img src={img6} width='100%' /> */}
				</div>
				<div class='column'>
					<img src={img2} alt='Forest' width='100%' />
				</div>
				<div class='column'>
					<img src={img3} alt='Mountains' width='100%' />
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
			<div className='aboutCard'>
				<p>
					Based in Central Islip and travels through Suffolk and Nassau County. Small family business since 1986. We
					take all charge cards and give senior citizen discount. We also take emergency calls all hours of the day,
					Saturday and Sunday are for emergency calls only. Price varies depending on job. Small jobs, big jobs,
					commercial jobs, we do it all!
				</p>
			</div>
		</div>
	);
};

export default Home;
