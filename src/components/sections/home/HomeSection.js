import React from 'react';
import {Link} from "react-router-dom";
import "./Home-section.css"
import {HomeText} from "../../../data/HomeData";

const HomeSection = () => {

    const {header, text, span} = HomeText;
    return (
        <div className="home-section" style={{backgroundColor: "#E5E5E5"}}>
            <div className="home-sub-section">
                <header>
                    <h1>{header} <span>{span}</span>.</h1>
                    <p>
                        {text}
                    </p>

                    <Link to="/quote" className="link">
                        Get a Free Quote
                        <img src={require("../../../static/images/arrow.svg").default} alt=""/>
                    </Link>

                </header>
            </div>
            <div className="home-sub-section image-content">
                <img src={require("../../../static/images/house.png").default} alt=""/>
            </div>
        </div>
    );
};

export default HomeSection;