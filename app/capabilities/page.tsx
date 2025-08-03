import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from './components/Hero';
import Materials from './components/Materials';
import Commitment from './components/Commitment';
import Stackscard from './components/Stackscard';

export default function Home() {
  return (
    <>
    <Header />
    <Hero/>
    <Materials/>
    <Commitment/>
    <Stackscard/>
    <Footer />
    </>
    );
}