import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Interpretation from "./pages/interpretation";
import ForestFires from "./pages/forestfires";
import Earthquake from "./pages/earthquake";
import Tornados from "./pages/tornados";
import GlobeGang from "./components/globeGang";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/interpretation" element={<Interpretation />} />
				<Route path="/forestfires" element={<ForestFires />} />
				<Route path="/earthquake" element={<Earthquake />} />
				<Route path="/tornados" element={<Tornados />} />
				<Route path="/globegang" element={<GlobeGang />} />
			</Routes>
		</Router>
	);
}

export default App;
