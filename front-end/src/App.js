
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/';
import About from './pages/about';
import Interpretation from './pages/interpretation';
import Prevention from './pages/prevention';
import visualize from './pages/visualize';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/interpretation' component={Interpretation} />
		<Route path='/annual' component={Prevention} />
		<Route path='/visualize' component={visualize} />
	</Switch>
	</Router>
);
}

export default App;

