import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getCoursesById } from '../../service/apiCourses'
import { sendContactRequest } from '../../service/apiCourses'


function DetailsCourses() {
    const {id} = useParams()
    const [corso, setCorso] = useState(null)
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
                courseId: corso._id,
                courseModel: 'Course'
            })

            setMsg('Richiesta inviata con successo!');
            setForm({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setMsg('Errore durante l’invio');
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await getCoursesById(id)
                setCorso(data)
            } catch (error) {
                console.error('Errore caricamento corso:', error);
            }
        }
        
        fetchCourse()
    }, [id])

    if (!corso) return <p>Caricamento...</p>;
    
    return (
        <div>
            <h1>{corso.title}</h1>
            <p>{corso.description}</p>
            {/* e così via... */}

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

export default DetailsCourses
