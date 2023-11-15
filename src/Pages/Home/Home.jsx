import React from 'react';
import Header from '../../Components/Header/Header';
import BannerCategory from '../../Components/BannerCategory/BannerCategory';
import BannerVideo from '../../Components/BannerVideo/BannerVideo';
import Hero from '../../Components/Hero/Hero';
import CardCategory from '../../Components/CardCategory/CardCategory';
import './Home.css';
import CustomerComments from '../../Components/CustomerComments/CustomerComments';

const Home = () => {
    return (
        <>
            <Header activeAnimation={true}/>
            <Hero/>
            <BannerCategory title='Spring' amountToShow={8} bgColor='#fff' categorySelected={'spring'}/>
            <BannerCategory title='Summer' amountToShow={4} bgColor='#f7e7ff' categorySelected={'summer'}/>
            <BannerVideo/> 
            <section className='category'>
                <h2 className='category-title'>Categories</h2>

                <div className="category-contentCards">
                    <CardCategory/>
                    <CardCategory/>
                    <CardCategory/>
                    <CardCategory/>                    
                </div>
            </section>
            <CustomerComments/>
        </>
    );
};

export default Home;