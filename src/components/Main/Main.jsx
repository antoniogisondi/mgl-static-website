import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import WorkCarousel from "../Carousel/WorkCarousel";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgTitolare from '/img/titolaredellimpresa.png'
import imgSocio from '/img/sociodellimpresa.png'
import imgSocio2 from '/img/sociodellimpresa2.jpg'
import './Main.css'
import '../../main.css'

const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, easing: 'ease-in-out' });
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };
    const services = [
        { title: 'Valutazione dei Rischi', description: 'Analisi dettagliata dei rischi presenti nei luoghi di lavoro.' },
        { title: 'Formazione sulla Sicurezza', description: 'Corsi di formazione per lavoratori e datori di lavoro.' },
        { title: 'Piani di Emergenza', description: 'Elaborazione di piani di emergenza ed evacuazione.' },
    ];
    const ServiceItem = ({ title, description }) => (
        <motion.div
            className="service-item"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </motion.div>
    );

    return (
        <main>
            <WorkCarousel />
            <div className="chi-siamo">
                <div className="chi-siamo-header" data-aos="fade-up">
                    <h2>Chi Siamo</h2>
                    <p>La nostra azienda, MGL Consulting, è leader nella consulenza sulla sicurezza nei luoghi di lavoro. Fondata nel 2016, la nostra missione è garantire la massima sicurezza per tutti i lavoratori attraverso soluzioni innovative e personalizzate. Con anni di esperienza nel settore, ci impegniamo a fornire servizi di alta qualità per proteggere la tua azienda e i tuoi dipendenti.
                        La nostra proposta riguarda la progettazione, organizzazione ed erogazione di corsi di formazione strutturati tenendo conto delle peculiarità dell’azienda e in funzione delle specificità della cultura prevenzionale e della realtà aziendale.
                    </p>
                </div>
                <Slider {...settings}>
                    <div className="socio" data-aos="fade-right">
                        <img src={imgTitolare} alt="Titolare" />
                        <h3>Domenico Gisondi</h3>
                        <p>Amministratore Unico</p>
                        <p>Domenico Gisondi, fondatore e amministratore unico, ha oltre 20 anni di esperienza nel settore della sicurezza sul lavoro.</p>
                    </div>
                    <div className="socio" data-aos="fade-left">
                        <img src={imgSocio} alt="Socio" />
                        <h3>Grazia Matera</h3>
                        <p>Socia</p>
                        <p>Grazia Matera è una socia chiave dell'azienda con una vasta esperienza nella gestione delle risorse umane e nella consulenza aziendale.</p>
                    </div>
                    <div className="socio" data-aos="fade-left">
                        <img src={imgSocio2} alt="Socio" />
                        <h3>Lucia Matera</h3>
                        <p>Socia</p>
                        <p>Lucia Matera è una socia chiave dell'azienda con una vasta esperienza nella gestione delle risorse umane e nella consulenza aziendale.</p>
                    </div>
                </Slider>
            </div>

            <section className="services">
                <div data-aos="fade-up" className=''>
                    <h2>Servizi</h2>
                    <div className="services-list" >
                        {services.map(service => (
                            <ServiceItem key={service.title} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>Contattaci</h2>
                <p>Se hai domande o vuoi maggiori informazioni sui nostri servizi, non esitare a contattarci. Siamo qui per aiutarti a garantire la sicurezza nei tuoi luoghi di lavoro.</p>
                <Link to="/contatti" className="cta-button">Vai alla pagina dei contatti</Link>
            </section>
        </main>
    );
};

export default Main;