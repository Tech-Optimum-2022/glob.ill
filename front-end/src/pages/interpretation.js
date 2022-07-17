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
						fontSize: 25,
						width: "80vw",
						color: "black",
						textAlign: "center",
					}}>
					The relationship between global warming and forest fire frequency is a
					positive feedback loop. The higher the temperature, the more likely it
					is for a fire to occur, and when more fires occur, more greenhouse
					gases are emitted into the atmosphere, which causes higher
					temperatures. Thus, efforts to mitigate climate change will also help
					to reduce the risk of forest fires.{" "}
				</p>
			</div>
		</div>
	);
};

export default Interpretation;
