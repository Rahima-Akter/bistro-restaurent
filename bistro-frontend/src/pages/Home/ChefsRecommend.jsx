import React from 'react';
import Title from '../../shared/Title/Title';
import FoodCard from '../../shared/FoodCards/FoodCard';

const ChefsRecommend = () => {
    return (
        <div className='lg:w-10/12 md:w-11/12 w-9/12 mx-auto'>
            <Title subtitle="Should Try" title="Chefs Recommandations"></Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            </div>
        </div>
    );
};

export default ChefsRecommend;