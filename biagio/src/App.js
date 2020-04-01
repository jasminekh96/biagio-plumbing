import React from 'react';
import './App.css';
import Header from '../src/Components/Header';
import Contact from '../src/Components/Contact';
import Home from '../src/Components/Home';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='container'>
			<div className='appCont'>
				<Header />
				<Route exact path='/' component={Home} />
				<Route exact path='/contact' component={Contact} />
			</div>
		</div>
	);
}

export default App;
