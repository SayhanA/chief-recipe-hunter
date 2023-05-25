import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Home from '../pages/pages/Home/Home';
import Blog from '../pages/pages/Blog/Blog';
import Chef from '../pages/pages/Chef/Chef';
import Error from '../pages/pages/ErrorPage/Error';
import Login from '../pages/pages/LogIn/Login';
import Register from '../pages/pages/Register/Register';
import PrivateRouter from './PrivateRouter';
import FavoriteRecipes from '../pages/pages/FavoriteRecipes/FavoriteRecipes';
import Profile from '../pages/pages/Profile/Profile';
import AboutUs from '../pages/pages/AboutUs/AboutUs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-sayhan-a-sayhana.vercel.app/chefs')
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "chefs/:chef",
                element: <PrivateRouter><Chef /></PrivateRouter>,
                loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-sayhan-a-sayhana.vercel.app/recipes/${params.chef}`)
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: 'favorite',
                element: <FavoriteRecipes />,
                loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-sayhan-a-sayhana.vercel.app/recipes')
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: "aboutUs",
                element: <AboutUs />,
                loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-sayhan-a-sayhana.vercel.app/chefs')
            }
        ]
    }
])

export default router;