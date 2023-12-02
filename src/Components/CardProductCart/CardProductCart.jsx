import React, { useEffect, useState } from 'react';
import {LiaSearchPlusSolid} from 'react-icons/lia'
import {BsEye} from 'react-icons/bs'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiMinus} from 'react-icons/bi'
import {BsPlusLg} from 'react-icons/bs'
import './CardProductCart.css';
import ModalValDelete from '../ModalValDelete/ModalValDelete';

const CardProductCart = ({setListProduct, indexProduct, listProductCart, product, amount, setAmount, price}) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const increaseAmount = ()=>{
        setAmount(amount=> amount +1);
    }

    const decreaseAmount = ()=>{
        if(amount === 1) return;
        setAmount(amount=> amount-1);
    }
    
    const deleteProduct = ()=>{
        let newList = [...listProductCart];        
        newList.splice(indexProduct, 1);
        setListProduct(newList)        
        window.localStorage.setItem('listProductCart', JSON.stringify(newList))
    }

    const OpenModalValidationDelete = ()=> {
        setIsOpenModal(true);
    }

    const CloseModalValidationDelete = ()=>{
        setIsOpenModal(false);
    }

    return (
        <div className='cardProductCart'>
            <div className="cardProductCart-contImg">
                <LiaSearchPlusSolid className='cardProductCart-img-lupa'/>
                <img className='cardProductCart-image-main' src={product.image} alt="image-product" />
            </div>        
            <div className="cardProductCart-info">
                <div className="cardProductCart-info-header">
                    <span className="cardProductCart-info-header-title">
                        {product.name}
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
                    <button onClick={OpenModalValidationDelete}>
                        <TiDeleteOutline/>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
            {isOpenModal && 
                <ModalValDelete deleteProduct={deleteProduct} closeModal={CloseModalValidationDelete}/>
            }
        </div>
    );
};

export default CardProductCart;