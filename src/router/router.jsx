import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <AboutPage />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <ContactPage />
      </>
    ),
  },
]);

