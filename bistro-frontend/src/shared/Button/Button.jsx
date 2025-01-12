import React from 'react';

const Button = ({buttonText}) => {
    return (
        <div className='flex justify-center my-4'>
            <button className='btn hover:bg-text-primary hover:text-white font-bold outline-none border-0 border-b-4 border-text-primary duration-700 uppercase'>{buttonText}</button>
        </div>
    );
};

export default Button;