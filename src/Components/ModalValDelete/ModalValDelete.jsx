import React from 'react';
import './ModalValDelete.css';

const ModalValDelete = ({closeModal, deleteProduct}) => {
    return (
        <>
        <div className="modalDelete-background"></div>
        <div className='modalDelete'>
            <div className='modalDelete-header'>
                <span>Delete this product</span>
                x
            </div>
            <div className='modalDelete-body'>
                <span>Do you want delete this product?</span>
                <div className="modalDelete-buttons">
                    <button className="modalDelete-button">Cancel</button>
                    <button onClick={deleteProduct} className="modalDelete-button">Delete</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalValDelete;