import React from "react";
import "./TemperatureGauge.css";

const TemperatureGauge = props => {

	// calculate the temperature in % to display the gauge in the div at the right place (min = 0°C, max = 70°C)
	const { temperature } = props;
  const temperaturePrcnt = temperature / props.dataRange * 100;

	return (
		<div className="gradientDisplayDiv">
			<div className="gradientDisplayText">
				<div className="temperatureGaugeTitle">{ props.title }</div>
				<div className="temperatureGaugeTemp">{ Math.round(temperature * 10) / 10 }°C</div>
			</div>
			<div className="temperatureProgress gradientProgressDiv">
				<div
					style={{ marginLeft: `calc(${ temperaturePrcnt }% - 1px)` }}
					className="progressGauge">
					<div className="innerProgressGauge">
					</div>
					<div className="arrow-up"></div>
				</div>
			</div>
		</div>
	);
}

export default TemperatureGauge;
