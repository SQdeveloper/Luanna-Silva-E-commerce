import React from 'react';
import {GoSearch} from 'react-icons/go'
import {GoPerson} from 'react-icons/go'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {VscMenu} from 'react-icons/vsc'
import {GrClose} from 'react-icons/gr'
import './Header.css'

const Header = () => {    
    const changeColorHeader = ()=>{
        window.addEventListener('scroll', ()=>{
            const header = document.querySelector("header");            

            if(scrollY === 0) {
                header.classList.remove('active');
            }
            else {
                header.classList.add('active');
            }        
        })
    }

    changeColorHeader();
    const openMenu = ()=>{
        const bannerMenu = document.querySelector('.banner-menu');

        bannerMenu.classList.add('active');
    
    }
    const closeMenu = ()=>{
        const bannerMenu = document.querySelector('.banner-menu');

        bannerMenu.classList.remove('active');
    }

    return (
        <header>
            <div className="header-left">
                <button onClick={openMenu} className="header-btn-menu">                    
                    <VscMenu/>                    
                    <span>Menú</span>
                </button>
                <button className="header-btn-search">
                    <GoSearch/>
                    <span>Search</span>
                </button>
            </div>
            <a className='header-title' href="#">LUANNA SILVA</a>
            <div className="header-right">
                <button className='header-btn-account'>
                    <GoPerson/>
                    <span>Account</span>
                </button>
                <button className='header-btn-cart'>
                    <AiOutlineShoppingCart/>
                    <span>Cart</span>
                </button>

            </div>

            <div className="banner-menu">                
                <div className="content-menu">
                    <button onClick={closeMenu} className="content-menu-btn-close">
                        <GrClose/>
                        <span>Close</span>
                    </button>
                    <ul className='content-menu-list'>
                        <li>Holiday Gifts</li>
                        <li>New</li>
                        <li>Bags</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Jewelry</li>
                        <li>Watches</li>
                        <li>Perfumes</li>
                        <li>Art of Living</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;