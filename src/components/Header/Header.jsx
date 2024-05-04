import React from "react";
import './Header.css'
import HeaderLogo from "./components/HeaderLogo";
import NavItems from "./components/NavItems";

const Header = () => {
    return(
<header className="container-fluid">

    <div className="row align-items-center">

        <HeaderLogo />              {/* Logo e immagine nell'header */}

        <NavItems />                {/* Items della navbar */}

        <div className="col-auto">
            <button className="btn btn-primary" type="button">Get a Demo</button>
        </div>

    </div>

</header>

    )
}

export default Header