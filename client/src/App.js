import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/home'
import About from './components/pages/about'

import ContactState from './context/contact/ContactState'
import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<div className="App">
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
						</Switch>
					</div>
				</div>
			</Fragment>
	  </Router>
  );
}

export default App;
