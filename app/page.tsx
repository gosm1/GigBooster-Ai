"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Orders from '@/components/Orders';
import Analytics from '@/components/Analytics';
import Benefits from '@/components/Benefits';
import HowItsWorks from '@/components/HowItsWorks';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


export default  function Page() {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Orders/>
      <Analytics/>
      <Benefits/>
      <HowItsWorks/>
      <Cta/>
      <Footer/>
    </main>
  );
}
