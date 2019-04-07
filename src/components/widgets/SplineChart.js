import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, PlotBand, Legend, SplineSeries, Tooltip
} from 'react-jsx-highcharts';


Highcharts.theme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5',
        '#64E572',
        '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        marginBottom: 100
    },
    title: {
        style: {
            color: 'rgb(205, 205, 205)',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: 'rgb(205, 205, 205)',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    yAxis: {
        labels: {
            style: {
                color: 'rgb(205, 205, 205)'
            },
        },
        gridLineColor: 'white',
        gridLineDashStyle:'Dash'
    },
    xAxis: {
        labels: {
            style: {
                color: 'rgb(205, 205, 205)'
            },
        },
        type: 'datetime',
        dateTimeLabelFormats: {
            week: '%b'
        },
        gridLineColor: 'white',
        gridLineDashStyle:'Dash'
    },
};
Highcharts.setOptions(Highcharts.theme);

class SplineChart extends Component {

    constructor(props) {
        super(props);

        this.renderPlotBand = this.renderPlotBand.bind(this);
    }

    renderPlotBand(band, index) {
        const { from, to } = band;
        const id = `${from}-${to}`;
        const color = 'rgba(255, 255, 255, 0.0)';
        return (
            <PlotBand key={id} from={from} to={to} color={color}>
                <PlotBand.Label>{band.label}</PlotBand.Label>
            </PlotBand>
        );
    }

    render() {
        const plotOptions = {
            spline: {
                lineWidth: 3,
                lineColor: 'red',
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: true
                },
                pointInterval: 24 * 3600 * 1000,
                pointerStart: 'MON'
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

                    <Title>{this.props.chartLabel}</Title>


                    <Tooltip valueSuffix="" />

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
                        <SplineSeries name="" data={this.props.chartData} />
                        {bands.map(this.renderPlotBand)}
                    </YAxis>
                </HighchartsChart>


            </div>
        );
    }
}

export default withHighcharts(SplineChart, Highcharts);