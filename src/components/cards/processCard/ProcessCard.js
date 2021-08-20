import React from 'react';
import "./ProcessCard.css";

const ProcessCard = ({header, text}) => {
    return (
        <div className="process-card">

            <div className="radio-btn">
                <div><img src={require("../../../static/images/radio-btn.png").default} alt=""/></div>
                <div className="connect">
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            <div>
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default ProcessCard;