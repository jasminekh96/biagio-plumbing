import React from 'react';
import Picture from '../Images/biagio-icon.png';

const Contact = () => {
	return (
		<div className='contactContainer'>
			<img className='imgContact' src={Picture} />
			<header className='contactHeader'>
				<div className='social'>
					<div className='item-contact'>
						<i className='fas fa-phone-square-alt' />
						<span>631.348.0301</span>
					</div>
					<div className='item-contact'>
						<i className='fas fa-map-marker-alt' />
						<span>Long Island, NY</span>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Contact;
