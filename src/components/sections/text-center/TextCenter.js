import React from 'react';
import {Link} from "react-router-dom";
import "./Text-center.css"

const TextCenter = ({header, span, text}) => {
    return (
        <div className="container">
            <div className="text-center">
                <>
                    <h1>{header} <span>{span}</span></h1>
                    <p>{text}</p>

                    <Link to="/quote" className="link">
                        Get a Free Quote
                        <img src={require("../../../static/images/arrow.svg").default} alt=""/>
                    </Link>
                </>
            </div>
        </div>

    );
};

export default TextCenter;