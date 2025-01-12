import React from 'react';
import MenuItems from '../../shared/MenuItems/MenuItems';
import Button from '../../shared/Button/Button';
import Title from '../../shared/Title/Title';

const OurMenuHome = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Title title="Our menu" subtitle="Check It Out"></Title>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-0'>
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd"/>
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd"/>
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd"/>
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd"/>
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd"/>
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd"/>
            </div>
            <Button buttonText="view full menu" />
        </div>
    );
};

export default OurMenuHome;