import React from 'react';
import "./ChooseSection.css";
import {Button} from "../../reuseable/buttons/Button";

const ChooseSection = () => {
    return (
        <div className="choose-section">
            <div className="text-content">
                <h2>Why Choose PTwins Home?</h2>
                <p>Here are some of the reasons why we are the go-to real estate agents for your property investments
                    and needs.</p>

                <div className="link">
                    <Button text="Get a Free Quote"/>
                </div>

            </div>
            <div className="card-section">
                <div>
                    <section className="img-container">
                        <img src={require("../../../static/images/integrity.png").default} alt="integrity"/>
                    </section>

                    <h4>Integrity</h4>
                    <p>Every of our service and process is built on transparency and trust. Thus, you can be sure of
                        clarity accross board.</p>
                </div>
                <div>
                    <section className="img-container">
                        <img src={require("../../../static/images/box.png").default} alt="integrity"/>
                    </section>
                    <h4>Professionalism</h4>
                    <p>We make sure to follow laid down industry standards when carrying out our role as your real
                        estate consultant.</p>
                </div>
                <div>
                    <section className="img-container">
                        <img src={require("../../../static/images/flag.png").default} alt="integrity"/>
                    </section>

                    <h4>Commitment</h4>
                    <p>We are 100% commited to ensuring the best customer service delivery accross our range of
                        services.</p>
                </div>
                <div>
                    <section className="img-container">
                        <img src={require("../../../static/images/message-icon.png").default} alt="integrity"/>
                    </section>
                    <h4>Premium Support</h4>
                    <p>We aim to provide ease accross every step of your property acquisition. Thus, you can be sure of
                        solid support always.</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseSection;