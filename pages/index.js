import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const ServicesSectionWrapper = styled.div`
 margin-top: 100px;
 min-height: 80vh;
 max-height: 80vh;
`;

const ServicesWrapper = styled.div`
 position: relative;
 @media (min-width: 64rem) {
  width: 56rem;
  margin: 0 auto;
 }

 /*  @media (min-width: 34rem) {
  margin: 0 1.5rem;
 } */
`;

const ServicesHeadingWrapper = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;
`;

const ServicesContent = styled(motion.div)`
  margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 100px;
`


export default function Home() {

 return (
  <div>
   <Head>
    <title>Create Next App</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar/>
    <HeroSection/>
    <AboutSection/>

    <ServicesSectionWrapper>
     <ServicesWrapper>
      <ServicesHeadingWrapper>
       <h2 id="Services">Inspiration, Consultation, Development</h2>
       <p>
        Running a successfull business can be stressful. My services give you a couple of things less to worry about.
       </p>
      </ServicesHeadingWrapper>
      <ServicesContent>
        
      </ServicesContent>
     </ServicesWrapper>
    </ServicesSectionWrapper>


   </main>

   <footer></footer>
  </div>
 );
}
