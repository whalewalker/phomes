import React from 'react';
import {AboutText} from "../../data/HomeData";
import TextCenter from "../../components/sections/text-center/TextCenter";
import AboutSection from "../../components/sections/about/AboutSection";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import Footer from "../../components/sections/footer/Footer";


const About = () => {
    const {text, span, header} = AboutText;

    return (
        <div>
            <TextCenter text={text} span={span} header={header}/>
            <AboutSection/>
            <ChooseSection/>
            <Footer/>
        </div>
    );
};

export default About;