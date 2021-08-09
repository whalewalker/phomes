import React from 'react';
import "./about_section.scss"
import {Span} from "../../styledElement";
import {BtnLink} from "../../styledElement";
import {ReactComponent as Arrow2} from "../../../static/images/arrow2.svg";
import {arrowStyled} from "../../inlineStyled";

const AboutSection = ({header, paragraphs, button, images}) => {
    return (
        <div className="about_section_container">
            <div className="about_section_image">
                <div className="image-stack  image-stack__item--bottom">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={require("../../../static/images/image-stack1.png").default} alt="image-stack"/>
                </div>
                <div className="image-stack  image-stack__item--top">
                    <img src={require("../../../static/images/image-stack2.png").default} alt="image-stack"/>
                </div>
            </div>
            <div className="about_section_text">
                <h2>About <Span>PTwins Homes</Span> </h2>
                <p>PTwins Home Nigeria Limited is a property consulting company that strives to help its clients find the best housing property for them. Some about us information to help readers relate to the brand better.</p>
                <p> Another line of about us to complete this section of the page. Not sure what should be here yet.</p>
                <BtnLink to="/quote">
                  Learn More
                    <Arrow2 style={arrowStyled}/>
                </BtnLink>
            </div>
        </div>
    );
};

export default AboutSection;