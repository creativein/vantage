/**
 * Compressor Container 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CompressorStatus from '../components/compressor/CompressorStatus';
import Engine from '../components/engine/Engine';
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



            <div className="row">
                <div className="col-lg-5">
                    <CompressorStatus
                        temp={this.props.compressorStat.temperature}
                        pressure={this.props.compressorStat.pressure}
                        isRunning={this.props.compressorStat.isRunning} />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                    <Engine 
                     engineHours= {this.props.engineStat.engineHours}
                     oilPressure={this.props.engineStat.oilPressure}
                     engineSpeed={this.props.engineStat.engineSpeed}/>

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
        engineStat: state.engineStatus
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Compressor);