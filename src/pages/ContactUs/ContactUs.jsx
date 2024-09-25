import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'
import MapComponent from '../../components/MapComponent/MapComponent';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactUs.css'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Invio in corso...');

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const userID = import.meta.env.VITE_USER_ID;

        console.log('Service ID:', serviceID); // Dovrebbe stampare il tuo serviceID
        console.log('Template ID:', templateID); // Dovrebbe stampare il tuo templateID
        console.log('User ID:', userID); // Dovrebbe stampare il tuo userID

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                setStatus('Messaggio inviato con successo!');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                setStatus('Errore durante l\'invio del messaggio. Riprova più tardi.');
            });
    };

    return (
        <>
            <Header />
            <motion.div
                className="contact-form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contattaci</h2>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Messaggio</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Invia</button>
                    {status && <p className="status-message">{status}</p>}
                </form>
                <div className='map-container'>
                    <MapComponent />
                </div>
            </motion.div>
            <Footer />
        </>
    )
}

export default ContactUs;

