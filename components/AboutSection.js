import { motion } from 'framer-motion';
import styled from 'styled-components';

import Waves from './illustrations/Waves';
import macbook from '../public/macbook.png';
import hand from '../public/hand-with-phone.png';
import reactLogo from '../public/react-logo.png';
import dockerLogo from '../public/docker-logo.png';
import graphLogo from '../public/graph-logo.png';
import Image from 'next/image';
import Notification from '../components/Notification';

const AboutSectionWrapper = styled.div`
 margin-top: 100px;
 min-height: 80vh;
 max-height: 80vh;

 @media (min-width: 320px) and (max-width: 480px) {
  min-height: 70vh;
  align-items: center;
 }

 @media (min-width: 481px) and (max-width: 1024px) {
 }
`;

const AboutWrapper = styled.div`
 position: relative;
 @media (min-width: 64rem) {
  width: 56rem;
  margin: 0 auto;
 }
 @media (min-width: 481px) and (max-width: 1024px) {
  max-width: 34rem;
  margin: 0 auto;
 }
`;

const AboutHeadingWrapper = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;
 @media only screen and (min-width: 600px) {
  br {
   display: none;
  }
 }
 
`;

const AboutContent = styled(motion.div)`
 margin-top: 100px;
 display: flex;
 align-items: center;
 gap: 100px;

 @media (min-width: 320px) and (max-width: 1024px) {
  flex-direction: column;
 }
`;

const AboutVisualsWrapper = styled.div`
 flex: 1.3 1;
 @media (min-width: 320px) and (max-width: 480px) {
  position: relative;
  top: 20px;
  overflow: clip;
  overflow-clip-margin: 50px;
 }
 @media (min-width: 481px) and (max-width: 600px) {
   transform: scale(0.8);
 }
`;

const MacBook = styled(motion.div)``;

const HandWithPhone = styled(motion.div)`
 position: absolute;
 bottom: -50px;
 left: -80px;
 z-index: 11;

 @media (min-width: 320px) and (max-width: 480px) {
  bottom: -60px;
  left: -70px;
  transform: scale(0.9);
 }
 @media (min-width: 481px) and (max-width: 1024px) {
  bottom: 0;
  left: -40px;
 }
`;

const NotificationWrapper = styled(motion.div)`
 position: relative;

 @media (min-width: 320px) and (max-width: 480px) {
  left: -80px;
  bottom: -10px;
  transform: scale(0.8);
 }
 @media (min-width: 481px) and (max-width: 1024px) {
  transform: scale(1.1);
 }
`;

const AboutTextWrapper = styled(motion.div)`
 flex: 1 1;
 display: flex;
 flex-direction: column;
 gap: 10px;

 @media (min-width: 320px) and (max-width: 1024px) {
  display: none;
 }
`;

/* Animation */
const VisualVariants = {
 hidden: { opacity: 0, x: -100 },
 show: {
  opacity: 1,
  x: 0,
  transition: {
   staggerChildren: 0.3,
   childrenDuration: 0.5,
  },
 },
};

/* Animation */
const VisualItemVariants = {
 hidden: { opacity: 0, x: -20 },
 show: { opacity: 1, x: 0 },
};

export default function AboutSection() {
 return (
  <AboutSectionWrapper>
   <AboutWrapper>
    {/* For menu scrolling */}
    <div id='About' style={{ position: 'absolute', top: '-100px', left: 0 }}></div>
    <AboutHeadingWrapper>
     <h2>
      Leave the tough <br />
      stuff to me
     </h2>
     <p>
      Making sense of new technologies can be a headache. I find the best solutions that fit your business
      best.
     </p>
    </AboutHeadingWrapper>
    <AboutContent>
     <AboutVisualsWrapper
      variants={VisualVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
     >
      <MacBook animation={{ variants: VisualItemVariants }}>
       <Image alt='macbook' src={macbook} height={350} width={500}></Image>
      </MacBook>
      <HandWithPhone
       animation={{ variants: VisualItemVariants }}
       style={{ originX: -1, originY: 0.5 }}
       whileHover={{ rotate: -5, x: -50 }}
      >
       <Image alt='hand with smartphone 3D' src={hand} height={278} width={271}></Image>
      </HandWithPhone>
      <NotificationWrapper>
       <Notification
        animation={{ variants: VisualItemVariants }}
        logo={reactLogo}
        number='1'
        left={250}
        bottom={210}
       />
       <Notification
        animation={{ variants: VisualItemVariants }}
        logo={dockerLogo}
        number='4'
        left={270}
        bottom={150}
       />
       <Notification
        animation={{ variants: VisualItemVariants }}
        logo={graphLogo}
        number='2'
        left={290}
        bottom={90}
       />
      </NotificationWrapper>
     </AboutVisualsWrapper>
     <AboutTextWrapper>
      <h3>Smart Consulting</h3>
      <p>
       Your success is my priority. I take care of providing you with sensible recommendations and make sure
       that all solutions work for you!
      </p>
     </AboutTextWrapper>
    </AboutContent>
    <Waves />
   </AboutWrapper>
  </AboutSectionWrapper>
 );
}
