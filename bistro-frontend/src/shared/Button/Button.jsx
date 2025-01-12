import React from 'react';

const Button = ({buttonText, mt, mb, pb}) => {
    return (
        <div className={`flex justify-center mt-${mt} mb-${mb} pb-${pb}`}>
            <button className='btn hover:bg-text-primary hover:text-white font-bold outline-none border-0 border-b-4 border-text-primary duration-700 uppercase'>{buttonText}</button>
        </div>
    );
};

export default Button;