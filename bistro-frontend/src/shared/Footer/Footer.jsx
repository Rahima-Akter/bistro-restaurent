import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/navLogo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-10">
            <div className="container px-6 pb-8 pt-16 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
                            Subscribe to our newsletter to get updates.
                        </h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input
                                id="email"
                                type="text"
                                className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Email Address"
                            />

                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white">Quick Links</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="#"
                                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-blue-500"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-blue-500"
                            >
                                Who We Are
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-blue-500"
                            >
                                Our Philosophy
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a
                                href="#"
                                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-blue-500"
                            >
                                Retail & E-Commerce
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-blue-500"
                            >
                                Information Technology
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-blue-500"
                            >
                                Finance & Insurance
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700 md:mt-8 md:mb-5" />

                <div className="flex items-center justify-between">
                    <a href="#">
                        <img
                            className="w-auto h-10"
                            src={logo}
                            alt="Logo"
                        />
                    </a>
                    <p className='text-white md:text-sm text-xs'>© Copyright @SRiTY {new Date().getFullYear()}. All Rights Reserved.</p>
                    <div className="flex -mx-2">
                        <a
                            href="#"
                            className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-500"
                            aria-label="Reddit"
                        >
                            <FaFacebook className='text-2xl' />
                        </a>

                        <a
                            href="#"
                            className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-500"
                            aria-label="Facebook"
                        >
                            <FaLinkedin className='text-2xl' />
                        </a>

                        <a
                            href="#"
                            className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-500"
                            aria-label="Github"
                        >
                            <FaGithub className='text-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
