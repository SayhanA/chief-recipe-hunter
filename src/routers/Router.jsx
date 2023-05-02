import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Home from '../pages/pages/Home/Home';
import Blog from '../pages/pages/Blog/Blog';
import Chef from '../pages/pages/Chef/Chef';
import Error from '../pages/pages/ErrorPage/Error';

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
            }
        ]
    }
])

export default router;