import React from 'react';
import "./AboutSection.css";
import OverlapImage from "../overlay/OverlapImage";
import TransparentBtn from "../../reuseable/buttons/TransparentBtn";

const AboutSection = () => {
    return (
        <div className="about-section">
            <OverlapImage/>
            <div className="about-subsection">
                <h2>About <br/> <span>PTwins Homes</span></h2>
                <p>PTwins Home Nigeria Limited is a property consulting company that strives to help its clients find
                    the best housing property for them. Some about us information to help readers relate to the brand
                    better.</p>
                <p> Another line of about us to complete this section of the page. Not sure what should be here yet.</p>
                <div className="link">
                    <TransparentBtn text="Get a Free Quote"/>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;