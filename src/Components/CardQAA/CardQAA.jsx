import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import './CardQAA.css';

const CardQAA = ({question, answer, id}) => {    
    const handleInputQuestion = (e)=>{                            
    }

    return (
        <div className='cardQAA'>
            <input onClick={handleInputQuestion} type='radio' name={`question`}/>
            <div className="cardQAA-body">
                <div className="cardQAA-header">
                    <h2 className="cardQAA-title">{question}</h2>
                    <div className="cardQAA-icon">
                        <span></span>
                        <span></span>
                    </div>                    
                </div>
                <p className='cardQAA-answer'>{answer}</p>
            </div>
        </div>
    );
};

export default CardQAA;