import React, { Component } from 'react';
import MeasureWidget from '../widgets/MeasureWidget';
import EngineHours from './EngineHours';
import './Engine.css';
import GaugeSeries from '../widgets/GaugeSeries';
export default class Engine extends Component {
    headerLabel = 'ENGINE';
    engineHours = 0;
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.engineHours = this.props.engineHours;
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }

    render() {

        return (
            <React.Fragment>
                <div className="row engine-header">
                    <div className="col-lg-12">
                        <h4>{this.headerLabel}</h4>
                    </div>
                </div>
                <div className="row engine-hours-container">
                    <div className="col-lg-10">
                        <EngineHours engineHours={this.props.engineHours} />
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
                <div className="row engine-status">
                    <div className="col-lg-10 engine-status-col">
                        <MeasureWidget label="Oil Pressure" value={this.props.oilPressure} unit="Bar" gradType="2" />
                    </div>
                    {/* <div >
                        <GaugeSeries value={this.props.engineSpeed} />
                       
                    </div>
                     */}
                </div>
            </React.Fragment>

        )
    }
}
