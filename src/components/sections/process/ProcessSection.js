import React from 'react';
import "./ProcessSection.css";
import TextHeader from "../../reuseable/text-header/TextHeader";
import OverlapImage from "../overlay/OverlapImage";
import ProcessCard from "../../cards/processCard/ProcessCard";

const ProcessSection = () => {
    const content = {
        header: "Our Process",
        text: "To help make it an easy process, we have designed a four step process that helps you get a property suited to your taste faster."
    }
    return (
        <div className="process-section">
            <TextHeader text={content.text} header={content.header}/>

            <div className="process-subsection">
                <OverlapImage/>
                <div className="linkage">
                    <ProcessCard/>
                    <ProcessCard/>
                    <ProcessCard/>
                    <ProcessCard/>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;