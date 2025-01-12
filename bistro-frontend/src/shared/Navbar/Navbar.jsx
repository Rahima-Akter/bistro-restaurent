import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/navLogo.png'

const Navbar = () => {
    return (
        <div className="navbar md:bg-[#151515] bg-base-300 lg:px-12 lg:py-3 md:bg-opacity-[40%] fixed right-0 left-0 top-0 text-white z-10 backdrop-blur-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:text-white text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-center py-8 text-black space-y-2">
                        <Link to="/">Home</Link>
                        <Link to="/ourMenu">Our Menu</Link>
                        <Link to="/ourShop">our Shop</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/contact">Contact Us</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost md:block hidden lg:-mb-0 -mb-4"><img src={logo} alt="" className='lg:w-40 w-32' /></a>
            </div>
            <div className='flex gap-5 navbar-end'>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold uppercase space-x-7">
                        <Link to="/">Home</Link>
                        <Link to="/ourMenu">Our Menu</Link>
                        <Link to="/ourShop">our Shop</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/contact">Contact Us</Link>
                    </ul>
                </div>
                <div className="">
                    <a className="btn btn-sm btn-success">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;