import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const useFilters = () => {
    const all_products = useContext(ShopContext).data;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [talla, setTalla] = useState('');
    const [color, setColor] = useState('');
    const [prices, setPrices] = useState([0, 100]);
    let fp = all_products;
    
    const filterByCategory = ()=>{
        fp = fp.filter(product => product.category.includes(category));                
    }

    const filterByTalla = ()=>{
        fp = fp.filter(product => product.talla.includes(talla));        
    }

    const filterByColor = ()=>{
        const products = fp.filter(product => 
            product.colors[0] === color
        )        
        
        if (products.length === 0) return;
        fp = products;
    }
    
    const filterByPrice = ()=>{
        const products = fp.filter(product =>
            product.price >= prices[0] && product.price <= prices[1]    
        )

        if(products.length === 0) return;
        fp = products;
    }

    useEffect(()=>{
        filterByCategory();        
        filterByTalla();
        filterByColor();
        filterByPrice();
        setFilteredProducts(fp);
    }, [category, talla, prices]);    

    return {filteredProducts, prices, setCategory, setColor, setPrices, setTalla};
};

export default useFilters;