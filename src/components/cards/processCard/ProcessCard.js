import React from 'react';
import "./ProcessCard.css";

const ProcessCard = ({header, text}) => {
    return (
        <div className="process-card">
            <h3>Consultation</h3>
            <p>Get in touch with an experienced member of our team to discuss your property need.</p>
        </div>
    );
};

export default ProcessCard;