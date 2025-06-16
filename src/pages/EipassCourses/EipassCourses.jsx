import React from 'react'
import eipassCourses from '../../data/courses'
import { Link } from 'react-router-dom'

function EipassCourses() {
    return (

        <div className="container mt-5">
            <h1>Corsi EIPASS</h1>
            <div className="row">
            {eipassCourses.map((c, idx) => (
                <div className="col-md-4 mb-4" key={idx}>
                <div className="card h-100">
                    <img src={c.image} className="card-img-top" alt={c.title} />
                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{c.title}</h5>
                    <p className="card-text">{c.description}</p>
                    <p><strong>Prezzo:</strong> {c.price}</p>
                    <p><strong>Modalità:</strong> {c.modality}</p>
                    <Link to={`/eipass/${c.slug}`} className="btn btn-primary mt-auto">Dettagli corso</Link>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default EipassCourses
