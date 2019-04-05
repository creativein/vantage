import React, { Component } from 'react'
import './MeasureWidget.css';
export default class MeasureWidget extends Component {
    pointer;
    constructor(props) {
        super(props);
        this.pointer = React.createRef();
    }
    componentDidMount() {
        const offset = 1;
        this.pointer.current.style.left = this.props.value + offset + '%';
    }
    render() {


        return (
            <div>
                <h6>{this.props.label} <span className="label label-default">{this.props.value}</span></h6>
                <div id="grad1">
                    <span ref={this.pointer} className="pointer">I</span>
                </div>
            </div>
        )
    }
}