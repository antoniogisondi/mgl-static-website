import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Decree81.css'

const Decreto81 = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <>
            <Header />
            <main>
                {/* Sezione introduttiva */}
                <section className="decreto-81-intro" data-aos="fade-up">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Cos'è il Decreto Legislativo 81/08?</h2>
                        <p>
                            Il Decreto Legislativo 9 aprile 2008, n. 81, noto anche come Testo Unico sulla Sicurezza
                            sul Lavoro, è una normativa italiana che mira a garantire la sicurezza e la salute dei
                            lavoratori durante le attività lavorative. Il decreto disciplina la prevenzione degli
                            infortuni sul lavoro e delle malattie professionali.
                        </p>
                    </motion.div>
                </section>

                {/* Sezione disposizioni principali */}
                <section className="decreto-81-details" data-aos="fade-up">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Principali Disposizioni</h2>
                        <ul>
                            <li>
                                <strong>Obblighi del Datore di Lavoro:</strong> Il datore di lavoro deve valutare i rischi
                                e adottare misure di prevenzione adeguate.
                            </li>
                            <li>
                                <strong>Formazione e Informazione:</strong> I lavoratori devono essere formati e informati
                                sui rischi presenti nel luogo di lavoro e sulle misure di prevenzione.
                            </li>
                            <li>
                                <strong>Sorveglianza Sanitaria:</strong> I lavoratori devono essere sottoposti a controlli
                                sanitari periodici per prevenire malattie professionali.
                            </li>
                            <li>
                                <strong>Dispositivi di Protezione Individuale (DPI):</strong> I DPI devono essere forniti e
                                utilizzati quando necessario.
                            </li>
                        </ul>
                    </motion.div>
                </section>

                {/* Aggiunta di nuove sezioni */}
                <section className="decreto-81-risk-assessment" data-aos="fade-up">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Valutazione dei Rischi</h2>
                        <p>
                            La valutazione dei rischi è il cuore del Decreto 81/08. Ogni datore di lavoro deve
                            identificare e analizzare i rischi associati alle attività lavorative e adottare misure di prevenzione e protezione adeguate.
                        </p>
                        <ul>
                            <li>Identificazione dei pericoli.</li>
                            <li>Analisi della probabilità e gravità dei rischi.</li>
                            <li>Adozione di misure preventive.</li>
                        </ul>
                    </motion.div>
                </section>

                <section className="decreto-81-roles" data-aos="fade-up">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Ruoli e Responsabilità</h2>
                        <p>
                            Il Decreto Legislativo 81/08 definisce chiaramente i ruoli e le responsabilità di tutti i soggetti coinvolti:
                        </p>
                        <ul>
                            <li><strong>Datore di Lavoro:</strong> Responsabile dell'adozione delle misure di sicurezza.</li>
                            <li><strong>Lavoratori:</strong> Obbligo di utilizzare i DPI e seguire le procedure di sicurezza.</li>
                            <li><strong>RSPP:</strong> Responsabile del Servizio di Prevenzione e Protezione, nominato dal datore di lavoro.</li>
                        </ul>
                    </motion.div>
                </section>

                {/* Sezione Risorse Utili */}
                <section className="decreto-81-resources" data-aos="fade-up">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Risorse Utili</h2>
                        <p>Per ulteriori informazioni, visita i seguenti link:</p>
                        <ul>
                            <li><a href="https://www.normattiva.it/">Normattiva</a></li>
                            <li><a href="https://www.inail.it/">INAIL</a></li>
                            <li><a href="https://www.salute.gov.it/">Ministero della Salute</a></li>
                        </ul>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Decreto81;


