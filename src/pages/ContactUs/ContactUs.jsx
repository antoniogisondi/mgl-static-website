import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="contact-page">
                    <h2>Contattaci</h2>
                    <form>
                        <label>
                            Nome:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Messaggio:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Invia</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;
