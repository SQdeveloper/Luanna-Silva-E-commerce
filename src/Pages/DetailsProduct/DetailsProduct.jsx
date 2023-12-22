import React, { useContext, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {BiMinus} from 'react-icons/bi'
import {BsPlusLg} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom';
import {ShopContext} from '../../Context/ShopContext';
import ModalAddToCart from '../../Components/ModalAddToCard/ModalAddToCart';
import useLocalStorage from '../../Hooks/useLocalStorage';
import './DetailsProduct.css';

const DetailsProduct = () => {
    let {id} = useParams();
    const all_products = useContext(ShopContext).data;
    const selectedProduct = all_products.filter(product => Number(product.id) === Number(id))[0];        
    const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);    
    const [selectedTalla, setSelectedTalla] = useState('S');
    const [amount, setAmount] = useState(1);
    const [isOpenModal, setIsOpenModal] = useState(false);    
    const [listProductCart, setListProductCart] = useLocalStorage('listProductCart', []);

    //Creo un objeto que tenga toda la información necesaria para mostrar en el carrito
    const createProductObject = (_amount)=>{
        const productObject = {
            'id': selectedProduct.id,
            'name': selectedProduct.name,
            'price': selectedProduct.price,
            'image': selectedProduct.image,
            'amount': _amount,
            'selectedColor': selectedColor,
            'selectedSize': selectedTalla,
        }

        return productObject;
    }

    //Función que se ejecuta cuando se hace click al btn Add to Cart
    const handleBtnAddToCart = ()=>{
        //Abro el modal que muestra el product que es agregado al carrito
        openModal();        
        //Agregamos el producto en el local storage que luego el carrito leera
        addProductToCart();
    }

    const addProductToCart = ()=>{
        let newProductCart;
        //Creo una lista temporal para almacenar todos los productos que estan en el carrito
        let newList = [...listProductCart];

        try {
            //Variable para almacenar el index del producto repetido
            let indexRepeatedProduct = null;
            
            //Verifico si existe un producto que ya este en el carrito
            //y obtengo el index(position) y lo guardo en la variable indexRepeatedProduct
            listProductCart.forEach((product, index)=>{
                if(product.id === selectedProduct.id){                    
                    indexRepeatedProduct = index;//Guardo el index del producto repetido
                }                
            })

            if(indexRepeatedProduct !== null) {     
                //Variable que contiene la cantidad de ropa anterior           
                let lastAmount = listProductCart[indexRepeatedProduct].amount;
                //Variable que contiene la nueva cantidad que se mostrar en el carrito, para eso sumamos 
                //la antidad anterior(lastAmount) con la cantidad actual o nueva(amount)
                let newAmount = amount + lastAmount;
                
                //Creo un array y le agrego toda la información que se necesita para mostrar los productos del cart                
                newProductCart = createProductObject(newAmount);
                
                //Introduzco el producto actualizado(newProductCart) en el lista(newList)
                //y en la misma posición(indexRepeatedProduct) en la que se encontraba
                newList.splice(indexRepeatedProduct,1, newProductCart);
            }
            else {
                //Creo un array y le agrego toda la información que se necesita para mostrar los productos del cart                
                newProductCart = createProductObject(amount);
                
                //Agrego el nuevo producto al carrito a la lista temporal
                newList.push(newProductCart);
            }
            
            //Guardo el valor en el estado listProductCart y también lo guardo en el localStorage
            setListProductCart(newList);                        
        }
        catch(err) {
            console.log(err);
        }
    }

    //Función que abre el modal cuando se hace click en el boton agregar al carrito
    const openModal = ()=>{
        const html = document.querySelector('html');
        html.style.overflow = 'hidden';
        setIsOpenModal(true);
    }

    //Función que cierra el modal
    const closeModal = ()=>{
        const html = document.querySelector('html');
        html.style.overflow = 'auto';
        setIsOpenModal(false);
    }

    //Función que aumenta la cantidad de prendas a comprar
    const increaseAmount = ()=>{
        setAmount(amount=>amount+1);
    }

    //Función que disminuye la cantidad de prendas a comprar
    const decreaseAmount = ()=>{
        if(amount === 1) return;
        setAmount(amount=>amount-1);
    }

    //Función que controlla cuando se elige un color de ropa
    const handleInputColor = (index, e)=>{
        const divColor = document.querySelectorAll('.detailProduct-info-color');

        //Removemos la clase active de todos lo colores
        divColor.forEach(color=>{color.classList.remove('active')});
        //Agregamos la clase active  al color seleccionado
        divColor[index].classList.add('active');

        //Guardamos el color seleccionado en el stado SelectedColor
        setSelectedColor(e.target.value);                
    }

    //Función que controlla cuando se eligé una talla de ropa
    const handleSelectTalla = (e)=>{
        const buttonTalla = document.querySelectorAll('.detailProduct-info-talla');
        
        //Quitamos la clase active para que pierdan el color
        buttonTalla.forEach(btn=>{ btn.classList.remove('active')});

        //Agregamos la clase active para que cambie de color el boton
        e.target.classList.add('active');

        setSelectedTalla(e.target.textContent);
    }

    return (
        <>
            <Header></Header>
            <div className='detailProduct'>
                <div className="detailProduct-image">
                    <img src={selectedProduct.image} alt="" />
                </div>
                <section className="detailProduct-info">
                    <h2 className="detailProduct-info-title">{selectedProduct.name}</h2>
                    <span className="detailProduct-info-price">$ {selectedProduct.price}</span>
                    <hr />
                    <h3 className='detailProduct-info-subtitle'>Size:</h3>
                    <div className="detailProduct-info-contTallas">
                        <button onClick={handleSelectTalla} className="detailProduct-info-talla active">
                            S
                        </button>
                        <button onClick={handleSelectTalla} className="detailProduct-info-talla">
                            M
                        </button>
                        <button onClick={handleSelectTalla} className="detailProduct-info-talla">
                            L
                        </button>
                        <button onClick={handleSelectTalla} className="detailProduct-info-talla">
                            XL
                        </button>
                    </div>
                    <div className="detailProduct-info-contTitleColor">
                        <h3 className='detailProduct-info-subtitle'>Colors Disponibles:</h3>
                        <span>{selectedColor}</span>
                    </div>
                    <div className="detailProduct-info-colors">
                        <div className="detailProduct-info-color active">
                            <input value={selectedProduct.colors[0]} onChange={(e)=>{handleInputColor(0,e)}} name='colors' type='radio' style={{backgroundColor:selectedProduct.colors[0]}}></input>
                        </div>
                        <div className="detailProduct-info-color">
                            <input value={selectedProduct.colors[1]} onChange={(e)=>{handleInputColor(1,e)}} name='colors' type='radio' style={{backgroundColor:selectedProduct.colors[1]}}></input>
                        </div>
                        <div className="detailProduct-info-color">
                            <input value={selectedProduct.colors[2]} onChange={(e)=>{handleInputColor(2,e)}} name='colors' type='radio' style={{backgroundColor:selectedProduct.colors[2]}}></input>
                        </div>
                    </div>
                    <h3 className="detailProduct-info-subtitle">Amount</h3>
                    <div className="detailProduct-info-contAmount">
                        <button onClick={decreaseAmount}><BiMinus className='detailProduct-info-contAmount-btn-icon'/></button>
                        <span>{amount}</span>
                        <button onClick={increaseAmount}><BsPlusLg className='detailProduct-info-contAmount-btn-icon'/></button>
                    </div>
                    <button onClick={handleBtnAddToCart} className='detailProduct-info-btn-addCart'>ADD TO CART</button>
                    <Link onClick={()=>{addProductToCart();window.scrollTo(0)}} to='/LuannaSilva/Cart' className='detailProduct-info-btn-buy' href="">BUY NOW</Link>
                </section>
            </div>
            {isOpenModal && <ModalAddToCart amount={amount} talla={selectedTalla} closeModal={closeModal} name={selectedProduct.name} color={selectedColor} image={selectedProduct.image}/>}
            <Footer/>
        </>
    );
};

export default DetailsProduct;