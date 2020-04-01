import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='headerContainer'>
			<Link className='headerTitle' to='/'>
				<p>Biagio Plumbing and Heating</p>
			</Link>
			<nav className='headerLinks'>
				<NavLink className='styledLink home' to='/'>
					Home
				</NavLink>
				<NavLink className='styledLink about' to='/aboutus'>
					About Us
				</NavLink>
				<NavLink className='styledLink contact' to='/contact'>
					Contact
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
