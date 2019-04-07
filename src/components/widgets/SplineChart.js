import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, PlotBand, Legend, SplineSeries, Tooltip
} from 'react-jsx-highcharts';


class SplineChart extends Component {

  constructor (props) {
    super(props);

    this.renderPlotBand = this.renderPlotBand.bind(this);
  }

  renderPlotBand (band, index) {
    const { from, to } = band;
    const id = `${from}-${to}`;
    const color = '#00011F';
    return (
      <PlotBand key={id} from={from} to={to} color={color}>
        <PlotBand.Label>{band.label}</PlotBand.Label>
      </PlotBand>
    );
  }

  render() {
    const plotOptions =  {
      spline: {
        lineWidth: 3,
        line:{
            dashStyle:'Dash'
        },
          states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: true
        },
        pointInterval: 24 * 3600 * 1000
      }
    };

    const bands = [
      { label: '', from: 0, to: 100 },
      { label: '', from: 100, to: 200 },
      { label: '', from: 200, to: 300 },
      { label: '', from: 300, to: 400 },
      { label: '', from: 400, to: 500 }
    ];

    return (
      <div className="chart">
        <HighchartsChart plotOptions={plotOptions}>
          <Chart type="spline" />

          <Title>Machine Runtimes</Title>

          <Legend />

          <Tooltip valueSuffix=""/>

          <XAxis
            minorGridLineWidth={1}
             gridLineWidth={1} 
             dashStyle={'dash-array'}
             type="datetime"
             week={'%e. %b'}
             >
            <XAxis.Title>Day</XAxis.Title>
          </XAxis>

          <YAxis minorGridLineWidth={1} gridLineWidth={1} alternateGridColor={''}>
            <YAxis.Title></YAxis.Title>
            <SplineSeries name="" data={[200, 300, 250, 150, 200, 400, 300]} />
            {bands.map(this.renderPlotBand)}
          </YAxis>
        </HighchartsChart>

       
      </div>
    );
  }
}

export default withHighcharts(SplineChart, Highcharts);