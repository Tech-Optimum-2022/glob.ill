import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav
				style={{
					//position: "fixed",
					width: "100vw",
				}}>
				<Bars />

				<NavMenu>
					<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/interpretation" activeStyle>
						Interpretation
					</NavLink>
					<NavLink to="/earthquake" activeStyle>
						Earthquakes
					</NavLink>
					<NavLink to="/forestfires" activeStyle>
						Forest Fires
					</NavLink>
					<NavLink to="/tornados" activeStyle>
						Tornados
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
