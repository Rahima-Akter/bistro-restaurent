import React from 'react';
import Title from '../../shared/Title/Title';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import TestimonialContents from '../../component/TestimonialContents';

const Testimonials = () => {
    return (
        <div className='lg:w-7/12 w-11/12 mx-auto md:my-12 my-5'>
            <Title title="testimonials" subtitle="What Our Clients Say" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <TestimonialContents description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci vitae voluptates dignissimos totam ratione, harum, distinctio porro atque iure modi tempore, accusantium quaerat repellendus." name="jane doe"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialContents description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci vitae voluptates dignissimos totam ratione, harum, distinctio porro atque iure modi tempore, accusantium quaerat repellendus." name="jane done"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialContents description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci vitae voluptates dignissimos totam ratione, harum, distinctio porro atque iure modi tempore, accusantium quaerat repellendus." name="jane done"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialContents description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci vitae voluptates dignissimos totam ratione, harum, distinctio porro atque iure modi tempore, accusantium quaerat repellendus." name="jane done"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialContents description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci vitae voluptates dignissimos totam ratione, harum, distinctio porro atque iure modi tempore, accusantium quaerat repellendus." name="jane done"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialContents description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci vitae voluptates dignissimos totam ratione, harum, distinctio porro atque iure modi tempore, accusantium quaerat repellendus." name="jane done"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;