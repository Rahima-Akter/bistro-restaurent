
const SharedBanner = ({ img, title, description, pyl, mt }) => {
    return (
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '80vh',
            width: '100%',
        }} className='bg-fixed relative'>
            <div className="absolute top-0 right-0  bg-gradient-to-bl to-white from-gray-600 bg-opacity-50"></div>
            <section className='flex items-center justify-center h-full relative'>
                <div style={{
                    marginTop: mt,
                }} className={`md:w-[60%] w-[90%] md:h-[45%] mx-auto text-center bg-black bg-opacity-40 text-white lg:py-${pyl} py-10`}>
                    <h4 className='uppercase text-5xl mb-5'>{title}</h4>
                    <p className='md:px-14 px-2 text-lg'>{description}</p>
                </div>
            </section>
        </div>
    );
};

export default SharedBanner;