import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Interpretation from "./pages/interpretation";
import Prevention from "./pages/prevention";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/interpretation" component={Interpretation} />
				<Route path="/prevention" component={Prevention} />
			</Routes>
		</Router>
	);
}

export default App;
