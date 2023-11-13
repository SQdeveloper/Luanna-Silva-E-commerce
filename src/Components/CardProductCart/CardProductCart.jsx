import React, { useState } from 'react';
import {LiaSearchPlusSolid} from 'react-icons/lia'
import {BsEye} from 'react-icons/bs'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiMinus} from 'react-icons/bi'
import {BsPlusLg} from 'react-icons/bs'
import './CardProductCart.css';

const CardProductCart = ({setAmount, amount, price}) => {
    

    const increaseAmount = ()=>{
        setAmount(amount => amount+1);
    }

    const decreaseAmount = ()=>{
        if(amount === 1) return;
        setAmount(amount => amount-1);
    }

    return (
        <div className='cardProductCart'>
            <div className="cardProductCart-contImg">
                <LiaSearchPlusSolid className='cardProductCart-img-lupa'/>
                <img src="" alt="" />
            </div>        
            <div className="cardProductCart-info">
                <div className="cardProductCart-info-header">
                    <span className="cardProductCart-info-header-title">
                        Bolsa Coussin PM
                    </span>
                </div>
                <div className="cardProductCart-info-body">
                    <div className="cardProductCart-info-body-t">
                        <span>Color</span>
                        <span>Negro</span>
                    </div>
                    <div className="cardProductCart-info-body-t">
                        <span>Material</span>
                        <span>Fashion Leather</span>
                    </div>
                    <div className="cardProductCart-info-body-down">
                        <div className="cardProductCart-info-amount">
                            <button onClick={decreaseAmount}><BiMinus/></button>
                            <span>{amount}</span>
                            <button onClick={increaseAmount}><BsPlusLg/></button>
                        </div>
                        <span>MXN {price*amount}.00</span>
                    </div>
                </div>
                <div className="cardProductCart-info-footer">
                    <button>
                        <BsEye/>
                        <span>View Details</span>
                    </button>                
                    <button>
                        <TiDeleteOutline/>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProductCart;