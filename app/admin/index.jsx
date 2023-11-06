import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './page/dashboard';

import user_routers from "./page/management/user/config/routers"
import blog_routers from "./page/management/blog/config/routers"

function Component() {
    const router = createHashRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children : [
                {
                    path : "",
                    element : <Dashboard></Dashboard>
                },
                user_routers,
                blog_routers,
            ]
        }
    ])

    return (<RouterProvider router={router}></RouterProvider>)
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Component />
);