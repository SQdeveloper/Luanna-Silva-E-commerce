import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>            
            <section className='hero'>
                <div className="hero-content-img">
                    <img className='hero-image-model' src="./src/assets/img/models/model-main.jpg" alt="Foto de ahmet öktem: https://www.pexels.com/es-es/foto/gafas-de-sol-18978812/" />
                </div>
                <div className="hero-context">
                    <h2 className="hero-h2">Beautiful summer designs for you</h2>
                    <Link to='/Collection/Summer' className="hero-btn">
                        Buy Now
                    </Link>
                </div>
            </section>            
        </>
    );
};

export default Hero;