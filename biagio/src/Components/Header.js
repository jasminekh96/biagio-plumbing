import React from 'react';
import styled from 'styled-components';
import biagioIcon from '../../src/Images/biagio-icon.png';

const Container = styled.div`
	height: 10vh;
	background: #4682b4;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'PT Sans', sans-serif;
`;

const HeaderTitle = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: white;
`;
const Image = styled.img`
width : 10px,
height : 10px`;

const Header = () => {
	return (
		<Container>
			<HeaderTitle>Biagio Plumbing and Heating</HeaderTitle>
			{/* <div>
				<Image src={biagioIcon} alt='Biagio Icon' />
			</div> */}
		</Container>
	);
};

export default Header;
