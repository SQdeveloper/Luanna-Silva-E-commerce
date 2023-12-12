import React from 'react';
import './ModalValDelete.css';
import { GrClose } from 'react-icons/gr';

const ModalValDelete = ({closeModal, deleteProduct}) => {
    
    const handleClickBtnDelete = ()=>{
        deleteProduct();
        handleHtml()        
    }

    const handleHtml = ()=>{
        const html = document.querySelector('html');
        html.style.overflow = 'auto';
    }
    return (
        <>
        <div onClick={closeModal} className="modalDelete-background"></div>
        <div className='modalDelete'>
            <div className='modalDelete-header'>
                <span>Delete this product</span>
                <button onClick={closeModal}>
                    <GrClose/>
                </button>
            </div>
            <div className='modalDelete-body'>
                <span>Do you want delete this product?</span>
                <div className="modalDelete-buttons">
                    <button onClick={closeModal} className="modalDelete-button">Cancel</button>
                    <button onClick={handleClickBtnDelete} className="modalDelete-button modalDelete-button-delete">Delete</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModalValDelete;