import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProfessionalCoursesById } from '../../service/apiCourses'
import { sendContactRequest } from '../../service/apiCourses'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './DetailsProfessionalCourses.css'

function DetailsProfessionalCourses() {
    const {id} = useParams()
    const [corso, setCorso] = useState(null)
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
        courseId: ''
    })
    const [msg, setMsg] = useState('')

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await getProfessionalCoursesById(id)
                setCorso(data)
            } catch (error) {
                console.error('Errore caricamento corso:', error);
            }
        }

        fetchCourse()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await sendContactRequest({
                ...form,
                courseId: corso._id,
            })

            setMsg('Richiesta inviata con successo!');
            setForm({ name: '', surname: '', email: '', phone: '', message: '' });
        } catch (error) {
            setMsg('Errore durante l’invio');
            console.error(error);
        }
    }

    if (!corso) return <p>Caricamento...</p>;

    return (
        <>
            <Header/>
            <div className='mt-5 pt-5'>
                <h1>{corso.title}</h1>
                <h2>{corso.subtitle}</h2>
                <p>{corso.description}</p>
                {/* e così via... */}
                <a
                href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}?text=Salve, vorrei informazioni sul corso "${corso.title}"`}
                target="_blank"
                rel="noopener noreferrer">Contattaci su WhatsApp</a>

                <a
                href={`mailto:${import.meta.env.VITE_EMAIL}?subject=Info corso ${corso.title}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 ml-2">Scrivici via Email</a>

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
                        type="text"
                        required
                        placeholder="Cognome"
                        value={form.surname}
                        onChange={(e) => setForm({ ...form, surname: e.target.value })}
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
    )
}

export default DetailsProfessionalCourses
