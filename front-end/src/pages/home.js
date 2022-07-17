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
					height: "60vh",
					backgroundColor: "steelblue",
				}}>
				<p>about section</p>
			</div>
		</div>
	);
};

export default Home;
