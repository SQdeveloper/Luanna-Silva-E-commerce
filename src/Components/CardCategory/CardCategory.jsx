import React from 'react';
import './CardCategory.css';

const CardCategory = ({bgImage, description, titleCategory}) => {
    return (
        <div className='cardCategory'>
            <img className='cardCategory-img' src={bgImage} alt="img-category" />
            <div className="cardCategory-text">
                <span className='cardCategory-span'>{description}</span>
                <h2 className='cardCategory-title'>{titleCategory}</h2>
            </div>
        </div>
    );
};

export default CardCategory;