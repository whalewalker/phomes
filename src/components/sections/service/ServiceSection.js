import React from 'react';
import "./ServiceSection.css";
import ServiceCard from "../../cards/serviceCard/ServiceCard";
import {Link} from "react-router-dom";

const ServiceSection = () => {
    return (
        <div className="service-section">
            <header>
                <h2>Our Services</h2>
                <p>Our services are designed to solve all of your Property related needs.</p>

                <div className="service-cards">
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                </div>
                <Link to="/quote">
                    Get a Free Quote
                    <img src={require("../../../static/images/arrow2.svg").default} alt=""/>
                </Link>
            </header>
        </div>
    );
};

export default ServiceSection;