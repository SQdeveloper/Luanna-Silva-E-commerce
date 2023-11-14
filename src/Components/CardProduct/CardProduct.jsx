import React from 'react';
import './CardProduct.css';

const CardProduct = ({name, colors, price, image}) => {
    return (
        <div className='cardProduct'>
            <div className="cardProduct-contentImage">
                <img className='cardProduct-first-image' src={image} alt="image-of-model" />
                <img src="" alt="image-of-model" />
            </div>
            <span className="cardProduct-title">{name}</span>
            <span className="cardProduct-price">$/ {price}.00</span>
            <div className="cardProduct-colors">
                <div className="cardProduct-color" style={{backgroundColor:colors[0]}}></div>
                <div className="cardProduct-color" style={{backgroundColor:colors[1]}}></div>
                <div className="cardProduct-color" style={{backgroundColor:colors[2]}}></div>
            </div>
        </div>
    );
};

export default CardProduct;