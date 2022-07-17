import React, { useEffect } from "react";
import Globe from "react-globe.gl";
import { useRef, useState } from "react";
import "../App.css";
import tornadoes from "../data/stormData.json";

export default function TornadoGlobe() {
	const data = [];
	var [gData, setData] = useState([]);
	for (var storm in tornadoes) {
		if (false) {
			continue;
		} else {
			data.push({
				pathPoints: [
					[tornadoes[storm]["BEGIN_LAT"], tornadoes[storm]["BEGIN_LON"]],
					[tornadoes[storm]["END_LAT"], tornadoes[storm]["END_LON"]],
				],
			});
		}
	}
	gData = data;
	console.log(gData);

	return (
		<div>
			<Globe
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				pathsData={gData}
				pathPointLat={(p) => p[1]}
				pathPointLng={(p) => p[0]}
				pathDashLength={0.1}
				pathDashGap={0.008}
				pathDashAnimateTime={12000}
			/>
		</div>
	);
}
