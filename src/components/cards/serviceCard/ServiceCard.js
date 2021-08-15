import React from 'react';
import "./ServiceCard.css";

const ServiceCard = () => {
    return (
        <div className="service-card">
            <div className="img-container">
                <img src={require("../../../static/images/integrity.png").default} alt="integrity"/>
            </div>

            <h4>Land & <br/> House Sales</h4>
            <p>Looking to buy land? We have you covered with different purchase options and locations, depending on your
                budget.</p>
        </div>
    );
};

export default ServiceCard;