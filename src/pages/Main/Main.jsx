import React from 'react';
import './Main.css'
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';
// import { Footer } from 'flowbite-react';

const Main = () => {
    return (
        <div>
            <NavBar />
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;