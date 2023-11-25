import React, { useEffect } from 'react';
import {GoSearch} from 'react-icons/go'
import {GoPerson} from 'react-icons/go'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {VscMenu} from 'react-icons/vsc'
import {GrClose} from 'react-icons/gr'
import InputSearch from '../InputSearch/InputSearch';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = ({activeAnimation}) => {    
    
    const openInputSearch = ()=>{
        const contInputSearch = document.querySelector('.content-input-search')

        contInputSearch.classList.add('active');
    }

    const changeColorHeader = ()=>{             
        const header = document.querySelector("header");                        

        //Si la variable activeAnimation es false, entonces no se activa
        //el cambio de color del header cuando se hace scroll
        //Lo que hacemos es activar desde un principio el color nego en las palabras del header.
        if(!activeAnimation) {
            header.classList.add('active');            
            return;
        }        

        //Cuando hacemos scroll se va a cambiar el color del background y de las letras del header
        window.addEventListener('scroll', ()=>{
            if(scrollY === 0) {
                header.classList.remove('active');//Activamos la clase active en el elemento header
            }
            else {
                header.classList.add('active');//Desactivamos la clase active en el elemento header
            }        
        })
    }

    const openMenu = ()=>{
        const bannerMenu = document.querySelector('.banner-menu');

        bannerMenu.classList.add('active');
    
    }
    const closeMenu = ()=>{
        const bannerMenu = document.querySelector('.banner-menu');

        bannerMenu.classList.remove('active');
    }
    
    useEffect(()=>{        
        changeColorHeader();
    }, []);


    return (
        <header>
            <div className="header-left">
                <button onClick={openMenu} className="header-btn-menu">                    
                    <VscMenu/>                    
                    <span>Menú</span>
                </button>
                <button onClick={openInputSearch} className="header-btn-search">
                    <GoSearch/>
                    <span>Search</span>
                </button>
            </div>
            <Link className='header-title' to={'/'}>LUANNA SILVA</Link>
            <div className="header-right">
                <button className='header-btn-account'>
                    <GoPerson/>
                    <Link to='/Account'>Account</Link>
                </button>
                <button className='header-btn-cart'>
                    <AiOutlineShoppingCart/>
                    <Link to={'/Cart'}>Cart</Link>
                </button>
            </div>

            <div className="banner-menu">                
                <div className="content-menu">
                    <button onClick={closeMenu} className="content-menu-btn-close">
                        <GrClose/>
                        <span>Close</span>
                    </button>
                    <ul className='content-menu-list'>
                        <li><Link to='/Collection'>New</Link></li>                        
                        <li><a href="">Women</a></li>
                        <li><a href="">Men</a></li>
                        <li><a href="">Kids</a></li>
                        <li><a href="">Spring</a></li>
                        <li><a href="">Summer</a></li>
                        <li><a href="">Winter</a></li>
                        <li><a href="">Autumn</a></li>
                        <li><a href="">Bags</a></li>
                    </ul>
                </div>
            </div>
            <InputSearch/>
        </header>
    );
};

export default Header;