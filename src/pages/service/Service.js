import React from 'react';
import {ServiceText} from "../../data/HomeData";
import TextCenter from "../../components/sections/text-center/TextCenter";
import ChooseSection from "../../components/sections/choose/ChooseSection";
import Footer from "../../components/sections/footer/Footer";
<<<<<<< HEAD
<<<<<<< HEAD
import ServiceGrid from '../../components/sections/servicegrid/ServiceGrid';
=======
import CarouselSlider from "../../components/sections/carousel/CarouselSlider";
>>>>>>> c77cb745c512ad3ad5f887e910e4f10f0f46545b
=======
import ServiceGrid from '../../components/sections/servicegrid/ServiceGrid';
import CarouselSlider from "../../components/sections/carousel/CarouselSlider";
>>>>>>> 42fb6af4e21e7dbf497940fcda4c04da32cf0344

const Service = () => {
    const {span, text, header} = ServiceText;
    return (
        <>
            <TextCenter span={span} text={text} header={header}/>
            <ServiceGrid/>
            <ChooseSection/>
            <CarouselSlider/>
            <Footer/>
        </>
    );
};

export default Service;