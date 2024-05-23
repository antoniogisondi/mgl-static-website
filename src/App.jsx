import Home from "./pages/Home/Home";
import About from './pages/About/About'
import Decree81 from "./pages/Decree/Decree81";
import ContactUs from "./pages/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// index.js or App.js
import $ from 'jquery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/decreto-81" element={<Decree81 />} />
          <Route path="/contattaci" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
