import React from 'react';
import Footer from "../../components/sections/footer/Footer";
import FaqSection from "../../components/sections/faqSection/FaqSection";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import CarouselSlider from "../../components/sections/carousel/CarouselSlider";
import Consultant from "../../components/reuseable/consultant/Consultant";

const Faq = () => {
    return (
        <div>
            <FaqSection/>
            <ChooseSection/>
           <CarouselSlider/>
            <Consultant/>
            <Footer/>
        </div>
    );
};

export default Faq;