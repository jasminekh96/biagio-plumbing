import React from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Contact from '../src/Components/Contact';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Skills from '../src/Components/Skills';
import Reviews from '../src/Components/Reviews';

function App() {
	return (
		<div className='container'>
			<div className='appCont'>
				<Header />
				<div id='Home'>
					<Home />
				</div>
				<div id='Skills'>
					<Skills />
				</div>
				<div id='About'>
					<About />
				</div>
				<div id='Reviews'>
					<Reviews />
				</div>
				<div id='Contact'>
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
