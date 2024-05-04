import React from "react";

const NavItems = () => {
    return (
        <div className="col-auto ms-auto">
            <nav className="navbar navbar-expand-md navbar-light">  {/* Changed to navbar-expand-md */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">81/08</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servizi</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Portfolio
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Link 1</a></li>
                                <li><a className="dropdown-item" href="#">Link 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Chi siamo</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPricing" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contattaci
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownPricing">
                                <li><a className="dropdown-item" href="#">Plan 1</a></li>
                                <li><a className="dropdown-item" href="#">Plan 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavItems;
