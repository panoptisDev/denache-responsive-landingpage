import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

import ServiceTile from '../components/ServiceTile';
import DesignIcon from '../components/illustrations/DesignIcon';
import DevelopIcon from '../components/illustrations/DevelopIcon';
import AdviseIcon from '../components/illustrations/AdviseIcon';
import FixIcon from '../components/illustrations/FixIcon';

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
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
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
        <ServiceTile icon={<DesignIcon/>} name="Design" text="Let me inspire you with modern, sophisticated and clean design proposals" linkText="Learn more" linkHref="/"/>
        <ServiceTile icon={<DevelopIcon/>} name="Develop" text="Let me develop clean, functional and performant features and applications" linkText="Learn more" linkHref="/"/>
        <ServiceTile icon={<AdviseIcon/>} name="Advise" text="Let me ask you the right questions to arrive at the right answers" linkText="Learn more" linkHref="/"/>
        <ServiceTile icon={<FixIcon/>} name="Fix" text="Whatever your painpoints are, let me help you with all your technology questions" linkText="Learn more" linkHref="/"/>
      </ServicesContent>
     </ServicesWrapper>
    </ServicesSectionWrapper>


   </main>

   <footer></footer>
  </div>
 );
}
