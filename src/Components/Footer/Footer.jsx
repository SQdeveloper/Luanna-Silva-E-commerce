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
                        <Link onClick={()=>{window.scrollTo(0)}} to='/LuannaSilva/Contact-Us' className='footer-text' href="">Contact Us</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{window.scrollTo(0)}} to='/LuannaSilva/Stores' className='footer-text' href="">Stores</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{window.scrollTo(0)}} to='/LuannaSilva/Q&A' className='footer-text' href="">Question and Answers</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{window.scrollTo(0)}} to='/LuannaSilva/TermsOfService' className='footer-text' href="">Terms Of Service</Link>
                    </li>
                    <li>
                        <Link onClick={()=>{window.scrollTo(0)}} to='/LuannaSilva/RefundPolicy' className='footer-text' href="">Refund Policy</Link>
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