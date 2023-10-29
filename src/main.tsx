import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './routes/error-page.tsx';
import Root from './routes/root.tsx';
import About from './routes/about.tsx';
import Download from './routes/download.tsx';
import Docs from './routes/docs.tsx';
import Home from './routes/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/download',
        element: <Download />,
      },
      {
        path: '/getting-started',
        element: <Docs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
