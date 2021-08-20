import React from 'react';
import "./ProcessSection.css";
import TextHeader from "../../reuseable/text-header/TextHeader";
import OverlapImage from "../overlay/OverlapImage";
import ProcessCard from "../../cards/processCard/ProcessCard";

const ProcessSection = () => {
    const content = [
        {
            header: "Consultations",
            text: "Get in touch with an experienced member of our team to discuss your property need."
        },
        {
            header: "Property Inspection",
            text: "With proper information on your property needs, we’ll take you on an inspection to see available options best suited to your demands."
        },

        {
            header: "Choose Property",
            text: "Once you have inspected properties most suited to your taste, you can make your choice before making payment."
        },

        {
            header: "Pay for Property",
            text: "After making your choice, you can make payment for your preferred property. Our personnel would help with documentation processes."
        },

    ]
    return (
        <div className="process-section">
            <TextHeader text={content.text} header={content.header}/>

            <div className="process-subsection">
                <OverlapImage/>
                <div className="linkage">
                    {content.map(({header, text}, index) => <ProcessCard header={header} text={text} key={index}/>)}
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;