import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import safetyCourses from '../../data/safety-courses'
import { sendContactRequest } from '../../service/apiCourses'

function DetailsSafetyCourses() {
    const { slug } = useParams()
    const safetyCourse = safetyCourses.find(c => c.slug === slug)
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [msg, setMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await sendContactRequest({
                ...form,
                course: safetyCourse.title
            })

            setMsg('Richiesta inviata con successo!');
            setForm({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setMsg('Errore durante l’invio');
            console.error(error);
        }
    }

    if (!safetyCourse) return <p>Corso non trovato</p>;
    return (
        <div className="container mt-5">
            <h1>{safetyCourse.title}</h1>
            <img src={safetyCourse.image} alt={safetyCourse.title} className="img-fluid mb-4" />
            <p>{safetyCourse.description}</p>
            <p><strong>Prezzo:</strong> {safetyCourse.price}</p>
            <p><strong>Modalità:</strong> {safetyCourse.modality}</p>
            <p><strong>Durata:</strong> {safetyCourse.duration}</p>
            <a href="/contatti" className="btn btn-primary">Richiedi informazioni</a>

            <form onSubmit={handleSubmit} className="space-y-4 mt-8 bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold">Richiedi informazioni</h3>

                <input
                    type="text"
                    required
                    placeholder="Nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full p-2 border rounded"
                />

                <input
                    type="tel"
                    placeholder="Telefono"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full p-2 border rounded"
                />

                <textarea
                    required
                    placeholder="Messaggio"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full p-2 border rounded"
                ></textarea>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Invia
                </button>

                {msg && <p className="text-sm mt-2">{msg}</p>}
            </form>
        </div>
    )
}

export default DetailsSafetyCourses
