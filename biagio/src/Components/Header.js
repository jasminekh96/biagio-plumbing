import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<div className='headerContainer'>
			<div className='headerSections'>
				<p className='headerTitle'>Biagio Plumbing and Heating</p>
			</div>
			<nav className='headerLinks'>
				<Link
					className='styledLink home'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}
					to='Home'
					activeClassName='selected'>
					Home
				</Link>
				<Link
					className='styledLink home'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}
					to='Skills'
					activeClassName='selected'>
					Skills
				</Link>
				<Link
					className='styledLink home'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}
					to='About'
					activeClassName='selected'>
					About
				</Link>
				<Link
					className='styledLink home'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}
					to='Reviews'
					activeClassName='selected'>
					Reviews
				</Link>
				<Link
					className='styledLink contact'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}
					to='Contact'
					activeClassName='selected'>
					Contact
				</Link>
			</nav>
		</div>
	);
};

export default Header;
