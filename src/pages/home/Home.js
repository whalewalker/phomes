import React from 'react';
import HomeSection from "../../components/sections/home/HomeSection";
import AboutSection from "../../components/sections/about/AboutSection";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import Footer from '../../components/sections/footer/Footer';
import ServiceSection from "../../components/sections/service/ServiceSection";
import ProcessSection from "../../components/sections/process/ProcessSection";

import CarouselSlider from "../../components/sections/carousel/CarouselSlider";
import Consultant from "../../components/reuseable/consultant/Consultant";


const Home = () => {
    const content = {
        header: "About",
        span: "PTwins Homes",
        text: [
            "PTwins Home Nigeria Limited is a property consulting company that strives to help its clients find the best housing property for them. Some about us information to help readers relate to the brand better.",
            "Another line of about us to complete this section of the page. Not sure what should be here yet.",
        ]
    }

    return (
        <>
            <HomeSection/>
            <AboutSection header={content.header} text={content.text} span={content.span}/>
            <ServiceSection/>
            <ProcessSection/>
            <CarouselSlider/>
            <ChooseSection/>
            <Consultant/>
            <Footer/>
   
        </>
    );
};

export default Home;