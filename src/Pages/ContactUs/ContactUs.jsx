import React from 'react';
import Header from '../../Components/Header/Header';
import './ContactUs.css';
import Footer from '../../Components/Footer/Footer';

const ContactUs = () => {
    return (
        <>
        <Header/>
        <section className='section-contact'>
            <h1 className='section-contact-title'>Contact Us</h1>
            <div className="contact-group">
                <div className="contact-group-left">
                    <h2>Suport</h2>
                    <p>Mon - Fri 9:00am - 5:00pm *Excluding holidays</p>
                    <br/>
                    <p>We are a brand with more than 20 years in fashion for men and women. Urban, modern and romantic clothing. Made with ❤️ by Peruvian hands ✋🏻🇵🇪</p>
                </div>
                <div className="contact-group-right">
                    <h2>Write to Us</h2>
                    <p>Write to us by filling out the form below and one of our agents will get back to you as soon as possible.</p>
                    <form className='contact-form' action="">
                        <div className="contact-form-div">
                            <label htmlFor="name">
                                <h3>Name</h3>
                                <input name='name' type="text" />
                            </label>
                            <label htmlFor="email">
                                <h3>Email</h3>
                                <input name='email' type="text" />
                            </label>
                        </div>
                        <label htmlFor="">
                            <h3>Message</h3>
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </label>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default ContactUs;