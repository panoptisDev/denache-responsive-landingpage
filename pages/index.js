import { useState, useEffect } from 'react';
import Head from 'next/head';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
 // check if mobile screen
 const [windowDimension, setWindowDimension] = useState(null);

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
    <HeroSection />
    <AboutSection />
    {windowDimension && <ServicesSection windowDimension={windowDimension} />}
   </main>

   <footer></footer>
  </div>
 );
}

export function getStaticProps(context) {
 /* No fetching necessary at this point */
 return {
  props: {},
 };
}
