import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import WhyNexline from '../components/WhyNexline';
import Industries from '../components/Industries';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <WhyNexline />
      <Industries />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
