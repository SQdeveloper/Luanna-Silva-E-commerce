import React from 'react';
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const closeMenu = ()=>{
        const bannerMenu = document.querySelector('.banner-menu');
        bannerMenu.classList.remove('active');
    }

    return (
        <>
        <div onClick={closeMenu} className="banner-menu"></div>
        <div className="content-menu">
            <button onClick={closeMenu} className="content-menu-btn-close">
                <GrClose/>
                <span>Close</span>
            </button>
            <ul className='content-menu-list'>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/New'><span>New</span></Link></li>                        
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Women'><span>Women</span></Link></li>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Men'><span>Men</span></Link></li>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Kids' ><span>Kids</span></Link></li>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Spring' ><span>Spring</span></Link></li>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Summer' ><span>Summer</span></Link></li>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Winter' ><span>Winter</span></Link></li>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Autumn' ><span>Autumn</span></Link></li>
                <li><Link onClick={()=>{closeMenu();window.scrollTo(0,0)}} to='/Collection/Bags' ><span>Bags</span></Link></li>
            </ul>
        </div>
        </>
    );
};

export default Menu;