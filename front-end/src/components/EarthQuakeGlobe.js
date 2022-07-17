import React, { useEffect } from "react";
import Globe from "react-globe.gl";
import { useRef, useState } from "react";
import "../App.css";
import earthquakes from "../data/earthquakes.json";

export default function Earthquake() {
	const data = [];
	var [gData, setData] = useState([]);
	for (var quake in earthquakes) {
		if (earthquakes[quake]["mag"] < 8) {
			continue;
		} else {
			data.push({
				lat: earthquakes[quake]["latitude"],
				lng: earthquakes[quake]["longitude"],
				maxR: (earthquakes[quake]["mag"] - 7.9) * 10,
				propagationSpeed: (earthquakes[quake]["mag"] - 7.9) * 4,
				repeatPeriod: 1200,
			});
		}
	}
	gData = data;

	const colorInterpolator = (t) => `rgba(255,100,50,${Math.sqrt(1 - t)})`;

	return (
		<div>
			<Globe
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				ringsData={gData}
				ringColor={() => colorInterpolator}
				ringMaxRadius="maxR"
				ringPropagationSpeed="propagationSpeed"
				ringRepeatPeriod="repeatPeriod"
			/>
		</div>
	);
}
