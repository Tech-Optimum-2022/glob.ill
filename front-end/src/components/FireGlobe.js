import React, { useEffect } from "react";
import Globe from "react-globe.gl";
import { useRef, useState } from "react";
import fires from "../data/fires.json";
import "../App.css";
import { Slider as Sl } from "@material-ui/core";
import Typography from "@material-ui/Typography";

export default function FireGlobe() {
	const globeEl = useRef();

	useEffect(() => {
		globeEl.current.pointOfView(
			{
				lat: 52,
				lon: -140,
				altitude: 2,
			},
			0
		);
	}, []);

	// default date range to show
	const [yearStart, setYearStart] = useState(1970);
	const [yearEnd, setYearEnd] = useState(2020);
	var [gData, setData] = useState([]); //remember to change back to const

	const data = [];
	for (var fire in fires) {
		// console.log(fires[fire]["LATITUDE"]);
		if (fires[fire]["YEAR"] < yearStart || fires[fire]["YEAR"] > yearEnd) {
			continue;
		} else {
			data.push({
				lat: fires[fire]["LATITUDE"],
				lng: fires[fire]["LONGITUDE"],
				size: fires[fire]["SIZE_HA"] / 1000000,
				color: `rgb(${255},${255 / Math.sqrt(fires[fire]["SIZE_HA"] / 2000)},${
					255 / Math.sqrt(fires[fire]["SIZE_HA"] / 500)
				})`,
			});
		}
	}
	gData = data;

	const [value, setValue] = React.useState([1900, 2020]);
	const handleChange = (Event, newValue) => {
		setValue(newValue);
		setYearStart(newValue[0]);
		setYearEnd(newValue[1]);
	};
	const marks = [
		{
			value: 1900,
			label: "1900",
		},
		{
			value: 2020,
			label: "2020",
		},
	];

	return (
		<div>
			<div class="centered">
				<Typography id="input-slider" gutterBottom>
					Volume
				</Typography>
				<Sl
					getAriaLabel={() => "Temperature range"}
					value={value}
					onChange={handleChange}
					valueLabelDisplay="auto"
					min={1900}
					max={2020}
					marks={marks}
				/>
			</div>

			<Globe
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
				enablePointerInteraction={false}
				pointsData={gData}
				pointAltitude="size"
				pointColor="color"
				ref={globeEl}
			/>
		</div>
	);
}
