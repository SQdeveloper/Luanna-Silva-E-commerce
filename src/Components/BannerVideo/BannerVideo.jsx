import React from 'react';
import './BannerVideo.css';

const BannerVideo = () => {
    return (
        <section className='bannerVideo'>
            <video className='bannerVideo-video' autoPlay muted loop src="../src/assets/videos/model-sesion.mp4"></video>
            <div className="bannerVideo-contText">
                <span className='bannerVideo-span' >COLLECTION WINTER</span>
                <h2 className='bannerVideo-title'>¡Magical Winter!</h2>
                <a className='bannerVideo-ancle' href="">View Collection</a>
            </div>
        </section>
    );
};

export default BannerVideo; 