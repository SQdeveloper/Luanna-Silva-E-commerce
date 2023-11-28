import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';


export const FilterByCategory = (category) => {
    const all_products = useContext(ShopContext).data;    
    const filteredProducts = all_products.filter(product=>product.category.includes(category));    

    return filteredProducts;
};

export const FilterByTalla = (talla)=>{
    const all_products = useContext(ShopContext).data;
    const filteredProducts = all_products.filter(product=>product.talla === talla)    

    return filteredProducts;
}