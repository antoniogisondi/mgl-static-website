<header className="container-fluid">

    <div className="row align-items-center">

        {/* immagine e testo dell'immagine */}

        <div className="col-12 col-md-auto" style={{ paddingLeft: '30px' }}>
            <img src="../../public/helmet.png" alt="Company logo" className="Logo" style={{ height: '50px' }}/>
            <span className="logo-text ms-3 d-none d-md-inline">Your Text Here</span>
        </div>

        {/*  */}




        {/* Items della navbar */}

        <div className="col-12 col-md-auto ms-md-auto">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                <nav className="navbar navbar-expand-md navbar-light">
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
        </div>

        {/*  */}




        <div className="col-12 col-md-auto d-md-none d-lg-inline-block">
            <button className="btn btn-primary" type="button">Get a Demo</button>
        </div>

    </div>

</header>
