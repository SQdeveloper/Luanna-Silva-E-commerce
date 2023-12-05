import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import './UbicationStore.css';

const UbicationStore = ({title, nameLocation, workingDays, locationMap}) => {
    return (
        <>
        <div className='ubicationStore'>
            <h3 className='ubicationStore-title'>{title}</h3>
            <p>{nameLocation}</p>            
            <p>{workingDays}</p>
            <a target='_blank' className='ubicationStore-ancle' href={locationMap}>
                <SlLocationPin />
                <span>go to the address</span>
            </a>
        </div>
        </>
    );
};

export default UbicationStore;