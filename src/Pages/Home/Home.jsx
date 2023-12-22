import React from 'react';
import Header from '../../Components/Header/Header';
import BannerCategory from '../../Components/BannerCategory/BannerCategory';
import BannerVideo from '../../Components/BannerVideo/BannerVideo';
import Hero from '../../Components/Hero/Hero';
import CardCategory from '../../Components/CardCategory/CardCategory';
import CustomerComments from '../../Components/CustomerComments/CustomerComments';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

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
                    <Link onClick={()=>{window.scrollTo(0,0)}} to='/Collection/Autumn'><CardCategory titleCategory={'Autumn Clothing'} description={'We love autumn'} bgImage={'../assets/img/models/modelCategory1.jpg'}/></Link>
                    <Link onClick={()=>{window.scrollTo(0,0)}} to='/Collection/Kids'><CardCategory titleCategory={"Kids Clothing"} description={'We love kids'} bgImage={'../assets/img/models/modelCategory2.jpg'}/></Link>
                    <Link onClick={()=>{window.scrollTo(0,0)}} to='/Collection/Bags'><CardCategory titleCategory={'Bags'} description={'We love bags'} bgImage={'../assets/img/models/modelCategory3.jpg'}/></Link>
                    <Link onClick={()=>{window.scrollTo(0,0)}} to='/Collection/New'><CardCategory titleCategory={'New'} description={'We love fashion'} bgImage={'../assets/img/models/modelCategory4.jpg'}/>                    </Link>
                </div>
            </section>
            <CustomerComments/>            
            <Footer/>
        </>
    );
};

export default Home;