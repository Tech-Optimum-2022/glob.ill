import React, { useEffect } from "react";
import Globe from "react-globe.gl";
import { useRef, useState, useMemo } from "react";
import "../App.css";
import tornadoes from "../data/Storms.json"; //Storms is longer and stormData is shorter

export default function TornadoGlobe() {
	const data = [];
	var [gData, setData] = useState([]);
	for (var storm in tornadoes) {
		const startLon = tornadoes[storm]["BEGIN_LAT"];
		const startLat = tornadoes[storm]["BEGIN_LON"];
		const endLon = tornadoes[storm]["END_LON"];
		const endLat = tornadoes[storm]["END_LAT"];
		if (!startLon || !startLat || !endLat || !endLon) {
			continue;
		} else {
			data.push([
				[tornadoes[storm]["BEGIN_LAT"], tornadoes[storm]["BEGIN_LON"], 0],
				[tornadoes[storm]["END_LAT"], tornadoes[storm]["END_LON"], 0],
			]);
		}
	}
	gData = data;
	console.log(gData);

	// const [rise, setRise] = useState(false);
	// const N_PATHS = 1;
	// const MAX_POINTS_PER_LINE = 20000;
	// const MAX_STEP_DEG = 1;
	// const MAX_STEP_ALT = 0.015;
	// const gData = useMemo(
	// () =>
	// 	[...Array(N_PATHS).keys()].map(() => {
	// let lat = (Math.random() - 0.5) * 90;
	// let lng = (Math.random() - 0.5) * 360;
	// let alt = 0;

	// return [
	// 	[lat, lng, alt],
	// 	...[
	// 		...Array(Math.round(Math.random() * MAX_POINTS_PER_LINE)).keys(),
	// 	].map(() => {
	// 		lat += (Math.random() * 2 - 1) * MAX_STEP_DEG;
	// 		lng += (Math.random() * 2 - 1) * MAX_STEP_DEG;
	// 		alt += (Math.random() * 2 - 1) * MAX_STEP_ALT;
	// 		alt = Math.max(0, alt);

	// 		return [lat, lng, alt];
	// 	}),
	// 			// ];
	// 		}),
	// 	[]
	// );

	return (
		<div>
			<Globe
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
				backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
				pathsData={gData}
				pathColor={() => ["rgba(0,0,255,0.6)", "rgba(255,0,0,0.6)"]}
				pathDashLength={0.0}
				pathDashGap={0}
				pathDashAnimateTime={100000}
				pathPointAlt={0.01}
				pathTransitionDuration={100}
				pathStroke={5}
			/>
		</div>
	);
}
