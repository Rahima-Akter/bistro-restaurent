import img from '../../assets/menu/pizza-bg.jpg'
const MenuItems = ({ itemName, description }) => {
    return (
        <div className='flex md:flex-row flex-col items-center gap-3 md:mb-0 mb-5 hover:bg-text-primary hover:bg-opacity-5 p-3 hover:rounded cursor-pointer '>
            <img src={img} alt="" className='md:w-28 w-[100%] md:rounded-tr-full md:rounded-bl-full md:rounded-br-full' />
            <div className='space-y-1'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-semibold text-lg'>{itemName} --------</h3>
                    <p className='text-text-primary pr-6'>$15</p>
                </div>
                <p className='md:pr-12'>{description}</p>
            </div>
        </div>
    );
};

export default MenuItems;