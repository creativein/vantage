 import React, { Component } from 'react'
 import Card from "../../elements/Card"
 import TemperatureGauge from "../../elements/TemperatureGauge"
 import PressureGauge from "../../elements/PressureGauge"

 import Running from "../../../img/others/running.png"
 import Stop from "../../../img/others/stop.png"

 export default class index extends Component {
   render() {
     return (
       <div>
         <Card cardTitle="COMPRESOR STATUS">
            <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <TemperatureGauge
                      dataRange={ 80 }
                      temperature={ 32 }
                      title="TEMPERATURE" />
                    <PressureGauge
                      dataRange={ 40 }
                      pressure={ 10 }
                      title="PRESSURE" />
                  </div>
                  <div className="col-lg-4">
                    <img
                    src={ Running }
                    alt="running"/>
                    <span>RUNNING</span> 
                  </div>  
                </div>
            </div>
        </Card>  
       </div>
     )
   }
 }
 