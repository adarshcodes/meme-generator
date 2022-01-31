import React from "react";
import Logo from "../Images/troll-face.png";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<img src={Logo} alt="logo" className="navbar__logo" />
				<h1 className="navbar__logo-text">Meme Generator</h1>
			</nav>
		);
	}
}

export default Navbar;
