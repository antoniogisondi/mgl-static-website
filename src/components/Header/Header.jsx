import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import '../../main.css'

const Header = () => {
    return (
        <header className="custom-header">
            <nav className="navbar navbar-expand-lg mx-5">
                <div className="container-fluid px-5 nav-custom-container">
                    <Link className="navbar-brand" to="/">
                        <img src="/img/mgl-consulting-logo.png" alt="Logo" className="custom-logo d-inline-block align-text-top" />
                    </Link>
                    <div className="ms-auto">
                        <button className="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item nav-custom-item">
                                    <Link className="nav-link nav-custom-link active" aria-current="page" to="/decreto">D.Lgs 81</Link>
                                </li>
                                <li className="nav-item nav-custom-item">
                                    <Link className="nav-link nav-custom-link" to="/chi-siamo">Chi siamo</Link>
                                </li>
                                <li className="nav-item nav-custom-item">
                                    <Link className="nav-link nav-custom-link" to="/servizi">Servizi</Link>
                                </li>
                                <li className="nav-item nav-custom-item">
                                    <Link className="nav-link nav-custom-link" to="/contatti">Contatti</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
