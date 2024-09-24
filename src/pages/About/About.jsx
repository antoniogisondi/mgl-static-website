import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';
import '../../main.css'; // Importa il CSS personalizzato
import imgTitolare from '/img/titolaredellimpresa.png'
import imgSocio from '/img/sociodellimpresa.png'
import imgSocio2 from '/img/sociodellimpresa2.jpg'

const AboutUs = () => {
    // Stato per la gestione dell'hover sulle card
    const [hoveredCard, setHoveredCard] = useState(null);

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
                        <h1 className="text-primary">La Nostra Società</h1>
                        <p>MGL Consulting Srls è una società specializzata in sicurezza nei luoghi di lavoro. La nostra missione è garantire la sicurezza e il benessere dei lavoratori attraverso soluzioni innovative e personalizzate. Offriamo una gamma completa di servizi che includono valutazioni dei rischi, formazione, consulenza e implementazione di sistemi di gestione della sicurezza.</p>
                    </motion.div>

                    {/* Sezione Fondatore */}
                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-primary py-4">Fondatore</h2>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6 mb-4">
                                <motion.div
                                    className="card h-100 founder-card"
                                    onHoverStart={() => setHoveredCard(1)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                >
                                    <img src={imgTitolare} className="card-img-top" alt="Fondatore" />
                                    <div className="card-body text-center">
                                        <h3 className="card-title">Gisondi Domenico</h3>
                                        <p className="card-text">
                                            Responsabile del processo economico amministrativo presso MGL Consulting.
                                        </p>
                                        {hoveredCard === 1 && (
                                            <motion.div
                                                className="founder-details"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p><strong>Incarichi:</strong></p>
                                                <p>Responsabile del processo economico amministrativo.</p>
                                                <p>Esperienze specifiche, competenze amministrative, gestione delle finanze aziendali.</p>
                                                <p>Ha supervisionato vari progetti di ottimizzazione dei processi economici.</p>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sezione Soci */}
                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-primary py-4">Soci</h2>
                        <div className="row d-flex justify-content-center">
                            {/* Card Socio 1 */}
                            <div className="col-md-4 mb-4">
                                <motion.div
                                    className="card h-100 founder-card"
                                    onHoverStart={() => setHoveredCard(2)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                >
                                    <img src={imgSocio} className="card-img-top" alt="Socio 1" />
                                    <div className="card-body text-center">
                                        <h3 className="card-title">Matera Grazia</h3>
                                        <p className="card-text">
                                            Responsabile del processo di direzione e del processo di erogazione dei servizi formativi presso MGL Consulting.
                                        </p>
                                        {hoveredCard === 2 && (
                                            <motion.div
                                                className="founder-details"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p><strong>Incarichi:</strong></p>
                                                <p>Responsabile del processo di direzione.</p>
                                                <p>Responsabile del processo di erogazione dei servizi formativi.</p>
                                                <p>Esperienze specifiche, competenze, ecc.</p>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>


                            {/* Card Socio 2 */}
                            <div className="col-md-4 mb-4">
                                <motion.div
                                    className="card h-100 founder-card"
                                    onHoverStart={() => setHoveredCard(3)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                >
                                    <img src={imgSocio2} className="card-img-top" alt="Socio 2" />
                                    <div className="card-body text-center">
                                        <h3 className="card-title">Matera Lucia</h3>
                                        <p className="card-text">
                                            Responsabile della formazione e dei processi formativi presso MGL Consulting.
                                        </p>
                                        {hoveredCard === 3 && (
                                            <motion.div
                                                className="founder-details"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p><strong>Incarichi:</strong></p>
                                                <p>Responsabile del processo di analisi dei fabbisogni formativi.</p>
                                                <p>Responsabile del processo di progettazione dei servizi formativi.</p>
                                                <p>Dettagli aggiuntivi sul socio 2, esperienze e competenze specifiche nella gestione dei processi formativi.</p>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>


                            {/* Aggiungi altre card di soci se necessario */}
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
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

