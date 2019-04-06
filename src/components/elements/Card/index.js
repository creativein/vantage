import React from "react";
import "./Card.css";

const Card = props => {

	if(props.cardTitle){
		return (
			<div className="card">
				<div className="cardHeader">
					<div className="cardTitle">{ props.cardTitle }</div>
				</div>

				<div className="cardBody">
					{ props.children }
				</div>
			</div>
		)
	}

	else {
		return (
			<div className="card">
				<div className="cardBodyWitoutHeader">
					{ props.children }
				</div>
			</div>
		)
	}
}

export default Card;
