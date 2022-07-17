import Carousel from "react-bootstrap/Carousel";

function Car() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://wallpaperaccess.com/full/2142408.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www-cdn.eumetsat.int/files/2021-06/wildfires_smoke_adobe_web.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="http://www.noaa.gov/sites/default/files/styles/square_width_325/public/legacy/image/2019/Jun/PHOTO-tornado-traer-iowa-by-brad-goddard-orion-illinois-07062016-960x960-square.jpg?itok=YO_KIlAM"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Car;

// const Interpretation = () => {
// 	return (
// 		<div>
// 			<div
// 				style={{
// 					display: "flex",
// 					width: "100%",
// 					height: "300px",
// 				}}>
// 				<div
// 					style={{
// 						display: "block",
// 						width: "20vw",
// 						height: "300px",
// 						paddingLeft: "30px",
// 					}}>
// 					<h1>Earthquakes</h1>
// 					<img
// 						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BoOP4LVxvQYDxU7weWef1OFpFeSTJQkE2A&usqp=CAU"
// 						alt=""
// 						style={{
// 							width: "200px",
// 							height: "200px",
// 						}}></img>
// 				</div>
// 				<div
// 					style={{
// 						display: "flex",
// 						width: "75vw",
// 						height: "300px",
// 					}}>
// 					<h6
// 						style={{
// 							fontSize: 20,
// 							fontFamily: "Roboto",
// 							marginLeft: "10px",
// 						}}>
// 						text
// 					</h6>
// 				</div>
// 			</div>
// 			<div
// 				style={{
// 					display: "flex",
// 					width: "100%",
// 					height: "300px",
// 				}}>
// 				<div
// 					style={{
// 						display: "block",
// 						width: "20vw",
// 						height: "300px",
// 						paddingLeft: "30px",
// 					}}>
// 					<h1>Forest Fires</h1>
// 					<img
// 						src="https://media.canadianunderwriter.ca/uploads/2022/05/wild-fire-and-burning-meadow-grass-picture-id872645958.jpg"
// 						alt=""
// 						style={{
// 							width: "200px",
// 							height: "200px",
// 						}}></img>
// 				</div>
// 				<div
// 					style={{
// 						display: "flex",
// 						width: "75vw",
// 						height: "300px",
// 					}}>
// 					<h6
// 						style={{
// 							fontSize: 20,
// 							fontFamily: "Roboto",
// 							marginLeft: "10px",
// 						}}>
// 						Forest fires are catastrophic events that destroy millions of acres
// 						of forest and their ecosystems and devastate neighbouring
// 						communities. They occur in the summer months as their necessary
// 						ingredients include fuel, ignition, and hot, dry weather. In recent
// 						years, forest fires are becoming more frequent, and studies show
// 						that the major contributing factor is climate change. The
// 						combination of higher temperatures, frequent lightning strikes that
// 						start the fires, and dry winds to fan the flames greatly exacerbates
// 						the risk of forest fires. A recent study predicts that western
// 						Canada will see a 50% increase in the number of days with
// 						fire-starting conditions, and eastern Canada will see a 200% to 300%
// 						increase in this kind of “fire weather.” Another study predicts that
// 						twice as much forest area per year will be burned in Canada by the
// 						end of the century compared to the recent past.
// 					</h6>
// 				</div>
// 			</div>
// 			<div
// 				style={{
// 					display: "flex",
// 					width: "100%",
// 					height: "300px",
// 				}}>
// 				<div
// 					style={{
// 						display: "block",
// 						width: "20vw",
// 						height: "300px",
// 						paddingLeft: "30px",
// 					}}>
// 					<h1>Tornadoes</h1>
// 					<img
// 						src="http://www.noaa.gov/sites/default/files/styles/square_width_325/public/legacy/image/2019/Jun/PHOTO-tornado-traer-iowa-by-brad-goddard-orion-illinois-07062016-960x960-square.jpg?itok=YO_KIlAM"
// 						style={{
// 							width: "200px",
// 							height: "200px",
// 						}}></img>
// 				</div>
// 				<div
// 					style={{
// 						display: "flex",
// 						width: "75vw",
// 						height: "300px",
// 					}}>
// 					<h6
// 						style={{
// 							fontSize: 20,
// 							fontFamily: "Roboto",
// 							marginLeft: "10px",
// 						}}>
// 						tornados
// 					</h6>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Interpretation;
