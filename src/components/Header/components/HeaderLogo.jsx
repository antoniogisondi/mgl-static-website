import React from "react";
import './HeaderLogo.css'

const HeaderLogo = () => {
    return(

        <div className="col-auto" style={{ paddingLeft: '30px' }}>

            <img src="../../public/helmet.png" alt="Company logo" className="Logo" style={{height: '50px' }}/>

            <span className="logo-text ms-3 d-none d-md-inline" style={{ fontWeight: 'bold' }}>MGL Consulting s.r.l.s</span> {/* Text next to the logo */}

        </div>
    )
}

export default HeaderLogo