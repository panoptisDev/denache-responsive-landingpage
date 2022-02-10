import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

import Waves from '../components/Waves';
import macbook from '../public/macbook.png';
import hand from "../public/hand-with-phone.png"
import reactLogo from "../public/react-logo.png"
import dockerLogo from "../public/docker-logo.png"
import graphLogo from "../public/graph-logo.png"
import Image from 'next/image';
import Notification from '../components/Notification';

export default function Home() {
 return (
  <div>
   <Head>
    <title>Create Next App</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar />
    <HeroSection />
    <AboutSection/>
   </main>

   <footer></footer>
  </div>
 );
}
