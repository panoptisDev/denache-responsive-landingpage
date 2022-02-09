import { motion } from 'framer-motion';
import Head from 'next/head';


import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';

export default function Home() {
 return (
  <div>
   <Head>
    <title>Create Next App</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar />
    <HeroSection/>
   </main>

   <footer></footer>
  </div>
 );
}
