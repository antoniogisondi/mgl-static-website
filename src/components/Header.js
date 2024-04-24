import React, { useState } from 'react'

function Header() {
    const [funzione, SetMyFunzione] = useState('non fazz nu cazz')
    let gay = () => {
        SetMyFunzione('Lavoro al corac')
    }
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <button onClick={gay}>Cosa sta facendo ciattino</button>
                        <h1>{funzione}</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header