/**
 * Compressor Container 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CompressorStatus from '../components/compressor/CompressorStatus';
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
                <div className="col-lg-6">
                    <CompressorStatus temp={this.props.compressorStat.temperature} pressure={this.props.compressorStat.pressure} />
                </div>
                <div className="col-lg-6">
                
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
        compressorStat: state.compressorStatus
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Compressor);