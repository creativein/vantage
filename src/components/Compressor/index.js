import React, { Component } from 'react'
import Environment from './Environment'
import StatusCard from './StatusCard'
import EngineCard from './EngineCard'
export default class index extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xl-6">
            <StatusCard/>
          </div>
          <div className="col-xl-6">
            <EngineCard/>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Environment/>
          </div>
        </div>
      </div>
    )
  }
}
