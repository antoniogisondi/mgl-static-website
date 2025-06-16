import React from 'react'
import { useParams } from 'react-router-dom'
import eipassCourses from '../../data/courses'

function EipassDetailsPage() {
    const { slug } = useParams()
    const corso = eipassCourses.find(c => c.slug === slug)
    if (!corso) return <p>Corso non trovato</p>;
    
    return (
        <div className="container mt-5">
            <h1>{corso.title}</h1>
            <img src={corso.image} alt={corso.title} className="img-fluid mb-4" />
            <p>{corso.description}</p>
            <p><strong>Prezzo:</strong> {corso.price}</p>
            <p><strong>Modalità:</strong> {corso.modality}</p>
            <p><strong>Durata:</strong> {corso.duration}</p>
            <a href="/contatti" className="btn btn-primary">Richiedi informazioni</a>
        </div>
        );
}

export default EipassDetailsPage
