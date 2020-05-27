import React from 'react';
import Picture from '../Images/biagio-icon.png';

const Contact = () => {
	return (
		<div className='contactContainer'>
			<img className='imgContact' src={Picture} />
			<header className='contactHeader'>
				<div className='social'>
					<div className='item-contact'>
						<div>Click to call and get your free estimate now! </div>
						<i className='fas fa-phone-square-alt' />
						<a href='tel:+6313480301'>631.348.0301</a>
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
