import React from 'react';
import {ReactComponent as ArrowClick} from "../../static/images/arrow.svg";
import {NavBtnLink} from "../../components/reusable/navbar/NavbarElements";
import {arrowStyled} from "../../components/inlineStyled";
import "./home.scss";
import AboutSection from "../../components/reusable/aboutSection/AboutSection";
import {Span} from "../../components/styledElement";

const Home = () => {
    return (
        <div className="pthomes_container">
            <section className="pthomes_wrapper">
            <div className="pthomes_text_section">
                <h1>Let’s Talk About Your Next <Span>Property</Span>.</h1>
                <p>PTwins Home Nigeria Limited is a property consulting company that strives to help its clients find
                    the best housing property for them. </p>
                <NavBtnLink to="/quote">
                    Get a Free Quote
                    <ArrowClick style={arrowStyled}/>
                </NavBtnLink>
            </div>
            <div className="pthomes_image_section">
                <img src={require("../../static/images/house.png").default}  alt="home"/>
            </div>
            </section>

            <AboutSection/>

        </div>
    );
};

export default Home;