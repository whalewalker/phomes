import React from 'react';
import {AboutText} from "../../data/HomeData";
import TextCenter from "../../components/sections/text-center/TextCenter";
import AboutSection from "../../components/sections/about/AboutSection";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import Footer from "../../components/sections/footer/Footer";
import CarouselSlider from "../../components/sections/carousel/CarouselSlider";
import Consultant from "../../components/reuseable/consultant/Consultant";


const About = () => {
    const {text, span, header} = AboutText;
    const content = {
        header: "Real Estate Services Designed Just for",
        span: "You",
        text: [
            "PTwins Home Nigeria Limited is dedicated to providing home for comfort. A property consulting company, we strive to help you find the best housing property suited to your needs. We understand that investing in real estate can be tricky and have designed our processes to ensure a purchase you’ll love.",
            "At PTwins Home Nigeria Limited, we are committed to providing you the best value possible for your property investments. Thus, our agents stops at nothing to help ensure you get properties that are best suited to your needs.",
            "Built on integrity, professionalism and commitment to excellence, we have been able to establish ourself as a reliable option in this space. Our listings are verified to ensure authenticity while providing ease in documentation of your assets.",
        ]
    }


    return (
        <div>
            <TextCenter text={text} span={span} header={header}/>
            <AboutSection header={content.header} text={content.text} span={content.span}/>
            <ChooseSection/>
            <CarouselSlider/>
            <Consultant/>
            <Footer/>
        </div>
    );
};

export default About;