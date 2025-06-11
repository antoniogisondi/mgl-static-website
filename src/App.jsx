import Home from "./pages/Home/Home";
import About from './pages/About/About'
import ContactUs from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/Services";
import ProfessionalCourses from './pages/ProfessionalCourses/ProfessionalCourses'
import SafetyCourses from './pages/SafetyCourses/SafetyCourses'
import DetailsCourses from "./pages/DetailsCourses/DetailsCourses";
import DetailsProfessionalCourses from "./pages/DetailsProfessionalCourses/DetailsProfessionalCourses";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
// index.js or App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/servizi" element={<Services />} />
          <Route path="/contatti" element={<ContactUs />} />
          <Route path="/corsi-professionalizzanti" element={<ProfessionalCourses />} />
          <Route path="/corsi-professionalizzanti/:id" element={<DetailsProfessionalCourses />} />
          <Route path="/corsi-sicurezza" element={<SafetyCourses />} />
          <Route path="/corsi-sicurezza/:id" element={<DetailsCourses/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
