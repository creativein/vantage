import React from "react";
import "./ClientLogin.css";
import Ionicon from "react-ionicons";


const ClientLogin = props => {

	return (
		<div className="clientLoginDiv">
			<div className="clientNameDiv">
				<h4 className="clientName">Site: <span className="clientNameRed">{ props.clientName }</span></h4>
			</div>
			<div className="logoutBtnDiv">
				<button className="logoutBtn">
					<span className="btnText">LOGOUT</span>
					<Ionicon icon="md-log-out" fontSize="35px" color="#fff"/>
				</button>
			</div>
		</div>
	)
}

export default ClientLogin;
