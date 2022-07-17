import React from "react";

const Interpretation = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "300px",
			}}>
			<div
				style={{
					display: "inline-block",
					width: "20vw",
					height: "300px",
					paddingLeft: "30px",
				}}>
				<h1>Forest Fires</h1>
				<img
					src="https://media.canadianunderwriter.ca/uploads/2022/05/wild-fire-and-burning-meadow-grass-picture-id872645958.jpg"
					style={{
						width: "200px",
						height: "200px",
					}}></img>
			</div>
			<div
				style={{
					display: "inline-block",
					width: "75vw",
					height: "300px",
					backgroundColor: "grey",
				}}>
				<h6
					style={{
						fontSize: 20,
					}}>
					Forest fires are catastrophic events that destroy millions of acres of
					forest and their ecosystems and devastate neighbouring communities.
					They occur in the summer months as their necessary ingredients include
					fuel, ignition, and hot, dry weather. In recent years, forest fires
					are becoming more frequent, and studies show that the major
					contributing factor is climate change. The combination of higher
					temperatures, frequent lightning strikes that start the fires, and dry
					winds to fan the flames greatly exacerbates the risk of forest fires.
					A recent study predicts that western Canada will see a 50% increase in
					the number of days with fire-starting conditions, and eastern Canada
					will see a 200% to 300% increase in this kind of “fire weather.”
					Another study predicts that twice as much forest area per year will be
					burned in Canada by the end of the century compared to the recent
					past.
				</h6>
			</div>
		</div>
	);
};

export default Interpretation;
