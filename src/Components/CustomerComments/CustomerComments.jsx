import React from 'react';
import { IoIosStar } from "react-icons/io";
import './CustomerComments.css';

const CustomerComments = () => {
    return (
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
    );
};

export default CustomerComments;