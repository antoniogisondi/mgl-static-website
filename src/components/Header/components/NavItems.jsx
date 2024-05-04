import React from "react";

const NavItems = () => {
    return(
        <div className="col-auto ms-auto">
            <nav className="navbar navbar-expand navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Why JustGo?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Community</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Link 1</a></li>
                            <li><a className="dropdown-item" href="#">Link 2</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">JustGo Blog</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Pricing</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Plan 1</a></li>
                            <li><a className="dropdown-item" href="#">Plan 2</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavItems