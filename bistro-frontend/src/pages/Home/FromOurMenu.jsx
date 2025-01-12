import featuredImg from '../../assets/home/featured.jpg'
import Title from '../../shared/Title/Title';

const FromOurMenu = () => {
    return (
        <div className="lg:h-[80vh] w-full mx-auto mt-20 mb-5 relative backdrop-blur-lg bg-fixed" style={{
            backgroundImage: `url(${featuredImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover'
        }}>
            <div className='bg-black bg-opacity-40 inset-0 top-0 left-0 absolute z-0'></div>
            <div className='z-10 relative text-white'>
                <div className='pt-5'><Title title="from our menu" subtitle="Check It Out" /></div>
                <div className='lg:px-24 md:px-16 px-10'>
                    <div className='flex lg:flex-row flex-col gap-6 justify-center items-center md:pb-20 pb-10'>
                        <img src={featuredImg} alt="" className='lg:w-[40%] lg:order-1 order-2' />
                        <div className='lg:order-2 order-1'>
                            <h4 className='font-semibold text-xl'>March 20, 2023</h4>
                            <h4 className='font-semibold text-xl'>WHERE CAN I GET SOME?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur placeat exercitationem obcaecati quo perferendis. Voluptatibus, soluta unde, autem accusantium impedit rem voluptates non repellat, hic facere provident iste dolor tempora!</p>
                            <div className=' my-4'>
                                <button className='btn bg-transparent hover:bg-text-primary text-white font-bold outline-none border-0 border-b-4 border-text-primary duration-700 uppercase'>'tttttttt'</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;