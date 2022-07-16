import React from "react";
import Globe from "react-globe.gl";
import { useRef, useState } from "react";

export default function PopulationGlobe() {
	// Gen random data
	const globeEl = useRef();
	const N = 200;
	const gData = [...Array(N).keys()].map(() => ({
		lat: (Math.random() - 0.5) * 180,
		lng: (Math.random() - 0.5) * 360,
		size: Math.random() / 3,
		color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
	}));
	console.log(gData);

	return (
		<div>
			<Globe
				ref={globeEl}
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				enablePointerInteraction={false}
				pointsData={gData}
				pointAltitude="size"
				pointColor="color"
			/>
		</div>
	);
}
