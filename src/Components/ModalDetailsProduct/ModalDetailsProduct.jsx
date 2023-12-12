import React from 'react';
import './ModalDetailsProduct.css';
import { GrClose } from 'react-icons/gr'

const ModalDetailsProduct = ({closeModal, nameProduct, color, amount, price, size}) => {
    return (
        <>
        <div onClick={closeModal} className="backgroundModalDetailsProduct"></div>
        <div className='modalDetailsProduct'>
            <div className="modalDetails-header">
                <span>Product Details </span>
                <button onClick={closeModal}><GrClose/></button>
            </div>
            <div className="modalDetails-body">
                <div className="modalDetails-body-row">
                    <span>Name:</span>
                    <span>{nameProduct}</span>
                </div>
                <div className="modalDetails-body-row">
                    <span>Color:</span>
                    <span>{color}</span>
                </div>
                <div className="modalDetails-body-row">
                    <span>Price:</span>
                    <span>{price}</span>
                </div>
                <div className="modalDetails-body-row">
                    <span>Amount:</span>
                    <span>{amount}</span>
                </div>
                <div className="modalDetails-body-row">
                    <span>Size:</span>
                    <span>{size}</span>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalDetailsProduct;