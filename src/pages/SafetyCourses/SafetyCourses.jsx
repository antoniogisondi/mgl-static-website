import React, { useEffect, useState } from 'react';
import './SafetyCourses.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getCourses } from '../../service/apiCourses';
import { Link } from 'react-router-dom';

function SafetyCourses() {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        getCourses().then(setCourses).catch((err) => console.error('Errore Fetch:', err))
    }, [])
    return (
        <>
        <Header />
        <main className="safety-courses-page">
            {/* Titolo e Introduzione */}
            <div className="container text-center my-5">
                <h1 className="mb-4">Corsi per la Sicurezza sul Lavoro</h1>
                <p className="lead">
                    Offriamo corsi di formazione dedicati alla sicurezza sul lavoro, conformi al D.Lgs 81/08, per garantire ambienti di lavoro sicuri e il rispetto delle normative.
                </p>
            </div>

            {/* Elenco dei Corsi */}
            <div className="container my-5">
                <h2 className="text-center mb-4">I Nostri Corsi Principali</h2>
                <div className="row">
                    {/* RSPP per Datore di Lavoro */}
                    <div className="col-md-6 col-lg-4 mb-4">
                        {courses.map((corso) => (
                            <div key={corso._id} className="card custom-card">
                                <img src={`${import.meta.env.VITE_API_URL}${corso.image}`} className="card-img-top" alt="RSPP per Datore di Lavoro" />
                                <div className="card-body">
                                    <h5 className="card-title">{corso.title}</h5>
                                    <p className="card-text">{corso.description}</p>
                                    <Link to={`/corsi-sicurezza/${corso._id}`} className="btn btn-primary custom-btn">Scopri di più</Link>
                                </div>
                            </div>
                        ))}
                        
                    </div>

                    {/* Formazione dei Lavoratori (Articoli 36 e 37) */}
                    {/* <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card custom-card">
                            <img src={imgWorker} className="card-img-top" alt="Formazione dei Lavoratori" />
                            <div className="card-body">
                            <h5 className="card-title">Formazione dei Lavoratori</h5>
                            <p className="card-text">Formazione obbligatoria prevista dagli articoli 36 e 37 del D.Lgs 81/08, adattata al settore di appartenenza.</p>
                            <a href="/corsi-sicurezza/lavoratori" className="btn btn-primary custom-btn">Scopri di più</a>
                            </div>
                        </div>
                    </div> */}

                    {/* Antincendio */}
                    {/* <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card custom-card">
                            <img src={imgFire} className="card-img-top" alt="Corso Antincendio" />
                            <div className="card-body">
                            <h5 className="card-title">Corso Antincendio</h5>
                            <p className="card-text">Preparazione per la gestione delle emergenze e la prevenzione degli incendi.</p>
                            <a href="/corsi-sicurezza/antincendio" className="btn btn-primary custom-btn">Scopri di più</a>
                            </div>
                        </div>
                    </div> */}

                    {/* Primo Soccorso */}
                    {/* <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card custom-card">
                            <img src={imgAid} className="card-img-top" alt="Primo Soccorso" />
                            <div className="card-body">
                            <h5 className="card-title">Corso Primo Soccorso</h5>
                            <p className="card-text">Formazione per interventi di primo soccorso in azienda.</p>
                            <a href="/corsi-sicurezza/primo-soccorso" className="btn btn-primary custom-btn">Scopri di più</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Contattaci */}
            <div className="container my-5 text-center">
            <h2 className="mb-4">Hai bisogno di ulteriori informazioni?</h2>
            <p className="lead">Contattaci per scoprire quale corso è più adatto alle tue esigenze aziendali.</p>
            <a href="/contatti" className="btn btn-outline-primary custom-btn">Contattaci</a>
            </div>
        </main>
        <Footer />
        </>
    );
    }

    export default SafetyCourses;
