import React from 'react';
import "./AboutSection.css";
import {Link} from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="image-wrapper">
                <div className="image-wrapper-down">
                    <img src={require("../../../static/images/image-stack1.png").default} alt="about-section"/>
                </div>
                <div className="image-wrapper-top">
                    <img src={require("../../../static/images/image-stack2.png").default} alt="about-section"/>
                </div>
            </div>
            <div className="about-subsection">
                <h2>About <br/> <span>PTwins Homes</span></h2>
                <p>PTwins Home Nigeria Limited is a property consulting company that strives to help its clients find
                    the best housing property for them. Some about us information to help readers relate to the brand
                    better.</p>
                <p> Another line of about us to complete this section of the page. Not sure what should be here yet.</p>
                <div className="link">
                    <Link to="/quote">
                        Get a Free Quote
                        <img src={require("../../../static/images/arrow2.svg").default} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;