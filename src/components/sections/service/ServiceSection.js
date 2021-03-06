import React from 'react';
import "./ServiceSection.css";
import ServiceCard from "../../cards/serviceCard/ServiceCard";
import TextHeader from "../../reuseable/text-header/TextHeader";
import TransparentBtn from "../../reuseable/buttons/TransparentBtn";
import {Bar} from "../../DefaultStyledComponent";

const ServiceSection = () => {
    const content = {
        header: "Our Services",
        text: "Our services are designed to solve all of your Property related needs."
    }
    return (
        <div className="service-section">
           <TextHeader text={content.text} header={content.header}/>
                <div className="service-cards">
                    <ServiceCard/>
                    <Bar/>
                    <ServiceCard/>
                    <Bar/>
                    <ServiceCard/>
                </div>
                <div className="link">
                    <TransparentBtn text="Get a Free Quote"/>
                </div>
        </div>
    );
};

export default ServiceSection;