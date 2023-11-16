import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = ({fComponent}) => {
    return (
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>{fComponent}</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>       
      </Swiper>
    </>
    );
};

export default Slider;