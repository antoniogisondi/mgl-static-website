import Home from "./pages/Home/Home";
import About from './pages/About/About'
import Decree81 from "./pages/Decree/Decree81";
import ContactUs from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/Services";
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
          <Route path="/decreto" element={<Decree81 />} />
          <Route path="/contatti" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
