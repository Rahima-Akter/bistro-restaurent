import React from 'react';
import Button from '../Button/Button';

const FoodCard = () => {
    return (
        <div class="max-w-xs overflow-hidden bg-[#F3F3F3] rounded-lg shadow-lg dark:bg-gray-800 text-center pb-">
            <img class="object-cover w-full h-40" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />
            <div class="px-4 py-2">
                <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <Button buttonText="add to cart" pb="5" />
        </div>
    );
};

export default FoodCard;