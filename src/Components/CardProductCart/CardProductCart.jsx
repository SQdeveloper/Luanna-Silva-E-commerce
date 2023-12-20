import React, { useEffect, useState } from 'react';
import {LiaSearchPlusSolid} from 'react-icons/lia'
import {BsEye} from 'react-icons/bs'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiMinus} from 'react-icons/bi'
import {BsPlusLg} from 'react-icons/bs'
import ModalValDelete from '../ModalValDelete/ModalValDelete';
import ModalDetailsProduct from '../ModalDetailsProduct/ModalDetailsProduct';
import './CardProductCart.css';

const CardProductCart = ({setListProduct, indexProduct, listProductCart, product, amount, setAmount}) => {

    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);    

    //Función que abre el modal detalles(details)
    const openModalDetails = ()=>{
        const html = document.querySelector('html');
        html.style.overflow = 'hidden';
        setIsOpenModalDetails(true);    
    }
    
    const closeModalDetails = ()=>{
        const html = document.querySelector('html');
        html.style.overflow = 'auto';
        setIsOpenModalDetails(false);

    }

    //Función que aumenta la cantidad de prendas a comprar
    const increaseAmount = ()=>{
        setAmount(amount=> amount +1);
    }

    //Función que disminuye la cantidad de prendas a comprar
    const decreaseAmount = ()=>{
        if(amount === 1) return;
        setAmount(amount=> amount-1);
    }
    
    //Función que borra el producto
    const deleteProduct = ()=>{
        let newList = [...listProductCart];        
        newList.splice(indexProduct, 1);
        setListProduct(newList)        
        window.localStorage.setItem('listProductCart', JSON.stringify(newList))
    }

    //Función que abre el modal para validar el delete
    const OpenModalValidationDelete = ()=> {
        const html = document.querySelector('html');
        html.style.overflow = 'hidden';
        setIsOpenModalDelete(true);        
    }

    //Función que cierra el modal que validad el delete
    const CloseModalValidationDelete = ()=>{
        const html = document.querySelector('html');
        html.style.overflow = 'auto';
        setIsOpenModalDelete(false);     
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
                        <span>MXN {product.price*amount}.00</span>
                    </div>
                </div>
                <div className="cardProductCart-info-footer">
                    <button onClick={openModalDetails}>
                        <BsEye/>
                        <span>View Details</span>
                    </button>                
                    <button onClick={OpenModalValidationDelete}>
                        <TiDeleteOutline/>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
            {isOpenModalDelete && 
                <ModalValDelete deleteProduct={deleteProduct} closeModal={CloseModalValidationDelete}/>
            }
            {isOpenModalDetails && 
                <ModalDetailsProduct closeModal={closeModalDetails} price={product.price} nameProduct={product.name} amount={amount} color={product.selectedColor} size={product.selectedSize}/>
            }
        </div>
    );
};

export default CardProductCart;