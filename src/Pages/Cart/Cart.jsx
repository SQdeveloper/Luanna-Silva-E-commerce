import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import CardProductCart from '../../Components/CardProductCart/CardProductCart';
import {LiaCcAmazonPay} from 'react-icons/lia'
import {PiTruckLight} from 'react-icons/pi'
import {MdOutlineCurrencyExchange} from 'react-icons/md'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {   
    const [amount, setAmount] = useState(1);    
    const [price, setPrice]   = useState(300);
    const [listProductCart, setListProductCart] = useState([]);

    useEffect(()=>{
        let list = window.localStorage.getItem('listProductCart');
        list = JSON.parse(list);
        setListProductCart(list);        
    }, []);

    useEffect(()=>{
        const btnAdvancePayment = document.querySelector('.cart-btn-advance-payment');
        const btnPaypal = document.querySelector('.cart-btn-paypal');

        if(listProductCart.length === 0) {
            btnAdvancePayment.classList.add('inactive');
            btnPaypal.classList.add('inactive');
        } else {
            btnAdvancePayment.classList.remove('inactive');
            btnPaypal.classList.remove('inactive');        
        }
    }, [listProductCart])

    return (
        <>
        <Header activeAnimation={false}/>
        <div className='cart'>
            <div className="cart-left">
                <section className="cart-section-title">
                    <h2>My Shopping Cart</h2>
                    <Link to='/'>Continue shopping</Link>
                </section>                
                {
                    listProductCart !== null && listProductCart?.length !== 0 ? 
                    listProductCart?.map((pr,index)=>(
                        <CardProductCart key={pr.id} indexProduct={index} setListProduct={setListProductCart} listProductCart={listProductCart} product={pr} setAmount={setAmount} amount={pr.amount}/>
                    )) 
                    :
                    <div className='cart-message-not-found'>
                        <span className='cart-message-not-found-title'>Your shopping cart is empty</span>
                        <Link to='/' className='cart-message-not-found-button'>Continue Shopping</Link>
                    </div>
                }
            </div>
            <div className="cart-right">
                <div className="cart-right-info-price">
                    <div className="cart-right-price">
                        <span>Subtotal</span>
                        <span>MXN {price*amount}</span>
                    </div>
                    <div className="cart-right-price">
                        <span>Delivery</span>
                        <span>MXN 0.00</span>
                    </div>
                    <div className="cart-right-price">
                        <span>Total</span>
                        <span>MXN {price*amount}</span>
                    </div>

                    <button className="cart-btn-advance-payment">
                        Advance Payment
                    </button>
                    <button className="cart-btn-paypal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="25" viewBox="0 0 95 25" aria-hidden="true"><g fill="#FFF"><path d="M35.435 6.04h-5.17a.717.717 0 00-.71.606l-2.092 13.26a.428.428 0 00.426.496h2.469a.718.718 0 00.71-.606l.564-3.576a.719.719 0 01.709-.608h1.637c3.406 0 5.372-1.648 5.885-4.914.231-1.429.01-2.552-.66-3.338-.734-.863-2.038-1.32-3.768-1.32zm.596 4.843c-.282 1.855-1.7 1.855-3.07 1.855h-.781l.547-3.465a.431.431 0 01.426-.364h.358c.933 0 1.814 0 2.27.533.27.317.354.789.25 1.44zm14.86-.06h-2.476a.431.431 0 00-.426.363l-.11.693-.173-.251c-.536-.778-1.731-1.038-2.924-1.038-2.736 0-5.073 2.072-5.528 4.98-.237 1.45.1 2.836.922 3.803.754.89 1.834 1.26 3.119 1.26 2.204 0 3.427-1.418 3.427-1.418l-.11.688a.429.429 0 00.424.499h2.23a.718.718 0 00.71-.607l1.339-8.475a.43.43 0 00-.424-.497zm-3.452 4.819c-.239 1.414-1.361 2.364-2.793 2.364-.72 0-1.294-.23-1.663-.668-.366-.434-.505-1.051-.388-1.74.223-1.402 1.364-2.382 2.774-2.382.703 0 1.275.233 1.651.674.378.445.527 1.067.42 1.752zm16.639-4.82h-2.489a.727.727 0 00-.595.316l-3.431 5.055-1.455-4.858a.72.72 0 00-.69-.512h-2.444a.431.431 0 00-.409.57l2.74 8.043-2.576 3.637a.43.43 0 00.351.681h2.485a.714.714 0 00.59-.309L64.432 11.5a.43.43 0 00-.353-.676zm8.238-4.782h-5.172a.718.718 0 00-.709.606l-2.091 13.26a.427.427 0 00.425.496h2.653c.248 0 .458-.18.496-.424l.594-3.758a.719.719 0 01.709-.608h1.636c3.407 0 5.372-1.648 5.886-4.914.232-1.429.009-2.552-.66-3.338-.734-.863-2.037-1.32-3.767-1.32zm.596 4.843c-.282 1.855-1.7 1.855-3.071 1.855h-.78l.549-3.465a.43.43 0 01.425-.364h.357c.933 0 1.815 0 2.27.533.271.317.354.789.25 1.44zm14.859-.06h-2.475a.43.43 0 00-.425.363l-.11.693-.173-.251c-.536-.778-1.73-1.038-2.924-1.038-2.736 0-5.072 2.072-5.527 4.98-.236 1.45.099 2.836.921 3.803.756.89 1.834 1.26 3.119 1.26 2.205 0 3.427-1.418 3.427-1.418l-.11.688a.43.43 0 00.426.499h2.23a.719.719 0 00.709-.607l1.338-8.475a.43.43 0 00-.427-.497zm-3.452 4.819c-.237 1.414-1.361 2.364-2.793 2.364-.718 0-1.294-.23-1.663-.668-.366-.434-.503-1.051-.388-1.74.224-1.402 1.364-2.382 2.774-2.382.703 0 1.275.233 1.651.674.38.445.529 1.067.42 1.752zm6.37-9.238l-2.121 13.501a.43.43 0 00.424.497h2.134a.716.716 0 00.71-.606l2.093-13.258a.434.434 0 00-.425-.499h-2.39a.432.432 0 00-.424.365z"></path><path fillOpacity=".5" d="M17.922 6.734c-.02.135-.045.274-.072.416-.935 4.802-4.135 6.46-8.221 6.46H7.547c-.5 0-.921.363-.999.856l-1.065 6.756-.302 1.915c-.024.154.02.31.121.43a.536.536 0 00.405.186h3.69a.889.889 0 00.877-.749l.036-.187.695-4.41.045-.241a.887.887 0 01.877-.75h.552c3.575 0 6.374-1.452 7.192-5.653.342-1.754.165-3.22-.74-4.25a3.505 3.505 0 00-1.01-.779z"></path><path d="M16.944 6.344a7.425 7.425 0 00-.91-.202 11.6 11.6 0 00-1.834-.134H8.642a.885.885 0 00-.876.75l-1.183 7.49-.034.218c.076-.492.5-.856.999-.856h2.08c4.087 0 7.287-1.66 8.222-6.46.028-.142.051-.28.072-.416a4.88 4.88 0 00-.768-.324l-.21-.066z" opacity=".8"></path><path d="M7.766 6.758a.883.883 0 01.876-.749H14.2c.659 0 1.274.043 1.835.134.38.06.754.149 1.12.267.275.091.532.2.768.324.278-1.774-.002-2.982-.962-4.076-1.057-1.205-2.966-1.72-5.41-1.72h-7.09c-.5 0-.925.362-1.003.856L.505 20.518a.607.607 0 00.601.704h4.378l1.1-6.974 1.182-7.49z"></path></g></svg>
                    </button>
                </div>
                <div className="cart-right-info-cards">
                    <div className="cart-right-info-card">
                        <LiaCcAmazonPay className='cart-right-info-card-icon'/>
                        <div className="cart-right-info-card-i">
                            <span>Payments</span>
                            <p>Accepted credit cards: Visa, American Express and MasterCard</p>
                        </div>
                    </div>
                    <div className="cart-right-info-card">
                        <PiTruckLight className='cart-right-info-card-icon'/>
                        <div className="cart-right-info-card-i">
                            <span>Shipments</span>
                            <p>standard courtesy shipping</p>
                        </div>
                    </div>
                    <div className="cart-right-info-card">
                        <MdOutlineCurrencyExchange className='cart-right-info-card-icon'/>
                        <div className="cart-right-info-card-i">
                            <span>Returns and Exchanges</span>
                            <p>Free of charge</p>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        </>
    );
};

export default Cart;