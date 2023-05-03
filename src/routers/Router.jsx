import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Home from '../pages/pages/Home/Home';
import Blog from '../pages/pages/Blog/Blog';
import Chef from '../pages/pages/Chef/Chef';
import Error from '../pages/pages/ErrorPage/Error';
import Login from '../pages/pages/LogIn/Login';
import Register from '../pages/pages/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/chefs/:chef",
                element: <Chef />,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.chef}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />,
            }
        ]
    }
])

export default router;