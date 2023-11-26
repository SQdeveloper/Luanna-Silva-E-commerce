import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Filters = (category) => {
    const all_products = useContext(ShopContext).data;
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterByCategory = ()=>{
        const fp = all_products.filter(product=>product.category.includes(category));        
        setFilteredProducts(fp);        
    }

    useEffect(()=>{
        filterByCategory();
        console.log('updateeeeeeee')
    },[category])

    return filteredProducts;
};

export default Filters;