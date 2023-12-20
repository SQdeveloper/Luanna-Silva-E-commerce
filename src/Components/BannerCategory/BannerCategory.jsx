import React, { useContext } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import SliderProducts from '../SliderProducts/SliderProducts';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import './BannerCategory.css';

const BannerCategory = ({amountToShow, title, categorySelected, bgColor}) => {
    const all_products = useContext(ShopContext).data;        
    let filteredProducts = all_products.filter(product => product.category.includes(categorySelected))
    filteredProducts = filteredProducts.slice(0,amountToShow);
    
    return (
        <section className='bannerCategory' style={{backgroundColor:bgColor}}>
            <h2 className='bannerCategory-title'>{title}</h2>
            <Link onClick={()=>{window.scrollTo(0)}} to={`/Collection/${categorySelected}`} href="">View All</Link>
            <div className="bannerCategory-products">                
                {filteredProducts.map(product=>(                    
                    <CardProduct id={product.id} category={product.category} key={product.id} name={product.name} colors={product.colors} price={product.price} image={product.image}/>
                ))}
            </div>
            <SliderProducts filteredProducts={filteredProducts}/>
        </section>
    );
};

export default BannerCategory;