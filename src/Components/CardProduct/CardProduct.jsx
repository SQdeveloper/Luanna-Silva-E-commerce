import React from 'react';
import { Link } from 'react-router-dom';
import { TfiSearch } from "react-icons/tfi";
import './CardProduct.css';

const CardProduct = ({id, category, name, colors, price, image}) => {

    return (
        <Link onClick={()=>{window.scrollTo(0)}} to={`/LuannaSilva/Product/${id}`} className='cardProduct'>
            <div className="cardProduct-contentImage">
                <img className='cardProduct-first-image' src={image} alt="image-of-model" />                
                <div className="cardProduct-cont-hover">
                    <TfiSearch />
                    View
                </div>
            </div>
            <span className="cardProduct-title">{name}</span>
            <span className="cardProduct-price">$/ {price}.00</span>
            <div className="cardProduct-colors">
                <div className="cardProduct-color" style={{backgroundColor:colors[0]}}></div>
                <div className="cardProduct-color" style={{backgroundColor:colors[1]}}></div>
                <div className="cardProduct-color" style={{backgroundColor:colors[2]}}></div>
            </div>
        </Link>
    );
};

export default CardProduct;