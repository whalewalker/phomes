import React from 'react';
import Carousel, {slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import TextHeader from "../../reuseable/text-header/TextHeader";
import "./CarouselSlider.css"


const CarouselSlider = () => {
    const content = {
        text: "Here are some images of our most resent property listings.",
        header: "Recent Listings"
    }
    return (
        <div className="carousel-container">
            <TextHeader text={content.text} header={content.header}/>
            <Carousel
                plugins={[
                    'centered',
                    'infinite',
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2,
                        },
                    },
                ]}
                className="carousel-slider">
                <img src={require("../../../static/images/bearch.png").default} alt="house"/>
                <img src={require("../../../static/images/interior.png").default} alt="house"/>
                <img src={require("../../../static/images/bearch.png").default} alt="house"/>
            </Carousel>
        </div>
    );
};

export default CarouselSlider;