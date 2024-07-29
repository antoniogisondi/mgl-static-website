import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Decreto81 = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <div>
            <Header />
            <div className="decreto-81-page">
                {/* <header className="decreto-81-header">
                    <h1>Decreto Legislativo 81/08</h1>
                    <p>La guida completa alla normativa sulla sicurezza nei luoghi di lavoro</p>
                </header> */}
                <main>
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
            </div>
            <Footer />
        </div>
    );
}

export default Decreto81;

