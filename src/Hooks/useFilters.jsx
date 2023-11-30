import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const useFilters = () => {
    const all_products = useContext(ShopContext).data;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [talla, setTalla] = useState('');
    const [colors, setColors] = useState('');
    const [prices, setPrices] = useState([0, 100]);
    let fp = all_products;
    
    const filterByCategory = ()=>{
        fp = fp.filter(product => product.category.includes(category));                
    }

    const filterByTalla = ()=>{
        if(talla.length === 0) return;

        fp = fp.filter(product => 
            product.talla.includes(talla[0]?.toLocaleLowerCase()) || 
            product.talla.includes(talla[1]?.toLocaleLowerCase()) ||
            product.talla.includes(talla[2]?.toLocaleLowerCase())            
        );        
    }

    const filterByColor = ()=>{
        const products = fp.filter(product => 
            product.colors[0] === colors[0]?.toLowerCase() ||
            product.colors[0] === colors[1]?.toLowerCase() ||
            product.colors[0] === colors[2]?.toLowerCase() ||
            product.colors[0] === colors[3]?.toLowerCase() ||
            product.colors[0] === colors[4]?.toLowerCase() ||
            product.colors[0] === colors[5]?.toLowerCase() ||
            product.colors[0] === colors[6]?.toLowerCase() ||
            product.colors[0] === colors[7]?.toLowerCase() 
            // product.colors[0] === colors[3]?.toLowerCase() 
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
    }, [category, talla, prices, colors]);    

    return {filteredProducts, prices, setCategory, setColors, setPrices, setTalla};
};

export default useFilters;