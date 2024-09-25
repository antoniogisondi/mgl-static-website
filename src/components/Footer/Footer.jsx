import React from "react";
import { Link } from "react-router-dom";
import logo from '/img/mgl-consulting-logo.png'
import './Footer.css'
import '../../main.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12 d-flex flex-column align-items-start my-5">
                        <div className="footer-logo mb-4">
                            <img className="logo-footer" src={logo} alt="MGL Consulting Logo" />
                        </div>
                        <div className="footer-social d-flex">
                            <a href="https://www.facebook.com/profile.php?id=100057573665939" className="me-3">Facebook</a>
                            <a href="https://www.instagram.com/mglconsultingsrls/" className="me-3">Instagram</a>
                            <a href="#" className="me-3">Linkedin</a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 my-5 footer-content">
                        <h3>Società</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/chi-siamo">Chi siamo</Link></li>
                            <li><Link to="/servizi">Servizi</Link></li>
                            <li><Link to="/contatti">Contatti</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6 my-5 footer-content">
                        <h3>Supporto</h3>
                        <ul className="list-unstyled">
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Assistenza clienti</Link></li>
                            <li><Link to="#">Politica sulla privacy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center py-3">
                        <p className="mb-0">© 2024 MGL Consulting. Tutti i diritti riservati.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
