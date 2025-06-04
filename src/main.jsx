import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Layout from './components/Layout.jsx'; 
import Home from './components/Home/Home.jsx'; 
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Contact from './components/ContanctUs/ContactUs.jsx';
import './index.css';

const router = createBrowserRouter([
  { 
    path: '/',

    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },

      {
        path : '',
        element: <Header/>
      },
      {
        path : '',
        element: <Footer/>
      },
      {
        path :'About',
        element: <About/>
      },
      {
        path :'Contact',
        element: <Contact/>
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
