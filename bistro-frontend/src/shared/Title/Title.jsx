import React from 'react';

const Title = (props) => {
    const { subtitle, title } = props;
    return (
        <div className='lg:w-3/12 md:w-2/6 w-3/5 mx-auto py-8'>
            <p className='text-center text-xs text-text-primary border-b border-gray-500 dark:border-white py-2'>---- {subtitle} ----</p>
            <h4 className='font-bold uppercase text-xl text-center border-b border-gray-500 dark:border-white py-2'>{title}</h4>
        </div>
    );

};

export default Title;