import React, { useEffect } from 'react';
import {GoSearch} from 'react-icons/go'
import {GoPerson} from 'react-icons/go'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {VscMenu} from 'react-icons/vsc'
import InputSearch from '../InputSearch/InputSearch';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
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
    
    useEffect(()=>{        
        changeColorHeader();
    }, []);


    return (
        <header>
            <div className="header-left">
                <button onClick={openMenu} className="header-btn-menu">                    
                    <VscMenu/>                    
                    <span>Menu</span>
                </button>
                <button onClick={openInputSearch} className="header-btn-search">
                    <GoSearch/>
                    <span>Search</span>
                </button>
            </div>
            <Link onClick={()=>{window.scrollTo(0,0)}} className='header-title' to={'/'}>LUANNA SILVA</Link>
            <div className="header-right">                
                <Link onClick={()=>{window.scrollTo(0,0)}} className='header-btn-account' to='/Account'>
                    <GoPerson/>
                    <span>Account</span>
                </Link>                                
                <Link onClick={()=>{window.scrollTo(0,0)}} className='header-btn-cart' to={'/Cart'}>
                    <AiOutlineShoppingCart/>
                    <span>Cart</span>
                </Link>                
            </div>

            <Menu/>
            <InputSearch/>
        </header>
    );
};

export default Header;