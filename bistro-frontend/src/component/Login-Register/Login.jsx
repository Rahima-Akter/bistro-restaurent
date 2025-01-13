import bgImg from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png'

const Login = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
            }}
            className="flex justify-center items-center"
        >
            <div className='w-9/12 h-[80vh] flex justify-center items-center' style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2), 0px -4px 10px rgba(0, 0, 0, 0.2), 4px 0px 10px rgba(0, 0, 0, 0.2), -4px 0px 10px rgba(0, 0, 0, 0.2)'
            }}>
                {/* image div */}
                <div className='lg:w-[55%]'>
                    <img src={loginImg} alt="" />
                </div>
                {/* form div */}
                <div className='lg:w-[45%] pr-5'>
                    <section class="max-w-4xl p-6 mx-auto bg-transparent rounded-md">
                        <h2 class="text-3xl text-center mb-2 font-bold text-gray-700 capitalize dark:text-white">Login</h2>

                        <form>
                            <div class="grid grid-cols-1 gap-2 mt-1">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200 text-xs font-semibold" for="username">Email</label>
                                    <input id="username" type="email" class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200 text-xs font-semibold" for="emailAddress">Password</label>
                                    <input id="emailAddress" type="password" class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="password"></label>
                                    <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>

                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation"></label>
                                    <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                                </div>
                            </div>

                            <div class="w-full mt-6">
                                <button class="w-full px-8 py-2.5 leading-5 text-white transition-colors duration-600 transform bg-[#D1A054] rounded-md hover:bg-[#b18442] focus:outline-none focus:bg-[#946f36] font-bold">Save</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Login;
