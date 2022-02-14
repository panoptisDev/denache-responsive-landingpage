import { useState, useEffect } from 'react';
import Head from 'next/head';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

import * as emailClient from "../utils/emailKey" ;

import styled from 'styled-components';
import { motion } from 'framer-motion';

import linkedinLogo from '../public/linkedin.svg';
import githubLogo from '../public/github.svg';
import Image from 'next/image';

const Footer = styled.footer`
 position: relative;
 display: flex;
 height: 100px;
 gap: 20px;
 justify-content: center;
 align-items: center;

 @media (max-width: 1023px) {
  margin-bottom: 55px;
 }
`;

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
    <ContactSection />
   </main>
   <Footer>
    <motion.a
     target='_blank'
     rel='noreferrer'
     href='https://www.linkedin.com/in/maxim-buz-17a2a717b/'
     whileHover={{ scale: 1.4 }}
     style={{ cursor: 'pointer' }}
    >
     <Image src={linkedinLogo} alt='LinkedIn Logo' />
    </motion.a>
    <motion.a
     target='_blank'
     rel='noreferrer'
     href='https://github.com/MaximBuz'
     whileHover={{ scale: 1.4 }}
     style={{ cursor: 'pointer' }}
    >
     <Image src={githubLogo} alt='GitHub Logo' />
    </motion.a>
   </Footer>
  </div>
 );
}
