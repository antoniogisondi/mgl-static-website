import React from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Services.css'

const Services = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Header />
            <main className='container-fluid pt-5'>
                <div className="container my-5 servizi-container">
                    <h1 className="text-center mb-5 servizi-titolo">Servizi di MGL Consulting</h1>
                    <p className="text-center mb-5 servizi-introduzione">
                        MGL Consulting offre un'ampia gamma di servizi per garantire la sicurezza e la qualità nei luoghi di lavoro,
                        assicurando la conformità alle normative vigenti e promuovendo un ambiente lavorativo sicuro e sostenibile.
                    </p>
                    <div className="row">
                        <div className="col-md-5 mb-4" data-aos="fade-up">
                            <motion.div whileHover={{ scale: 1.05 }} className="card shadow servizi-card">
                                <div className="card-body">
                                    <h2 className="card-title servizi-card-titolo">Consulenza sulla Sicurezza nei Luoghi di Lavoro</h2>
                                    <ul className="servizi-lista">
                                        <li>Implementazione di sistemi di gestione della sicurezza</li>
                                        <li>Valutazione dei rischi per la sicurezza e la salute durante il lavoro</li>
                                        <li>Elaborazione di piani di emergenza ed evacuazione</li>
                                        <li>Consulenza normativa e pratiche per l'accreditamento</li>
                                        <li>Assunzione del ruolo di coordinatore della sicurezza</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-md-5 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <motion.div whileHover={{ scale: 1.05 }} className="card shadow servizi-card">
                                <div className="card-body">
                                    <h2 className="card-title servizi-card-titolo">Formazione e Aggiornamento Professionale</h2>
                                    <ul className="servizi-lista">
                                        <li>Corsi di formazione per lavoratori e datori di lavoro</li>
                                        <li>Formazione specifica su attrezzature e sicurezza</li>
                                        <li>Sviluppo e gestione di interventi formativi certificati</li>
                                        <li>Formazione continua e aggiornamento per responsabili aziendali</li>
                                        <li>Organizzazione di corsi di informatica e certificazioni</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            className="btn btn-primary servizi-btn"
                            href="/contatti"
                        >
                            Contattaci per maggiori informazioni
                        </motion.a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
