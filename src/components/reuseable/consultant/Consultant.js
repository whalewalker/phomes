import React from 'react';
import {Button} from "../buttons/Button";
import "../../sections/footer/Footer.css"

const Consultant = () => {
    return (
        <div className="consultation">
            <h1>Get Your Free <span className="text-secondary">Consultation</span></h1>
            <p>Discuss with our property experts to help you find the best options suited to your exact needs. Click to get Started. </p>
            <Button text="Get a Free Quote"/>
        </div>
    );
};

export default Consultant;