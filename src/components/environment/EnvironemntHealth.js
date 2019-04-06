import React, { Component } from 'react';
import './EnvironemntHealth.css';
import ToggleSwitch from '../widgets/ToggleSwitch';

export default class EngineHours extends Component {
    headerLabel = 'ENVIRONMENT HEALTH';
    constructor(props) {
        super(props)
    }

    createHealthAttributeDiv(label, status) {
        return (
            <div className="health-attr">
                <span className="label label-default attr-label">{label}</span>
                <div className="switch"><ToggleSwitch isChecked={status}/></div>
            </div>
        )
    }
    // TODO: create dynamic list
    createHealthAttributeDivList(envAttrObj){
        for(const prop of envAttrObj){
            this.createHealthAttributeDiv();
        }
    }

    render() {
        const tempAttr = this.props.envHealthStatus.temperatureHealth;
        const pressAttr =  this.props.envHealthStatus.pressureHealth;
        return (
            <div className="col-lg-12 env-health-container">
                <div className="row env-health-header">
                    <div className="col-lg-12"><h4>{this.headerLabel}</h4></div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        {this.createHealthAttributeDiv('INTERMEDIATE TEMPERATURE',tempAttr.intTemp)}
                        {this.createHealthAttributeDiv('DISCHARGE GAS TEMPERATURE', tempAttr.gasTemp)}
                        {this.createHealthAttributeDiv('EMERGENCY STOP', tempAttr.emgStop)}
                    </div>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-5">
                        {this.createHealthAttributeDiv('PRESSURE RATIO', pressAttr.prRatio)}
                        {this.createHealthAttributeDiv('DISCHARGE PRESSURE', pressAttr.disPressure)}
                        {this.createHealthAttributeDiv('SUCTION PRESSURE', pressAttr.sucPressure)}
                    </div>
                </div>
            </div>

        );
    }
}
