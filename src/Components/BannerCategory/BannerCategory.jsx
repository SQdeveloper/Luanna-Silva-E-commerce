import React, { useContext } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { ShopContext } from '../../Context/ShopContext';
import './BannerCategory.css';

const BannerCategory = ({amountToShow, title, categorySelected, bgColor}) => {
    const all_products = useContext(ShopContext).data;        
    let filteredProducts = all_products.filter(product => product.category.includes(categorySelected))
    filteredProducts = filteredProducts.slice(0,amountToShow);
    return (
        <section className='bannerCategory' style={{backgroundColor:bgColor}}>
            <h2 className='bannerCategory-title'>{title}</h2>
            <a href="">View All</a>
            <div className="bannerCategory-products">                
                {filteredProducts.map(product=>(                    
                    <CardProduct id={product.id} category={product.category} key={product.id} name={product.name} colors={product.colors} price={product.price} image={product.image}/>
                ))}
            </div>
        </section>
    );
};

export default BannerCategory;