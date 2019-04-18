import React, { Component } from 'react'
import Card from "../../elements/Card"
import HealthToggle from "../../elements/HealthToggle";

export default class index extends Component {
  render() {
    return (
      <div>
        <Card cardTitle="ENVIRONMENT HEALTH">
            <div className="container">
                <div className="row">
                  <HealthToggle label="INTERMEDIATE TEMP" state="GOOD"/>
                  <HealthToggle label="PRESSURE RATIO" state="WARNING"/>
                  <HealthToggle label="DISCHARGE GAS TEMP" state="GOOD"/>
                  <HealthToggle label="DISCHARGE PRESSURE" state="GOOD"/>
                  <HealthToggle label="EMERGENCY STOP" state="GOOD"/>
                  <HealthToggle label="SUCTION PRESSURE" state="WARNING"/>
                </div>
            </div>
        </Card>            
      </div>
    )
  }
}
