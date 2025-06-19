import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { sendContactRequest } from '../../service/apiCourses'
import eipassCourses from '../../data/eipass-courses'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function DetailsEipassCourses() {
    const { slug } = useParams()
    const eipassCourse = eipassCourses.find(c => c.slug === slug)
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
                course: eipassCourse.title
            })

            setMsg('Richiesta inviata con successo!');
            setForm({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setMsg('Errore durante l’invio');
            console.error(error);
        }
    }
    if (!eipassCourse) return <p>Corso non trovato</p>;
    
    return (
        <>
            <Header/>
            <div className="container mt-5">
                <h1>{eipassCourse.title}</h1>
                <img src={eipassCourse.image} alt={eipassCourse.title} className="img-fluid mb-4" />
                <p>{eipassCourse.description}</p>
                <p><strong>Prezzo:</strong> {eipassCourse.price}</p>
                <p><strong>Modalità:</strong> {eipassCourse.modality}</p>
                <p><strong>Durata:</strong> {eipassCourse.duration}</p>
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
            <Footer/>
        </>
        );
}

export default DetailsEipassCourses
