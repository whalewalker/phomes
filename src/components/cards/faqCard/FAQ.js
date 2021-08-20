import React from 'react';
import "./FAQ.css"

const FAQ = ({faq, toggleFaq, index}) => {
    const {title, content, open} = faq;
    return (
        <div
            className={"faq " + (open ? 'open' : '')}
            key={index}
            onClick={() => toggleFaq(index)}
        >

            <div className="faq-header">
                <h3 className="faq-question">
                    {title}
                </h3>
                <i className={open ? "fas fa-minus" : "fas fa-plus"}/>
            </div>
            <p className="faq-answer">
                {content}
            </p>

        </div>

    );
};

export default FAQ;