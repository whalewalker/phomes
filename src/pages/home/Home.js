import React from 'react';
import HomeSection from "../../components/sections/home/HomeSection";
import AboutSection from "../../components/sections/about/AboutSection";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import Footer from '../../components/sections/footer/Footer';
import ServiceSection from "../../components/sections/service/ServiceSection";
import ProcessSection from "../../components/sections/process/ProcessSection";
import ServiceGrid from '../../components/sections/servicegrid/ServiceGrid';

const Home = () => {
    return (
        <>
            <HomeSection/>
            <AboutSection/>
            <ServiceSection/>
            <ProcessSection/>
            <ChooseSection/>
            <Footer/>
            <ServiceGrid/>
        </>
    );
};

export default Home;