import React, { Component } from 'react'
import './GaugeSeries.css';
import Highcharts from "highcharts";

import {
  HighchartsChart,
  withHighcharts,
  Series,
  XAxis,
  YAxis,
  Tooltip
} from "react-jsx-highcharts";


require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);


const plotOptions = {
  plotBackgroundColor: null,
  plotBackgroundImage: null,
  plotBorderWidth: 0,
  plotShadow: false
};

const paneOptions = {
  startAngle: -120,
  endAngle: 120,
  background: [
    {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [[0, "#FFF"], [1, "#333"]]
      },
      borderWidth: 0,
      outerRadius: "109%"
    },
    {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [[0, "#333"], [1, "#FFF"]]
      },
      borderWidth: 1,
      outerRadius: "107%"
    },
    {
      backgroundColor: "#DDD",
      borderWidth: 0,
      outerRadius: "105%",
      innerRadius: "103%"
    }
  ]
};
//<Tooltip padding={10} hideDelay={250} shape="square" />
const GraphRender = ({ data }) => {
  return (
    <div className="gauge-empty">
      <div className="no-data">Data Unavaialble</div>
      <HighchartsChart
        chart={{ type: "gauge" }}
        
        pane={paneOptions}
      >
        <Tooltip padding={10} hideDelay={250} shape="square" />

        <XAxis />

        <YAxis
          id="myAxis"
          min={0}
          max={100}
          minorTickInterval="auto"
          minorTickWidth={1}
          minorTickLength={10}
          minorTickPosition="inside"
          minorTickColor="#666"
          tickPixelInterval={30}
          tickWidth={2}
          tickPosition="inside"
          tickLength={10}
          tickColor="#666"
          labels={{
            step: 2,
            rotation: "auto"
          }}
          title={{
            text: ""
          }}
          plotBands={[
            {
              from: 0,
              to: 60,
              color: "#55BF3B" // green
            },
            {
              from: 60,
              to: 80,
              color: "#DDDF0D" // yellow
            },
            {
              from: 80,
              to: 100,
              color: "#DF5353" // red
            }
          ]}
        >
          <Series id="series" name="Value" data={[80]} type="gauge" />
        </YAxis>
      </HighchartsChart>
    </div>
  );
};

const Gauge = ({ data }) => <GraphRender data={data} />;

export default withHighcharts(Gauge, Highcharts);
