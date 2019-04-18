import React from 'react';
import "./HealthToggle.css";

const HealthToggle = props => {
    const { state, label } = props;
    let warningClass = (state !== "GOOD") ? "false" : "";
    return (
        <div className="health">
            <span className="label">{ label }</span>
            <div className="switch">
                <span className={`slider ${warningClass} `}></span>
            </div>
        </div>
    );
}

export default HealthToggle;
