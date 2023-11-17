import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import './CustomerComments.css';

const CustomerComments = () => {    
    let number = 0;
    const moveSliderRight = ()=>{        
        const buttons = document.querySelectorAll('.swiper-buttons button');
        buttons[0].classList.remove('active');

        if(number === 2) { buttons[1].classList.add('active')}
        if(number === 3) {console.log('top'); return};
        number++;
        const slider  = document.querySelector('.swiper .slider');        
        slider.style.transform = `translateX(-${number*25}%)`;
    }
    
    const moveSliderLeft = ()=>{        
        const buttons = document.querySelectorAll('.swiper-buttons button');
        buttons[1].classList.remove('active');

        if(number === 1) { buttons[0].classList.add('active')}
        if(number === 0) return;
        number--;
        const slider  = document.querySelector('.swiper .slider');        
        slider.style.transform = `translateX(-${number*25}%)`;
    }

    return (
        <div className="swiper">
            <div className="slider">
                <div className="slider-card">
                    <div className='CustomerComments'>                        
                        <div className="CustomerComments-info">
                            <span className='CustomerComments-span'>Our Clients tell about Own</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iusto maiores officiis, voluptas sequi modi id repudiandae quidem dolor mollitia, sed minus aliquid ab ea provident aut nostrum repellat nobis!
                            </p>
                            <span className='CustomerComments-author'>-Monica Sanches</span>                                
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600' className="CustomerComments-img-author" alt='customer-client'/>                         
                        </div>
                    </div>
                </div>            
                <div className="slider-card">
                    <div className='CustomerComments'>                        
                        <div className="CustomerComments-info">
                            <span className='CustomerComments-span'>Our Clients tell about Own</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iusto maiores officiis, voluptas sequi modi id repudiandae quidem dolor mollitia, sed minus aliquid ab ea provident aut nostrum repellat nobis!
                            </p>
                            <span className='CustomerComments-author'>-Monica Sanches</span>    
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600' className="CustomerComments-img-author" alt='customer-client'/>                         
                        </div>
                    </div>
                </div>            
                <div className="slider-card">
                    <div className='CustomerComments'>                        
                        <div className="CustomerComments-info">
                            <span className='CustomerComments-span'>Our Clients tell about Own</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iusto maiores officiis, voluptas sequi modi id repudiandae quidem dolor mollitia, sed minus aliquid ab ea provident aut nostrum repellat nobis!
                            </p>
                            <span className='CustomerComments-author'>-Monica Sanches</span>    
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600' className="CustomerComments-img-author" alt='customer-client'/>                         
                        </div>
                    </div>
                </div>            
                <div className="slider-card">
                    <div className='CustomerComments'>                        
                        <div className="CustomerComments-info">
                            <span className='CustomerComments-span'>Our Clients tell about Own</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iusto maiores officiis, voluptas sequi modi id repudiandae quidem dolor mollitia, sed minus aliquid ab ea provident aut nostrum repellat nobis!
                            </p>
                            <span className='CustomerComments-author'>-Monica Sanches</span>    
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600' className="CustomerComments-img-author" alt='customer-client'/>                         
                        </div>
                    </div>
                </div>            
            </div>
            <div className="swiper-footer">
                <div className="swiper-buttons">
                    <button onClick={moveSliderLeft} className="swiper-button active"><IoChevronBackOutline className='swiper-button-icon'/></button>
                    <button onClick={moveSliderRight} className="swiper-button"><IoChevronForward  className='swiper-button-icon'/></button>
                </div>
            </div>
        </div>        
    );
};

export default CustomerComments;