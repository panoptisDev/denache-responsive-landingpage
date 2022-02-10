import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

import { useRef, useState, useEffect } from 'react';

export default function Home() {
 // check which section is in view (for mobile navbar)
 const [aboutInViewport, setAboutInViewport] = useState(true)

 return (
  <div>
   <Head>
    <title>Create Next App</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar activeSection={{/* hero: heroInViewport, */ about: aboutInViewport}}/>
    <HeroSection/>
    <AboutSection/>
   </main>

   <footer></footer>
  </div>
 );
}
