import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Interpretation from "./pages/interpretation";
import Prevention from "./pages/prevention";
import Visu from "./pages/visu";
import Fires from "./pages/forestfires";
import Earthquake from "./pages/earthquake";
import Tornado from "./pages/tornado";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/interpretation" element={<Interpretation />} />
				<Route path="/prevention" element={<Prevention />} />
				<Route path="/visu" element={<Visu />} />
				<Route path="/forestfires" element={<Fires />} />
				<Route path="/earthquake" element={<Earthquake />} />
				<Route path="/tornado" element={<Tornado />} />
			</Routes>
		</Router>
	);
}

export default App;
