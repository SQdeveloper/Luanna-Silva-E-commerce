import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-content-img">
                <img className='hero-image-model' src="./src/assets/img/models/model-main.jpg" alt="Foto de ahmet öktem: https://www.pexels.com/es-es/foto/gafas-de-sol-18978812/" />
            </div>
            <div className="hero-context">
                <h2 className="hero-h2">The Holiday Season With Luanna Silva</h2>
                <button className="hero-btn">
                    Let me see
                </button>
            </div>
        </section>
    );
};

export default Hero;