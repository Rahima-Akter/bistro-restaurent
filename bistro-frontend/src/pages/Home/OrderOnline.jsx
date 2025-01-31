import React from 'react';
import Title from '../../shared/Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const OrderOnline = () => {

    return (
        <div className='lg:w-10/12 w-11/12 mx-auto md:-mt-0 -mt-44'>
            <Title subtitle="From 11:00am to 10:00pm" title="ORDER ONLINE" />
            <Swiper
                slidesPerView={2}
                breakpoints={{
                    // Breakpoints for responsive behavior
                    768: {
                      slidesPerView: 5, // 5 slides for screens 768px and larger
                    },
                  }}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default OrderOnline;