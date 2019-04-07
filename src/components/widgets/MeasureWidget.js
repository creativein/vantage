import React, { Component } from 'react'
import './MeasureWidget.css';
import classNames from 'classnames';


export default class MeasureWidget extends Component {
    pointer;
    constructor(props) {
        super(props);
        this.pointer = React.createRef();
    }
    componentDidMount() {
        const offset = 1;
        this.pointer.current.style.left = this.props.value  + '%';
    }
    render() {
        var widgetBarClasses = classNames(
            'widget',
            {
                'gradient-1': !this.props.gradType || this.props.gradType === '1',
                'gradient-2': this.props.gradType === '2'
            }
        );

        return (
            <div className="widget-container">
                <h6>{this.props.label}
                    <span className="label label-default label-val">{this.props.value}  {this.props.unit}</span>
                </h6>
                <div className={widgetBarClasses}>
                    <span ref={this.pointer} className="pointer"></span>
                </div>
            </div>
        )
    }
}