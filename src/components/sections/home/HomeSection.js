import React from 'react';
import "./Home-section.css"
import {HomeText} from "../../../data/HomeData";
import {Button} from "../../reuseable/buttons/Button";

const HomeSection = () => {

    const {header, text, span} = HomeText;
    return (
        <div className="home-section" style={{background: "#f7fcff"}}>
            <div className="home-sub-section">
                <header>
                    <h1>{header} <span>{span}</span>.</h1>
                    <p>
                        {text}
                    </p>
                    <Button text="Get a Free Quote"/>
                </header>
            </div>
            <div className="home-sub-section image-content">
                <img src={require("../../../static/images/house.png").default} alt=""/>
            </div>
        </div>
    );
};

export default HomeSection;