import {useState, useEffect} from 'react'
import { getCourses } from '../../service/apiCourses'

function Courses() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(setCourses).catch((err) => console.error('Errore fetch:', err))
    }, [])
    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Catalogo Corsi</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((corso) => (
                <div key={corso._id} className="border rounded p-4 shadow hover:shadow-lg">
                    <img src={`${import.meta.env.VITE_API_URL}${corso.image}`} alt="" />
                <h2 className="text-xl font-semibold">{corso.title}</h2>
                <p className="mt-2 font-bold">{corso.price} €</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Courses
