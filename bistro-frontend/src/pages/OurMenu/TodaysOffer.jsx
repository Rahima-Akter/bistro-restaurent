import Button from '../../shared/Button/Button';
import MenuItems from '../../shared/MenuItems/MenuItems';
import Title from '../../shared/Title/Title';

const TodaysOffer = () => {
    return (
        <div className='lg:w-10/12 w-11/12 mx-auto my-10'>
            <Title title="today's offer" subtitle="Don't miss" />
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-0'>
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
                <MenuItems itemName="item name" description="loredddd ddddddddd ddddddd ddddddd dddddddddd ddddddd ddddddd" />
            </div>
            <Button buttonText="order your favourite food" />
        </div>
    );
};

export default TodaysOffer;