import React, { useEffect } from "react";
import Globe from "react-globe.gl";
import { useRef, useState } from "react";
import "../App.css";
import earthquakes from "../data/earthquakes.json";
import { Slider as Sl } from "@material-ui/core";

export default function Earthquake() {
	const [yearStart, setYearStart] = useState(1970);
	const [yearEnd, setYearEnd] = useState(2022);

	const data = [];
	var [gData, setData] = useState([]);
	for (var quake in earthquakes) {
		if (
			earthquakes[quake]["mag"] < 8 ||
			parseInt(earthquakes[quake]["time"].substr(0, 4)) < yearStart ||
			parseInt(earthquakes[quake]["time"].substr(0, 4)) > yearEnd
		) {
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

	const colorInterpolator = (t) =>
		`rgba(255${Math.sqrt(1 - t)},100,50,${Math.sqrt(1 - t)})`;

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
				ringsData={gData}
				ringColor={() => colorInterpolator}
				ringMaxRadius="maxR"
				ringPropagationSpeed="propagationSpeed"
				ringRepeatPeriod="repeatPeriod"
			/>
		</div>
	);
}
