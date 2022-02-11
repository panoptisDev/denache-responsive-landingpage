import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';


export default function Home() {

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
