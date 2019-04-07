/**
 * Compressor Container 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CompressorStatus from '../components/compressor/CompressorStatus';
import Engine from '../components/engine/Engine';
import EnvironmentHealth from '../components/environment/EnvironemntHealth';
import Chart from '../components/charts/Chart';
class Compressor extends Component {
    state = {
    }

    componentDidMount() {
        // axios.get()
        //     .then(res => {

        //     })
        //     .catch(err => {
        //     });
    }

    render() {
        return (


            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <CompressorStatus
                            temp={this.props.compressorStat.temperature}
                            pressure={this.props.compressorStat.pressure}
                            isRunning={this.props.compressorStat.isRunning} />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5">
                        <Engine
                            engineHours={this.props.engineStat.engineHours}
                            oilPressure={this.props.engineStat.oilPressure}
                            engineSpeed={this.props.engineStat.engineSpeed} />

                    </div>

                </div>

                <div className="row env-container-main">
                    <EnvironmentHealth envHealthStatus={this.props.envStat} />
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <Chart chartProps={this.props.chartProps.machineRuntime} />
                    </div>

                    <div className="col-lg-2"></div>
                    <div className="col-lg-5">
                        <Chart chartProps={this.props.chartProps.tempProfile} />
                    </div>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const mapStateToProps = state => {
    return {
        compressorStat: state.compressorStatus,
        engineStat: state.engineStatus,
        envStat: state.envHealth,
        chartProps: state.chartData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Compressor);