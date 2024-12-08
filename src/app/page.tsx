import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Category from  './components/category';
import Music from './music';
import Selling from './components/Selling';
import Delivery from './components/delivery';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Selling/>
      <Music/>
      <Delivery/>
      <Footer/>

    </div>
  );
}
