import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './About.css';

const About = () => {
    return (
        <div>
            <Header />
            <main className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <h3>Qua vanno inseriti le informazioni di contatto e chi è la società e chi lavora</h3>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
