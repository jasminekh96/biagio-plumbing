import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';

const Home = () => {
	return (
		<div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'>
			<ol class='carousel-indicators'>
				<li data-target='#carouselExampleIndicators' data-slide-to='0' class='active' />
				<li data-target='#carouselExampleIndicators' data-slide-to='1' />
				<li data-target='#carouselExampleIndicators' data-slide-to='2' />
			</ol>
			<div class='carousel-inner'>
				<div class='carousel-item active'>
					<img class='d-block w-100' src={img1} alt='First slide' />
				</div>
				<div class='carousel-item'>
					<img class='d-block w-100' src={img2} alt='Second slide' />
				</div>
				<div class='carousel-item'>
					<img class='d-block w-100' src='...' alt='Third slide' />
				</div>
			</div>
			<a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
				<span class='carousel-control-prev-icon' aria-hidden='true' />
				<span class='sr-only'>Previous</span>
			</a>
			<a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
				<span class='carousel-control-next-icon' aria-hidden='true' />
				<span class='sr-only'>Next</span>
			</a>
		</div>
		// <Carousel>
		// 	<Carousel.Item>
		// 		<img className='d-block w-100' src={img1} alt='First slide' />
		// 		<Carousel.Caption>
		// 			<h3>First slide label</h3>
		// 		</Carousel.Caption>
		// 	</Carousel.Item>
		// 	<Carousel.Item>
		// 		<img className='d-block w-100' src={img2} alt='Third slide' />
		// 		<Carousel.Caption>
		// 			<h3>Second slide label</h3>
		// 		</Carousel.Caption>
		// 	</Carousel.Item>
		// </Carousel>
		// // <div>
		// // 	<div className='projectsContainer'>
		// // 		<div className='projectsCard'>
		// // 			<h1 className='projectsTitle'> N/A</h1>
		// // 			<p className='projectDesc'>Biagio Plumbing.......</p>
		// // 			<div className='keyImages' />
		// // 			<a className='buttonLink'>Contact Us</a>
		// // 		</div>
		// // 	</div>
		// // </div>
	);
};

export default Home;
