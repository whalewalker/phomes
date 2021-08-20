import React from 'react';
import {ServiceText} from "../../data/HomeData";
import TextCenter from "../../components/sections/text-center/TextCenter";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import Footer from "../../components/sections/footer/Footer";
import ServiceGrid from '../../components/sections/servicegrid/ServiceGrid';
import CarouselSlider from "../../components/sections/carousel/CarouselSlider";
import Consultant from "../../components/reuseable/consultant/Consultant";

const Service = () => {
    const {span, text, header} = ServiceText;
    return (
        <>
            <TextCenter span={span} text={text} header={header}/>
            <ServiceGrid/>
            <ChooseSection/>
            <CarouselSlider/>
            <Consultant/>
            <Footer/>
        </>
    );
};

export default Service;