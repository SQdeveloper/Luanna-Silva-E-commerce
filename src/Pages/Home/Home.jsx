import React from 'react';
import Header from '../../Components/Header/Header';
import BannerCategory from '../../Components/BannerCategory/BannerCategory';
import BannerVideo from '../../Components/BannerVideo/BannerVideo';
import Hero from '../../Components/Hero/Hero';
import CardCategory from '../../Components/CardCategory/CardCategory';
import CustomerComments from '../../Components/CustomerComments/CustomerComments';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header activeAnimation={true}/>
            <Hero/>
            <BannerCategory title='Spring' amountToShow={10} bgColor='#fff' categorySelected={'spring'}/>
            <BannerCategory title='Summer' amountToShow={5} bgColor='#faf3fd' categorySelected={'summer'}/>
            <BannerVideo/> 
            <section className='category'>
                <h2 className='category-title'>Categories</h2>

                <div className="category-contentCards">                    
                    <CardCategory titleCategory={'Vestidos & Enterizos'} description={'We love the dress'} bgImage={'../src/assets/img/models/modelCategory1.jpg'}/>
                    <CardCategory titleCategory={'Blusas & Tops'} description={'We love the details'} bgImage={'../src/assets/img/models/modelCategory2.jpg'}/>
                    <CardCategory titleCategory={'Lo nuevo'} description={'New in store'} bgImage={'../src/assets/img/models/modelCategory3.jpg'}/>
                    <CardCategory titleCategory={'ofertas & sale'} description={'We love the dress'} bgImage={'../src/assets/img/models/modelCategory4.jpg'}/>                    
                </div>
            </section>
            <CustomerComments/>            
        </>
    );
};

export default Home;