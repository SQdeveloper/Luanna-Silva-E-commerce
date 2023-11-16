import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-group">
                <h3 className='footer-title'>About Us</h3>
                <p className='footer-text'>Somos una marca con más de 20 años en moda femenina. Ropa para una mujer urbana, actual y romántica. Hecho con ❤️ por manos peruanas ✋🏻🇵🇪</p>
                <h2 className='footer-logo'>LUANNA SILVA</h2>
            </div>
            <div className="footer-group">
                <h2 className='footer-title'>Links Of Interest</h2>
                <ul className='footer-ul'>
                    <li>
                        <a className='footer-text' href="">Blog</a>
                    </li>
                    <li>
                        <a className='footer-text' href="">Contáctanos</a>
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
                    <li className='footer-text'>Teléfono: 01 7196666 anexo 121</li>
                    <li className='footer-text'>Correo: atencionalcliente@brujhas.com</li>
                    <li className='footer-text'>Whatsapp: +51 924 886 303</li>
                    <img src="" alt="book" />
                    <div className="footer-redes">
                        
                    </div>
                </ul>
            </div>
            <div className="footer-group">
                <h2 className='footer-title'>Newsletter</h2>
                <p className='footer-text'>¡Recibe 10% en tu primera compra, entérate antes que nadie de nuestras novedades y ten acceso a descuentos exclusivos!</p>
                <form action="">
                    <input className='footer-input' type="text" placeholder='Email' />
                    <button className='footer-button'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;