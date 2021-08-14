import React from 'react';
import {AboutText} from "../../data/HomeData";
import TextCenter from "../../components/sections/text-center/TextCenter";


const About = () => {
    const {text, span, header} = AboutText;

    return (
        <div>
            <TextCenter text={text} span={span} header={header}/>
        </div>
    );
};

export default About;