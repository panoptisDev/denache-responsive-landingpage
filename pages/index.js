import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';

import Waves from '../components/Waves';

const AboutSection = styled.div`
 margin-top: 100px;
`;

const AboutContent = styled.div`
 @media (min-width: 64rem) {
  width: 56rem;
  margin: 0 auto;
 }

/*  @media (min-width: 34rem) {
  margin: 0 1.5rem;
 } */
`;

const AboutHeadingWrapper = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;
`;

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
    <AboutSection>
     <AboutContent>
      <AboutHeadingWrapper>
       <h2>Leave the tough stuff to me</h2>
       <p>
        Making sense of new technologies can be a headache. I find the best solutions that fit your business
        best.
       </p>
      </AboutHeadingWrapper>
      <Waves/>
     </AboutContent>
    </AboutSection>
   </main>

   <footer></footer>
  </div>
 );
}
