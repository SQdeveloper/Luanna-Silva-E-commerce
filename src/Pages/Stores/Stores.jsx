import React from 'react';
import UbicationStore from '../../Components/UbicationStore/UbicationStore';
import locations from '../../DB/locations';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Stores.css';

const Stores = () => {    
    return (
        <>
        <Header/>
        <section className='stores'>
            <h1 className='stores-title'>Stores</h1>
            <p>Know all the locations and schedules of our stores, where you can find our garments and be advised by our fashion assistants.</p>
            <div className="stores-cont-ubications">
                <h2 className='stores-subtitle'>Lima</h2>
                {locations.map(location=>(
                    <UbicationStore 
                        key={location.id}
                        title={location.title}
                        nameLocation={location.nameLocation}
                        workingDays={location.workingDays}
                        locationMap={location.locationMap}
                    />                
                ))}
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default Stores;