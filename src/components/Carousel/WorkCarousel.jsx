import React, { useState } from 'react';
import Slider from 'react-slick';
import image1 from '/img/architetto.png'
import image2 from '/img/elmetti.png'
import '../../main.css'
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
        fade: true,
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

    const slidesData = [
        {
            id: 1,
            image: image1,
            title: 'Sicurezza nei Luoghi di Lavoro',
            description: 'Garantiamo ambienti di lavoro sicuri e conformi alle normative.',
            cta: 'Scopri di più',
            link: '/contatti'
        },
        {
            id: 2,
            image: image2,
            title: 'Formazione sulla Sicurezza',
            description: 'Corsi di formazione per migliorare la consapevolezza sulla sicurezza.',
            cta: 'Iscriviti ora',
            link: '/contatti'
        },
    ]

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slidesData.map(slide => (
                    <div key={slide.id} className="slide">
                        <div className="image-container">
                            <img src={slide.image} alt={slide.title} className="slide-image" />
                        </div>
                        <div className="overlay">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <a href={slide.link} className="cta-button">{slide.cta}</a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}


export default WorkCarousel;
