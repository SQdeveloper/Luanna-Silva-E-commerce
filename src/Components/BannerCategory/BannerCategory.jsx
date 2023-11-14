import React, { useContext } from 'react';
import './BannerCategory.css';
import CardProduct from '../CardProduct/CardProduct';
import { ShopContext } from '../../Context/ShopContext';

const BannerCategory = () => {
    const all_products = useContext(ShopContext).data;        

    return (
        <section className='bannerCategory'>
            <h2 className='bannerCategory-title'>title</h2>
            <a href="">View All</a>
            <div className="bannerCategory-products">                
                {all_products.map(product=>(
                    <CardProduct name={product.name} colors={product.colors} price={product.price} image={product.image}/>
                ))}
            </div>
        </section>
    );
};

export default BannerCategory;