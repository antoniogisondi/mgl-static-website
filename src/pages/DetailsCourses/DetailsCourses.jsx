import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getCoursesById } from '../../service/apiCourses'


function DetailsCourses() {
    const {id} = useParams()
    const [corso, setCorso] = useState(null)

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
        </div>
    )
}

export default DetailsCourses
