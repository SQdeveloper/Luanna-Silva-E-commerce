import React from 'react';
import './ProductCollection.css';

const ProductCollection = () => {
    return (
        <section className='productCollection'>
            <h1 className='productCollection-title'>Collection</h1>
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
                                <span>xxxxx</span>
                            </label>
                            <label className='productCollection-filter-talla' htmlFor="t">
                                <input type="checkbox" />
                                <span>xxxxx</span>
                            </label>
                            <label className='productCollection-filter-talla' htmlFor="t">
                                <input type="checkbox" />
                                <span>xxxxx</span>
                            </label>
                            <label className='productCollection-filter-talla' htmlFor="t">
                                <input type="checkbox" />
                                <span>xxxxx</span>
                            </label>
                        </li>
                        <li>
                            <h2 className='productCollection-filter-subtitle'>Colors Disponibles</h2>
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                        </li>
                    </ul>
                </div>
                <div className="productCollection-group-products">

                </div>
            </div>
        </section>
    );
};

export default ProductCollection;