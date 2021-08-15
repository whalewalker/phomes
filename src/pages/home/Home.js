import React from 'react';
import HomeSection from "../../components/sections/home/HomeSection";
import AboutSection from "../../components/sections/about/AboutSection";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import Footer from '../../components/sections/footer/Footer';

const Home = () => {
    return (
        <>
            <HomeSection/>
            <AboutSection/>
            <ChooseSection/>
            <Footer/>
        </>
    );
};

export default Home;