import React from 'react';
import "./TextHeader.css";

const TextHeader = ({header, text}) => {
    return (
        <header>
            <h2>{header}</h2>
            <p>{text}</p>
        </header>
    );
};

export default TextHeader;