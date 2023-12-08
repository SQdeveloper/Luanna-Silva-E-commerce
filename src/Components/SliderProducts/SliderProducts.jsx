import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardProduct from '../CardProduct/CardProduct';
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderProducts.css';

const SliderProducts = ({filteredProducts}) => {
    return (
        <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper sliderProducts"
      >
        {filteredProducts.map(product=>(                                
        <SwiperSlide key={product.id}><CardProduct id={product.id} category={product.category} key={product.id} name={product.name} colors={product.colors} price={product.price} image={product.image}/></SwiperSlide>                
        ))}
      </Swiper>
    </>
    );
};

export default SliderProducts;