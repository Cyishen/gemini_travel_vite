import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/home/HomePage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import CreatePage from './pages/createPage/CreatePage.jsx'
import CreateLayout from './layouts/createLayout/CreateLayout.jsx';
import ViewPage from './pages/review/ViewPage';
import MyTripPage from './pages/myTripPage/MyTripPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <CreateLayout />,
        children: [
          {
            path: "/create",
            element: <CreatePage />,
          },
          {
            path: "/create/:id",
            element: <ViewPage />,
          },
          {
            path: "/trip",
            element: <MyTripPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
