import React from "react";
import "../components/typewriterEffect";
// import Cards from "../components/card";

const Home = () => {
	return (
		<div>
			<div style={{display: "none"}} id="description_tags">
				<span class="hidden_span"> Earthquakes</span>
				<span class="hidden_span"> Forest Fires</span>
				<span class="hidden_span"> Tornadoes</span>
				<span class="hidden_span"> Data</span>
			</div>
			<div
				style={{
					height: "100vh",
					backgroundColor: "black",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",

				}}>
				<img class="logo" src="https://i.imgur.com/sGzh6rM.png" alt="glob.il" />
				<h1
					style={{
						fontSize: 60,
						fontFamily: "Barlow",
						color: "#968d95",
						width: "99vw",
						textAlign: "center",
						alignItems: "center",
					}}>
					Visualizing
					<div class="typewriter" id="typewriter_div"></div>
				</h1>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "Center",
					alignItems: "center",
					height: "60vh",
				}}>
				<h1
					style={{
						width: "100%",
						fontFamily: "Bebas Neue",
						//fontFamily: "Helvetica Neue",
						color: "black",
						// backgroundColor: "white",
						borderColor: "black",
						borderWidth: "10px",
						transparent: true,
						textAlign: "center",
						opacity: 1,
					}}>
					The number of natural disasters has increased by a factor of 5 in the
					last 50 years (World Meteorological Organization, 2021).
				</h1>
			</div>
			<div
				style={{
					height: "100vh",
					backgroundImage: `url("https://content.fortune.com/wp-content/uploads/2020/08/GettyImages-1227473916.jpg?w=1024&h=682")`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "99vw",
						height: "100vh",
						backgroundColor: "rgba(0,0,0,0.65)",
						textAlign: "center",
						position: "center",
					}}>
					<div
						style={{
							position: "center",
							width: "60vw",
							height: "40vh",
							display: "flex",
						}}>
						<p
							style={{
								justifyContent: "center",
								fontSize: "36px",
								fontFamily: "Roboto",
								color: "white",
								textAlign: "center",
								alignItems: "center",
								display: "flex",
								margin: "0",
							}}>
							Glob.Ill is a data visualization website that tracks the history
							and patterns of various natural disasters, including tornadoes,
							forest fires, and earthquakes. It serves to remind us of the force
							of nature, and the consequences we must suffer should we continue
							to damage our planet.
						</p>
					</div>
				</div>
			</div>
			<div
				style={{
					height: "20vh",
					backgroundColor: "steelblue",
					color: "White",
					fontSize: "20px",
				}}>
				<table>
					<tr>
						<td
							style={{
								paddingLeft: "100px",
								paddingTop: "20px",
							}}>
							About us
						</td>
						<td
							style={{
								paddingLeft: "200px",
								paddingTop: "20px",
							}}>
							Donate
						</td>
						<td
							style={{
								paddingLeft: "200px",
								paddingTop: "20px",
							}}>
							Socials
						</td>
					</tr>
					<tr>
						<td
							style={{
								paddingLeft: "100px",
								fontSize: "15px",
							}}>
							Team of 5!
						</td>
						<td
							style={{
								paddingLeft: "200px",
								fontSize: "15px",
							}}>
							Charities
						</td>
						<td
							style={{
								paddingLeft: "200px",
								fontSize: "15px",
							}}>
							Instergram
						</td>
					</tr>
				</table>
				<p
					style={{
						paddingLeft: "35px",
						paddingTop: "20px",
						fontSize: "15px",
						float: "right",
						marginRight: "20px",
					}}>
					Copyright &copy; 2022
				</p>
			</div>
		</div>
	);
};

export default Home;
