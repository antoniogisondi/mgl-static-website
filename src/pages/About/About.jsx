import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="container margin-header">
                <section>
                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-primary">La Nostra Società</h2>
                        <p>MGL Consulting Srls è una società specializzata in sicurezza nei luoghi di lavoro. La nostra missione è garantire la sicurezza e il benessere dei lavoratori attraverso soluzioni innovative e personalizzate. Offriamo una gamma completa di servizi che includono valutazioni dei rischi, formazione, consulenza e implementazione di sistemi di gestione della sicurezza.</p>
                    </motion.div>

                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-primary">Fondatori e Soci</h2>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <img src="founder1.jpg" className="card-img-top" alt="Fondatore 1" />
                                    <div className="card-body text-center">
                                        <h3 className="card-title">Nome Fondatore 1</h3>
                                        <p className="card-text">Esperienza e background del fondatore 1...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <img src="founder2.jpg" className="card-img-top" alt="Fondatore 2" />
                                    <div className="card-body text-center">
                                        <h3 className="card-title">Nome Fondatore 2</h3>
                                        <p className="card-text">Esperienza e background del fondatore 2...</p>
                                    </div>
                                </div>
                            </div>
                            {/* Aggiungi altri soci se necessario */}
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-primary">Le Nostre Esperienze</h2>
                        <p>Descrizione delle esperienze e dei progetti realizzati dalla società...</p>
                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;

