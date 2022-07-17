// import React, { useEffect } from "react";
// import Globe from "react-globe.gl";
// import { useRef, useState } from "react";
// import fires from "../data/fires.json";
// import "../App.css";

// export default function PopulationGlobe() {
// 	const globeEl = useRef();

// 	useEffect(() => {
// 		globeEl.current.pointOfView(
// 			{
// 				lat: 52,
// 				lon: -140,
// 				altitude: 2,
// 			},
// 			0
// 		);
// 	}, []);

// 	// default date range to show
// 	const [yearStart, setYearStart] = useState(1970);
// 	const [yearEnd, setYearEnd] = useState(2020);
// 	var [gData, setData] = useState([]); //remember to change back to const

// 	const data = [];
// 	for (var fire in fires) {
// 		// console.log(fires[fire]["LATITUDE"]);
// 		if (fires[fire]["YEAR"] < yearStart || fires[fire]["YEAR"] > yearEnd) {
// 			continue;
// 		} else {
// 			data.push({
// 				lat: fires[fire]["LATITUDE"],
// 				lng: fires[fire]["LONGITUDE"],
// 				size: fires[fire]["SIZE_HA"] / 1000000,
// 				color: `rgb(${255},${255 / Math.sqrt(fires[fire]["SIZE_HA"] / 2000)},${
// 					255 / Math.sqrt(fires[fire]["SIZE_HA"] / 500)
// 				})`,
// 			});
// 		}
// 	}
// 	gData = data;

// 	return (
// 		<div>
// 			<Globe
// 				globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
// 				enablePointerInteraction={false}
// 				pointsData={gData}
// 				pointAltitude="size"
// 				pointColor="color"
// 				ref={globeEl}
// 			/>
// 			<Slider />
// 		</div>
// 	);
// }

// function Slider() {
// 	const [year, setYear] = useState(1700);
// 	//setYear(year + 1);
// 	return (
// 		<div>
// 			<input
// 				style={{
// 					width: "500px",
// 					paddingLeft: "500px",
// 				}}
// 				max={2022}
// 				type="range"
// 				onChange={setYear}
// 			/>
// 			<h3
// 				style={{
// 					fontFamily: "sans-serif",
// 					color: "green",
// 				}}>
// 				170044444
// 			</h3>
// 		</div>
// 	);
// }
