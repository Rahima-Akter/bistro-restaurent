import img from '../../assets/home/chef-service.jpg'

const ChefImageTitleDiv = ({ title, description }) => {
    return (
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className='h-[70vh] lg:w-10/12 w-11/12 mx-auto mt-20 mb-14 bg-fixed'>
            <section className='flex items-center justify-center h-full'>
                <div className='md:w-[70%] w-[90%] md:h-[60%] mx-auto my-auto text-center bg-black bg-opacity-70 text-white lg:py-16 py-10'>
                    <h4 className='uppercase text-2xl mb-5'>{title}</h4>
                    <p className='md:px-14 px-2 text-sm'>{description}</p>
                </div>
            </section>
        </div>
    );
};

export default ChefImageTitleDiv;