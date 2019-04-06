import React, { Component } from 'react'
import Card from "../../elements/Card"
import PressureGauge from "../../elements/PressureGauge"

export default class index extends Component {
  render() {
    return (
      <div>
        <Card cardTitle="ENGINE">
            <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div>
                        <span>ENGINE HOURS</span>

                    </div>

                    <PressureGauge
                      dataRange={ 50 }
                      pressure={ 40 }
                      title="OIL PRESSURE" />
                  </div>
                </div>
            </div>  
        </Card>        
      </div>
    )
  }
}
