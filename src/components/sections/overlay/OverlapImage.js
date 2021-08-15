import React from 'react';
import "./Overlay.css";

const OverlapImage = () => {
    return (
        <div className="image-wrapper">
            <div className="image-wrapper-down">
                <img src={require("../../../static/images/image-stack1.png").default} alt="about-section"/>
            </div>
            <div className="image-wrapper-top">
                <img src={require("../../../static/images/image-stack2.png").default} alt="about-section"/>
            </div>
        </div>
    );
};

export default OverlapImage;