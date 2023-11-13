import React from 'react';
import {CiSearch} from 'react-icons/ci'
import {GrClose} from 'react-icons/gr'
import './InputSearch.css'

const InputSearch = () => {
    
    const closeInputSearch = ()=>{
        const contInputSearch = document.querySelector('.content-input-search')
        contInputSearch.classList.remove('active');
    }

    return (
        <div className='content-input-search'>
            <button onClick={closeInputSearch} className="content-input-search-btn-close">
                <GrClose/>
            </button>
            <div className="input-search">
                <CiSearch/>            
                <input type="text" placeholder='Explore'/>
            </div>
        </div>
    );
};

export default InputSearch;