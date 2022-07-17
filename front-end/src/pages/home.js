import React from "react";

const Home = () => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					backgroundImage: `url("https://i.redd.it/ufgqlfhtc2a61.jpg")`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}>
				<div
					style={{
						position: "center",
						width: "100vw",
						height: "20vh",
						backgroundColor: "rgba(120, 120, 120, 0.75)",
					}}>
					<h1
						style={{
							fontSize: 60,
							fontFamily: "Bebas Neue",
							//fontFamily: "Helvetica Neue",
							color: "black",
							// backgroundColor: "white",
							borderColor: "black",
							borderWidth: "10px",
							transparent: true,
							textAlign: "center",
							opacity: 1,
							marginTop: "40px",
						}}>
						Welcome to our natural disaster maps.
					</h1>
				</div>
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
						fontSize: 60,
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
					Subtitle/something cool/button/statistic
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
							width: "100vw",
							height: "40vh",
						}}>
						<p
							style={{
								justifyContent: "center",
								fontSize: "36px",
								fontFamily: "Roboto",
								color: "white",
							}}>
							text
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
								paddingLeft: "35px",
								paddingTop: "15px",
							}}>
							About us
						</td>
						<td
							style={{
								paddingLeft: "500px",
								paddingTop: "15px",
							}}>
							(fake) socials
						</td>
						<td
							style={{
								paddingLeft: "100px",
								paddingTop: "15px",
							}}>
							Learn More
						</td>
					</tr>
					<tr>
						<td
							style={{
								paddingLeft: "35px",
								paddingTop: "15px",
								fontSize: "15px",
							}}>
							some text about us
						</td>
						<td
							style={{
								paddingLeft: "500px",
								paddingTop: "15px",
								fontSize: "15px",
							}}>
							socials make up!
						</td>
					</tr>
					<tr>
						<td
							style={{
								paddingLeft: "35px",
								paddingTop: "25px",
								fontSize: "15px",
							}}>
							<p>Copyright &copy; 2022</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default Home;
