import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import safetyCourses from '../../data/safety-courses';
import './SafetyCourses.css';
import { Link } from 'react-router-dom';

function SafetyCourses() {
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
                {safetyCourses.map((c, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                        <div className="card h-100">
                            <img src={c.image} className="card-img-top" alt={c.title} />
                            <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{c.title}</h5>
                            <p className="card-text">{c.description}</p>
                            <p><strong>Prezzo:</strong> {c.price}</p>
                            <p><strong>Modalità:</strong> {c.modality}</p>
                            <Link to={`/corsi-sicurezza/${c.slug}`} className="btn btn-primary mt-auto">Dettagli corso</Link>
                            </div>
                        </div>
                    </div>
                ))}
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
