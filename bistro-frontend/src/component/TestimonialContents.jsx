import React from 'react';
import { FaStar } from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';

const TestimonialContents = ({ description, name }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col gap-2 md:px-20 px-12 text-center'>
                <div className='flex gap-2 justify-center items-center'>
                    <FaStar className='text-text-primary text-2xl' />
                    <FaStar className='text-text-primary text-2xl' />
                    <FaStar className='text-text-primary text-2xl' />
                    <FaStar className='text-text-primary text-2xl' />
                    <FaStar className='text-text-primary text-2xl' />
                </div>
                <div className='flex justify-center items-center my-2'>
                    <ImQuotesLeft className='text-3xl' />
                </div>
                <p className='md:text-lg text-xs'>{description}</p>
                <h3 className='text-text-primary md:text-3xl text-2xl'>{name}</h3>
            </div>
        </div>
    );
};

export default TestimonialContents;