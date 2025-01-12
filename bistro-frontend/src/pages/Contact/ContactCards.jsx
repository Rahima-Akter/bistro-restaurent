import React from 'react';
import { FaAddressBook, FaClock, FaPhone } from 'react-icons/fa';

const ContactCards = () => {
    return (
        <div className='lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div class="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="w-1/3 bg-cover h-24" style={{
                    backgroundImage: `url('https://thumbs.dreamstime.com/b/foodie-avid-passionate-lover-food-dining-experienc-experiences-who-enjoys-exploring-new-cuisines-flavors-culinary-trends-328635696.jpg')`
                }}></div>
                <div class="w-2/3 p-2">
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white uppercase flex items-center gap-2">Phone <span><FaPhone className='text-sm' /></span></h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><a href="tel:+88">+88 01823456789</a></p>
                </div>
            </div>
            <div class="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="w-1/3 bg-cover h-24" style={{
                    backgroundImage: `url('https://thumbs.dreamstime.com/b/foodie-avid-passionate-lover-food-dining-experienc-experiences-who-enjoys-exploring-new-cuisines-flavors-culinary-trends-328635696.jpg')`
                }}></div>
                <div class="w-2/3 p-2">
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white uppercase flex items-center gap-2">address<span><FaAddressBook className='text-sm' /></span></h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><a href="tel:+88">+88 01823456789</a></p>
                </div>
            </div>
            <div class="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="w-1/3 bg-cover h-24" style={{
                    backgroundImage: `url('https://thumbs.dreamstime.com/b/foodie-avid-passionate-lover-food-dining-experienc-experiences-who-enjoys-exploring-new-cuisines-flavors-culinary-trends-328635696.jpg')`
                }}></div>
                <div class="w-[80%] p-2">
                    <h1 class="text-lg font-bold text-gray-800 dark:text-white uppercase flex items-center gap-2">working hours<span><FaClock className='text-sm' /></span></h1>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><a href="tel:+88">+88 01823456789</a></p>
                </div>
            </div>
        </div >
    );
};

export default ContactCards;