import React, { useEffect, useState } from 'react';
import './ProfessionalCourses.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getProfessionalCourses } from '../../service/apiCourses';
import { Link } from 'react-router-dom';

const ProfessionalCourses = () => {
  const [courses, setCourses] = useState([])
  // const [selectedCategory, setSelectedCategory] = useState('Tutti');

  // Filtrare i corsi in base alla categoria selezionata
  // const filteredCourses = selectedCategory === 'Tutti'
  //   ? coursesData
  //   : coursesData.filter(course => course.category === selectedCategory);

    useEffect(() => {
      getProfessionalCourses().then(setCourses).catch((err) => console.error('Errore fetch:', err))
    }, [])
  return (
    <>
      <Header />
      <main className="professional-courses-page">
        <div className="container text-center my-5">
          <h1 className="mb-4">Corsi Professionalizzanti Accreditati</h1>
          <p className="lead">
            Scopri i corsi accreditati dalla Regione Basilicata per migliorare le tue competenze e favorire l'inserimento nel mondo del lavoro.
          </p>
        </div>

        {/* Filtri per categoria */}
        {/* <div className="container my-3 text-center">
          <h2 className="mb-4">Filtra per Categoria</h2>
          <div className="btn-group">
            <button
              className={`btn ${selectedCategory === 'Tutti' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('Tutti')}
            >
              Tutti
            </button>
            <button
              className={`btn ${selectedCategory === 'Ambiente' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('Ambiente')}
            >
              Ambiente
            </button>
            <button
              className={`btn ${selectedCategory === 'Amministrazione' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('Amministrazione')}
            >
              Amministrazione
            </button>
            <button
              className={`btn ${selectedCategory === 'Sanità' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('Sanità')}
            >
              Sanità
            </button>
            <button
              className={`btn ${selectedCategory === 'Logistica' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('Logistica')}
            >
              Logistica
            </button>
            <button
              className={`btn ${selectedCategory === 'Ristorazione' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory('Ristorazione')}
            >
              Ristorazione
            </button>
          </div>
        </div> */}

        {/* Elenco dei corsi */}
        <div className="container my-5">
          <div className="row gy-4"> {/* Bootstrap `gy-4` per ridurre il gap */}
            {courses.map((course) => (
              <div className="col-md-6 col-lg-3" key={course._id}>
                <div className="card custom-card">
                  <div className="card-body">
                    <img className='card-img-top' src={`${import.meta.env.VITE_API_URL}/${course.image}`} alt="" />
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <p><strong>Durata:</strong> {course.duration}</p>
                    <Link to={`/corsi-professionalizzanti/${course._id}`} className="btn btn-primary custom-btn">Scopri di più</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfessionalCourses;
