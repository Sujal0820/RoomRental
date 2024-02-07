import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Layout from './pages/Layout';
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import Choices from './components/Choices'
import Contact from './components/Contact'
import Stats from './components/Stats';
import FeedBack from './components/FeedBack'
import Footer from './components/Footer'

import logo from './assets/logo.png'
import c1 from './assets/c1.png';
import menu from './assets/menu.svg';

function App() {
  return (
    <>
    {/*Navbar */}
    <div className="w-full h-30 text-red-600 border border-zinc-300 shadow justify-end px-3 py-3 flex">
      <img src={logo} className='h-10 item-start'/>
      <button className='hover:bg-gray-200 font-bold py-2 px-4 rounded inline-flex items-center'>Pay Rent</button>
      <button type="button" className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium text-sm dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600 px-3">Post Your Property</button>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login/>} />
          </Route>
      </Routes>
    </BrowserRouter>
        <button className="hover:bg-gray-200 text-red-600 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/>
  </svg>
  <span>Menu</span>
</button>
    </div>
    {/*Heading Hero */}
    <Hero/>
    <Tagline/>
    <Choices/>
    <Contact/>
    <Stats/>
    <FeedBack/>
    <Footer/>
    </>
    )
    }
    export default App