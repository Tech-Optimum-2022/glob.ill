import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/interpretation" activeStyle>
						Interpretation
					</NavLink>
					<NavLink to="/prevention" activeStyle>
						Prevention
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
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
