import React from 'react';
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import './ModalAddToCart.css';

const ModalAddToCart = ({talla, closeModal, image, color, name, amount}) => {
    return (
        <>
            <div onClick={closeModal} className="modal-background"></div>        
            <div className='modal'>
                    <div className="modal-header">
                        <span className="modal-title">Added to Cart</span>
                        <button onClick={closeModal}><GrClose/></button>
                    </div>
                    <div className="modal-body">
                        <img src={image} alt="" className="modal-imageProduct" />
                        <div className="modal-info">
                            <span className="modal-info-name">{name}</span>
                            <span className="modal-info-color">Color: {color}</span>
                            <span className="modal-info-talla">Size: {talla}</span>
                            <span className="modal-info-amount">Amount: {amount}</span>                            
                        </div>
                    </div>
                    <Link to='/Cart' className="modal-button-view">View my cart</Link>
                    <button onClick={closeModal} className="modal-button-followShoping">Follow Shoping</button>
                </div>
        </>

    );
};

export default ModalAddToCart;