import React, { useEffect } from "react";
import Globe from "react-globe.gl";
import { useRef, useState, useMemo } from "react";
import "../App.css";
import tornadoes from "../data/Storms.json"; //Storms is longer and stormData is shorter
import { Slider as Sl } from "@material-ui/core";

export default function TornadoGlobe() {
	const [yearStart, setYearStart] = useState(1970);
	const [yearEnd, setYearEnd] = useState(2022);

	const data = [];
	var [gData, setData] = useState([]);
	for (var storm in tornadoes) {
		const startLon = tornadoes[storm]["BEGIN_LAT"];
		const startLat = tornadoes[storm]["BEGIN_LON"];
		const endLon = tornadoes[storm]["END_LON"];
		const endLat = tornadoes[storm]["END_LAT"];
		if (
			!startLon ||
			!startLat ||
			!endLat ||
			!endLon ||
			parseInt(tornadoes[storm]["BEGIN_DATE"].substr(6, 9)) < yearStart ||
			parseInt(tornadoes[storm]["BEGIN_DATE"].substr(6, 9)) > yearEnd
		) {
			continue;
		} else {
			data.push([
				[tornadoes[storm]["BEGIN_LAT"], tornadoes[storm]["BEGIN_LON"], 0],
				[tornadoes[storm]["END_LAT"], tornadoes[storm]["END_LON"], 0],
			]);
		}
	}
	gData = data;

	const [value, setValue] = React.useState([1900, 2022]);
	const handleChange = (Event, newValue) => {
		setValue(newValue);
		setYearStart(newValue[0]);
		setYearEnd(newValue[1]);
	};

	return (
		<div>
			<div class="centered"></div>
			<div class="centered">
				<Sl
					style={{
						color: "rgb(180,0,0)",
					}}
					getAriaLabel={() => "Temperature range"}
					value={value}
					onChange={handleChange}
					valueLabelDisplay="on"
					min={1940}
					max={2022}
				/>
			</div>
			<Globe
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
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
