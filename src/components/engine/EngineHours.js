import React, { Component } from 'react';
import './EngineHours.css';
export default class EngineHours extends Component {
     headerLabel = 'ENGINE HOURS';
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.engineHours = this.props.engineHours;
    }
    createHourView(engHrs){
        const engineHrs = engHrs.toString();
        const engineHoursDivList =[];
        for(const [hr, index] of engineHrs)
        engineHoursDivList.push(<div key={index} className="hour">{hr}</div>);
  
        return engineHoursDivList;
    }
    render() {
        
        return (
            <React.Fragment>
                 <h6 className="engine-hours-label">{this.headerLabel}</h6>
              {this.createHourView(this.engineHours)}
            </React.Fragment>

        )
    }
}
