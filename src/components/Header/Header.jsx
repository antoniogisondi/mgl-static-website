import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-white mx-5">
                <div className="container-fluid px-5">
                    <Link className="navbar-brand" to="/">
                        <img src="/img/helmet.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        MGL Consulting S.r.l.s.
                    </Link>
                    <div class="ms-auto">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/decreto">D.Lgs 81</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/chi-siamo">Chi siamo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/servizi">Servizi</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contattaci">Contattaci</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header