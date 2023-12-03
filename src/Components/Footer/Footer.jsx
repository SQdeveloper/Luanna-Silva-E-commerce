import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-group">
                <h3 className='footer-title'>About Us</h3>
                <p className='footer-text footer-text-lh'>We are a brand with more than 20 years in fashion for men and women. Urban, modern and romantic clothing. Made with ❤️ by Peruvian hands ✋🏻🇵🇪</p>
                <h2 className='footer-logo'>LUANNA SILVA</h2>
            </div>
            <div className="footer-group">
                <h2 className='footer-title'>Links Of Interest</h2>
                <ul className='footer-ul footer-nav'>
                    <li>
                        <a className='footer-text' href="">Blog</a>
                    </li>
                    <li>
                        <Link to='/Contact-Us' className='footer-text' href="">Contact Us</Link>
                    </li>
                    <li>
                        <a className='footer-text' href="">Tiendas</a>
                    </li>
                    <li>
                        <a className='footer-text' href="">Preguntas frecuentes (FAQ)</a>
                    </li>
                    <li>
                        <a className='footer-text' href="">Términos del servicio</a>
                    </li>
                    <li>
                        <a className='footer-text' href="">Política de reembolso</a>
                    </li>
                    <li>
                        <a className='footer-text' href="">Libro de reclamaciones</a>
                    </li>
                </ul>
            </div>
            <div className="footer-group">
                <h2 className='footer-title'>Contact</h2>
                <ul className='footer-ul'>                
                    <li className='footer-text'>Phone: 08 36666 anexo 1021</li>
                    <li className='footer-text'>Email: customerservice@luanna.com</li>
                    <li className='footer-text'>Whatsapp: +03 903 243 9939</li>
                    <img className='footer-img-book' src="../../src/assets/img/icons/libro-de-reclamaciones.avif" alt="book" />                    
                    <div className="footer-redes">
                        <a className='footer-ancle-redes' href=""><FaFacebookSquare /></a>
                        <a className='footer-ancle-redes' href=""><FaInstagram /></a>
                        <a className='footer-ancle-redes' href=""><FaYoutube /></a>
                        <a className='footer-ancle-redes' href=""><FaTiktok /></a>
                        <a className='footer-ancle-redes' href=""><FaWhatsapp /></a>
                    </div>
                </ul>
            </div>
            <div className="footer-group">
                <h2 className='footer-title'>Newsletter</h2>
                <p className='footer-text footer-text-lh'>Receive 10% on your first purchase, find out before anyone else about our new products and get access to exclusive discounts!</p>
                <form action="">
                    <input className='footer-input' type="text" placeholder='Email' />
                    <button className='footer-button'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;