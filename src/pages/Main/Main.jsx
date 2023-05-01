import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <h3>This is main page</h3>
            <Outlet />
        </div>
    );
};

export default Main;