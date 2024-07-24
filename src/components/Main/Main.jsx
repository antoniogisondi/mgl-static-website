import React from "react";
import WorkCarousel from "../Carousel/WorkCarousel";
import { Link } from "react-router-dom";
import './Main.css'

const Main = () => {
    return (
        <main>
            <WorkCarousel />
            <section id="about" className="about-us">
                <h2>Chi Siamo</h2>
                <p>MGL Consulting è leader nella consulenza sulla sicurezza e igiene dei posti di lavoro. La nostra missione è garantire ambienti di lavoro sicuri e conformi alle normative.</p>
                <img src="team-photo.jpg" alt="Il nostro team" />
            </section>

            <section id="services" className="services">
                <h2>I Nostri Servizi</h2>
                <div className="service-item">
                    <img src="icon1.png" alt="Valutazione dei Rischi" />
                    <h3>Valutazione dei Rischi</h3>
                    <p>Analisi dettagliata dei rischi presenti nei luoghi di lavoro.</p>
                </div>
                <div className="service-item">
                    <img src="icon2.png" alt="Formazione sulla Sicurezza" />
                    <h3>Formazione sulla Sicurezza</h3>
                    <p>Corsi di formazione per lavoratori e datori di lavoro.</p>
                </div>
                <div className="service-item">
                    <img src="icon3.png" alt="Piani di Emergenza" />
                    <h3>Piani di Emergenza</h3>
                    <p>Elaborazione di piani di emergenza ed evacuazione.</p>
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