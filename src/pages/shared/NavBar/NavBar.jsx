import React, { useState } from 'react';
import './NavBar.css'
import ActiveLink from '../../component/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const user = null;
    
    return (
        <div className={`w-11/12 lg:px-5 mx-auto navbar py-0 bg-transparent absolute left-[50%] translate-x-[-50%] z-20 flex gap-5`}>
            {/* Menu bar design */}
            <div className='z-40 main lg:hidden'>
                <input type="checkbox" className='menu-btn' id="menu-btn" />
                <label onClick={() => setOpen(!open)} htmlFor="menu-btn" className='menu-icon'> <span className='nav-icon'></span> </label>
            </div>
            <div className=" z-20 lg:navbar-center lg:mr-auto relative -left-9 lg:left-0 mr-auto">
                <h3 className='text-4xl font-bold'>F<span className='text-gray-500'>oo</span><span>&</span><span>r</span>t</h3>
            </div>

            <div className={` backdrop-blur-lg w-full lg:text-left text-[#757575]  lg:navbar-start  lg:pl-5 gap-5 font-semibold  flex flex-col lg:w-full  lg:static lg:flex-row absolute lg:top-16 p-5 transition-all ${open ? "top-20" : "-top-72"}`}>
                <li className='list-none '> <ActiveLink className='hover:text-blue-600' to="/">Home</ActiveLink></li>
                <li className='list-none '> <ActiveLink className='hover:text-blue-600' to="/blog">Blog</ActiveLink></li>
            </div>

            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>

            {
                user ? <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* <img src={user?.photoURL} /> */}
                                {
                                    img ? <img src={img} /> : <div className="text-4xl flex justify-center items-center text-gray-500"><FaRegUserCircle /></div>
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><p>{user.displayName}</p></li>
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogOut}>Logout</a></li>
                        </ul>
                    </div>
                </div>
                    : <Link to='/login' className='btn btn-primary block ml-auto pt-4'>LogIn</Link>
            }
            
        </div>
    );
};

export default NavBar;