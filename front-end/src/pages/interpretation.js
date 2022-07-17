import React from "react";
import Car from "../components/carousel";

const Interpretation = () => {
	return (
		<div>
			<Car></Car>
			<div
				style={{
					backgroundColor: "gray",
					height: "20vh",
					display: "flex",
					justifyContent: "center",
				}}>
				<h1
					style={{
						alignItems: "center",
						fontSize: 60,
						fontFamily: "Fantasy",
						color: "black",
						display: "flex",
					}}>
					Take Action!
				</h1>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "auto",
					backgroundColor: "#AAAAAA",
				}}>
				<p
					style={{
						fontSize: 15,
						fontFamily: "Roboto",
						width: "60vw",
						color: "black",
						textAlign: "center",
					}}>
					Global warming and the frequency of natural disasters are often
					positively correlated. Higher temperatures make it more likely for a
					fire to occur, and more fires occurring results in more greenhouse
					gases emitted into the atmosphere. Studies also show that the
					conditions for severe thunderstorms that lead to tornados are
					occurring more frequently as the global average temperature rises.
					Thus, efforts to mitigate climate change will also help to reduce the
					risk of many natural disasters.<br></br>
					<br></br> In the meantime, it's important to bring attention to these
					impacts. By clicking on the Forest Fires, Tornados, and Earthquake
					pages, you can view the locations of some of the natural disasters
					that occured in the last century. This project uses forest fire data
					from Amberwatch, tornado data from the NOAA storm events database, and
					earthquake data from the USGS earthquake catalog.
				</p>
			</div>
		</div>
	);
};

export default Interpretation;
