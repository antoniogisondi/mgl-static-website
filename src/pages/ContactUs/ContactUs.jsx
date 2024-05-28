import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <Header />
            <main className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <h3>Qua vanno inseriti i contatti con la form dell'email</h3>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;
