import React, { useEffect, useRef, useState } from 'react';
import Header from '../../Components/Header/Header';
import CardProduct from '../../Components/CardProduct/CardProduct';
import { IoOptionsOutline } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import './ProductCollection.css';
import Filters from '../../Utils/Filters';
import { useParams } from 'react-router-dom';

const ProductCollection = () => {
    const {collectionName} = useParams();    
    const filteredProducts = Filters(collectionName);
    const [isOpenFilters, setIsOpenFilters] = useState(true);
    const openFilters = ()=>{

    }

    useEffect(()=>{
                
    }, []);

    return (
        <>
            <Header/>
            <section className='productCollection'>
                <h1 className='productCollection-title'>Collection</h1>
                <div className="title-filter">
                            <IoOptionsOutline/>
                            <span>Filters</span>
                            {isOpenFilters ? <IoChevronBack/> : <IoChevronUp/>}                            
                </div>
                <div className="productCollection-groups">
                    <div className="productCollection-group-filters">                        
                        <ul>
                            <li>
                                <h2 className='productCollection-filter-subtitle'>Precio</h2>
                                <div className='group-filter-price'>
                                    <input className='productCollection-filter-price' type="text" placeholder='$/500 solanos'/>
                                    <input className='productCollection-filter-price' type="text" placeholder='$/500 solanos'/>                            
                                </div>
                            </li>
                            <li>
                                <h2 className='productCollection-filter-subtitle'>Talla</h2>                            
                                <label className='productCollection-filter-talla' htmlFor="t">
                                    <input type="checkbox" />
                                    <span>S</span>
                                </label>
                                <label className='productCollection-filter-talla' htmlFor="t">
                                    <input type="checkbox" />
                                    <span>M</span>
                                </label>
                                <label className='productCollection-filter-talla' htmlFor="t">
                                    <input type="checkbox" />
                                    <span>L</span>
                                </label>
                                <label className='productCollection-filter-talla' htmlFor="t">
                                    <input type="checkbox" />
                                    <span>XL</span>
                                </label>
                            </li>
                            <li>
                                <h2 className='productCollection-filter-subtitle'>Colors Disponibles</h2>                            
                                <label htmlFor="" className='productCollection-filter-color'>
                                    <input type="checkbox" />
                                    <span>Red</span>
                                </label>
                                <label htmlFor="" className='productCollection-filter-color'>
                                    <input type="checkbox" />
                                    <span>Blue</span>
                                </label>
                                <label htmlFor="" className='productCollection-filter-color'>
                                    <input type="checkbox" />
                                    <span>Green</span>
                                </label>
                                <label htmlFor="" className='productCollection-filter-color'>
                                    <input type="checkbox" />
                                    <span>Yellow</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="productCollection-group-products">
                        {filteredProducts && 
                            filteredProducts.map((product)=>(
                                <CardProduct key={product.id} id={product.id} category={'none'} colors={product.colors} image={product.image} name={product.name} price={product.price}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductCollection;