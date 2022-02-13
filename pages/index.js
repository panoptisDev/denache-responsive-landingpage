import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

export default function Home() {

 return (
  <div>
   <Head>
    <title>Denache Development</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>

   </main>

   <footer></footer>
  </div>
 );
}

export function getStaticProps(context) {
  /* No fetching necessary at this point */
  return {
    props: {}
  }
}