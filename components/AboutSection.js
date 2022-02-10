import { motion } from 'framer-motion';
import styled from 'styled-components';

import Waves from '../components/Waves';
import macbook from '../public/macbook.png';
import hand from "../public/hand-with-phone.png"
import reactLogo from "../public/react-logo.png"
import dockerLogo from "../public/docker-logo.png"
import graphLogo from "../public/graph-logo.png"
import Image from 'next/image';
import Notification from '../components/Notification';

const AboutSectionWrapper = styled.div`
 margin-top: 100px;
 min-height: 80vh;
 max-height: 80vh;
`;

const AboutWrapper = styled.div`
 position: relative;
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

const AboutContent = styled(motion.div)`
  margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 100px;
`

const AboutVisualsWrapper = styled(motion.div)`
  flex: 1.3 1;
`;

const MacBook = styled(motion.div)`
 
`

const HandWithPhone = styled(motion.div)`
  position: absolute;
  bottom: -50px;
  left: -80px;
  z-index: 1000;
`

const AboutTextWrapper = styled(motion.div)`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

/* Animation */
const VisualVariants = {
  hidden: { opacity: 0, x: -100},
  show: {
   opacity: 1,
   x: 0,
   transition: {
     staggerChildren: 0.3,
     childrenDuration: 0.5,
   }
  },
 };
 
 /* Animation */
 const VisualItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0},
 };


export default function AboutSection() {
  return (
    <AboutSectionWrapper>
     <AboutWrapper>
      <AboutHeadingWrapper>
       <h2>Leave the tough stuff to me</h2>
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
          <MacBook animation={{variants: VisualItemVariants}}>
            <Image alt='macbook' src={macbook} height={350} width={500}></Image>
          </MacBook>
          <HandWithPhone animation={{variants: VisualItemVariants}} style={{ originX: -1, originY: 0.5 }} whileHover={{rotate: -5, x: -50}}>
            <Image alt='hand with smartphone 3D' src={hand} height={278} width={271}></Image>
          </HandWithPhone>
          <Notification animation={{variants: VisualItemVariants}} logo={reactLogo} number="1" left={100+150} bottom={180+30}/>
          <Notification animation={{variants: VisualItemVariants}} logo={dockerLogo} number="4" left={120+150} bottom={120+30}/>
          <Notification animation={{variants: VisualItemVariants}} logo={graphLogo} number="2" left={140+150} bottom={60+30}/>
        </AboutVisualsWrapper>
        <AboutTextWrapper>
          <h3>Smart Consulting</h3>
          <p>Your success is my priority. I take care of providing you with sensible recommendations and make sure that all solutions work for you!</p>
        </AboutTextWrapper>
      </AboutContent>
      <Waves />
     </AboutWrapper>
    </AboutSectionWrapper>
  )
}
