import React from 'react';
import { IoIosStar } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import '../Slider/Slider.css'
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
                            <span className='CustomerComments-span'>what our customers say</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">
                                I am completely impressed with this clothing store. The quality of their garments is unbeatable, and the level of detail they put into each one is admirable. I love the blouses they offer, which are absolutely in tune with current fashion trends. The floral prints really enhance my femininity and make me feel comfortable and attractive, it's just amazing!
                            </p>
                            <span className='CustomerComments-author'>-Jessica Torres</span>    
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='../src/assets/img/customers/client3.jpg' className="CustomerComments-img-author" alt='customer-client'/>                         
                        </div>
                    </div>
                </div>        
                <div className="slider-card">
                    <div className='CustomerComments'>                        
                        <div className="CustomerComments-info">
                            <span className='CustomerComments-span'>what our customers say</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">
                                I love the quality of their garments and especially the detail they have, I like the models of blouses they have, it goes a lot with the trend of the summer and good floral prints makes one look much more feminine and I love it, because I feel comfortable and pretty❤️.
                            </p>
                            <span className='CustomerComments-author'>-Monica Sanches</span>                                
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='../src/assets/img/customers/client1.jpg' className="CustomerComments-img-author" alt='customer-client'/>                         
                        </div>
                    </div>
                </div>            
                <div className="slider-card">
                    <div className='CustomerComments'>                        
                        <div className="CustomerComments-info">
                            <span className='CustomerComments-span'>what our customers say</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">
                                This clothing store has exceeded all my expectations. The quality of their garments is impressive, and the care they put into every detail shows. I love the models of blouses they have, which are completely aligned with current fashion trends. The floral prints really bring out my femininity and make me feel comfortable and beautiful, it's just amazing!
                            </p>
                            <span className='CustomerComments-author'>-Marina Valdez</span>    
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='../src/assets/img/customers/client2.jpg' className="CustomerComments-img-author" alt='customer-client'/>                         
                        </div>
                    </div>
                </div>                                
                <div className="slider-card">
                    <div className='CustomerComments'>                        
                        <div className="CustomerComments-info">
                            <span className='CustomerComments-span'>what our customers say</span>      
                            <div className="CustomerComments-stars">
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                                <IoIosStar/>
                            </div>
                            <p className="CustomerComments-comment">                            
                                I am absolutely delighted with this clothing store. The quality of the garments is exceptional, and the detail they put into each piece is evident. I especially love the blouses they have, which are totally in line with current fashion trends. The floral prints are so feminine and make me feel both comfortable and attractive. It's a wonderful shopping experience every time.                            
                            </p>
                            <span className='CustomerComments-author'>-Melissa Alegre</span>    
                        </div>
                        <div className="CustomerComments-contImg">
                            <img src='../src/assets/img/customers/client4.jpg' className="CustomerComments-img-author" alt='customer-client'/>                         
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