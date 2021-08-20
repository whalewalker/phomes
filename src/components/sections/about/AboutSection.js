import React from 'react';
import "./AboutSection.css";
import OverlapImage from "../overlay/OverlapImage";
import TransparentBtn from "../../reuseable/buttons/TransparentBtn";

const AboutSection = ({header, text, span}) => {

    return (
        <div className="about-section">
            <OverlapImage/>
            <div className="about-subsection">
                <h2>{header} <span>{span}</span>.</h2>
                {text.map((item, index) => <p key={index}>{item}</p>)}
                <div className="link">
                    <TransparentBtn text="Get a Free Quote"/>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;