import { useState, useEffect } from 'react';
import Head from 'next/head';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';


export default function Home() {
 // check if mobile screen
 const [windowDimension, setWindowDimension] = useState(0);

 // on first load
 useEffect(() => {
  setWindowDimension(window.innerWidth);
 }, []);

 // on resize
 useEffect(() => {
  function handleResize() {
   setWindowDimension(window.innerWidth);
  }
  window.onresize = handleResize;
 }, []);

 return (
  <div>
   <Head>
    <title>Denache Development</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar windowDimension={windowDimension} />
    {windowDimension && <HeroSection windowDimension={windowDimension} />}
    <AboutSection />
    {windowDimension && <ServicesSection windowDimension={windowDimension} />}
    <ContactSection/>

   </main>

   <footer></footer>
  </div>
 );
}
