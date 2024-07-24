import React, { useState } from 'react';
import Slider from 'react-slick';
import image1 from '../../../public/img/architetto.png'
import image2 from '../../../public/img/elmetti.png'
import './WorkCarousel.css';

const WorkCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="Slide 1" />
                    <h2>Slide 1</h2>
                    <p>Description for Slide 1</p>
                </div>
                <div>
                    <img src={image2} alt="Slide 2" />
                    <h2>Slide 2</h2>
                    <p>Description for Slide 2</p>
                </div>
            </Slider>
        </div>
    );
}


export default WorkCarousel;
