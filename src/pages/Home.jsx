import React from 'react';
import illustration from '../../public/Illustration.png';  // Ensure the path is correct
import './Home.css'
const Home = () => {
    return (
        <div className="container-fluid home-container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5 col-lg-5 text-container">
                    <h1>Da 25 anni aiutiamo il tuo lavoro</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <button className="btn btn-primary">Registrati</button>
                </div>
                <div className="col-md-7 col-lg-7">
                    <img src={illustration} alt="Illustration showing a person with a laptop" className="img-fluid illustration" />
                </div>
            </div>
        </div>
    );
};

export default Home;
