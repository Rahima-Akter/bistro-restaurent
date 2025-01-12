import React from 'react';
import Banner from './Banner';
import OrderOnline from './OrderOnline';
import ChefImageTitleDiv from '../../shared/ChefImageTitleDiv/ChefImageTitleDiv';
import CallUs from './CallUs';
import ChefsRecommend from './ChefsRecommend';
import FromOurMenu from './FromOurMenu';
import Testimonials from './Testimonials';
import OurMenuHome from './OurMenuHome';

const Home = () => {
    return (
        <div>
            <Banner />
            <OrderOnline />
            <ChefImageTitleDiv title="bistro boss" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores fugiat enim adipisci praesentium vitae nihil rerum, dolorum et reiciendis ut quisquam accusamus nobis nemo laboriosam eos natus assumenda consectetur unde aliquid repudiandae quo? In molestias assumenda quod ab asperiores!"/>
            <OurMenuHome/>
            <CallUs/>
            <ChefsRecommend/>
            <FromOurMenu/>
            <Testimonials/>
        </div>
    );
};

export default Home;