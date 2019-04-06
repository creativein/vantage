 import React, { Component } from 'react'
 import Card from "../../elements/Card"
 import TemperatureGauge from "../../elements/TemperatureGauge"


 export default class index extends Component {
   render() {
     return (
       <div>
         <Card cardTitle="COMPRESSORT STATUS">
            <div className="container">
                <div className="row">
                    <TemperatureGauge
                        dataRange={ this.props.dataRange }
                        temperature={ this.props.minTemperature }
                        title="MIN TEMPERATURE" />
                </div>
            </div>
        </Card>  
       </div>
     )
   }
 }
 