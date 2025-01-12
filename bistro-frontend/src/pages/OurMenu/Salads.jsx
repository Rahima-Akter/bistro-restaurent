import React from 'react';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import bannerImg from '../../assets/home/chef-service.jpg';
import MenuItems from '../../shared/MenuItems/MenuItems';
import Button from '../../shared/Button/Button';

const Salads = () => {
    return (
        <div className='my-12'>
            <SharedBanner img={bannerImg} pyl="16" title="Salads" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odio fuga voluptatum praesentium iure velit tempora maiores recusandae excepturi optio?" />
            <div className='lg:w-10/12 w-11/12 mx-auto mt-10'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-0'>
                    <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                    <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                    <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                    <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                    <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                    <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                </div>
                <Button buttonText="order your favourite food" />
            </div>
        </div>
    );
};

export default Salads;