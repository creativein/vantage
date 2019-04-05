import React, { Component } from 'react';
import MeasureWidget from '../widgets/MeasureWidget';
import './CompressorStatus.css';
export default class CompressorStatus extends Component {
  runStatusLabel = 'Not Running';
  statusUrl = '';
  runningUrl = '/images/running.png';
  stoppedUrl = '/images/stop.png';
  headerLabel = 'Compressor Status';
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.statusUrl = this.props.isRunning ? this.runningUrl : this.stoppedUrl  ;
    this.runStatusLabel = this.props.isRunning? 'Running': 'Not Running';

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps){

  }
  render() {
    return (
      <React.Fragment>
        <div className="row compressor-header">
          <h4>{this.headerLabel}</h4>
        </div>
        <div className="row compressor-status">
          <div className="col-lg-10">
            <MeasureWidget label="Temperature" value={this.props.temp} />
            <MeasureWidget label="Pressure" value={this.props.pressure} />
          </div>
          <div className="col-lg-2">
            <img src={this.statusUrl} alt="Running Status"></img>
            <span>{this.runStatusLabel}</span>
          </div>
        </div>
      </React.Fragment>

    )
  }
}
