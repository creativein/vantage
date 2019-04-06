import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

import VantageLogo from "../../img/navigation/VantageLogo.png";
import navIcon1 from "../../img/navigation/navIcon1.png";
import navIcon2 from "../../img/navigation/navIcon2.png";
import navIcon3 from "../../img/navigation/navIcon3.png";
import navIcon4 from "../../img/navigation/navIcon4.png";
import navIcon5 from "../../img/navigation/navIcon5.png";

class NavigationBar extends Component {
	state = {
		activeLink: "power"
	}

	changeActiveLink = ( linkName ) => {
		this.setState({ activeLink: linkName })
	}

	componentDidMount(){
		let currentPath = window.location.pathname;
		if(currentPath !== "/"){
			this.setState({
				activeLink: currentPath.slice(1)
			});
		}
	}

	render(){
		const { activeLink } = this.state;
		// Set the Active Link
		const powerRoomStatus = activeLink === "power" ? "navItemActive" : "";
		// const waterRoomStatus = activeLink === "water" ? "navItemActive" : "";
		const waterHeatingRoomStatus = activeLink === "water-heating" ? "navItemActive" : "";
		const hvacRoomStatus = activeLink === "hvac" ? "navItemActive" : "";
		const alarmsRoomStatus = activeLink === "alarms" ? "navItemActive" : "";

		return (
			<div className="navBarDiv">
				<div className="navLogo">
					<img
						className="vantageLogo"
						src={ VantageLogo } alt=""/>
				</div>

				<Link
					to="/power"
					onClick={ () => this.changeActiveLink("power")} >
					<div className={ `navItemDiv ${ powerRoomStatus }` }>
						<img
							className="navImage"
							src={ navIcon3 }
							alt=""/>
						<h4 className="navTitle">POWER</h4>
					</div>
				</Link>

				<Link to="/compressor"
					onClick={ () => this.changeActiveLink("compressor")} >
					<div className={ `navItemDiv ${ hvacRoomStatus }` } >
						<img
							className="navImage"
							src={ navIcon4 }
							alt=""/>
						<h4 className="navTitle">COMPRESSOR</h4>
					</div>
				</Link>

				<Link to="/alarms"
					onClick={ () => this.changeActiveLink("alarms")}  >
					<div  className={ `navItemDiv ${ alarmsRoomStatus }` } >
						<img
							className="navImage"
							src={ navIcon5 }
							alt=""/>
						<h4 className="navTitle">ALARMS</h4>
					</div>
				</Link>
			</div>
		)
	}
}

export default NavigationBar;
