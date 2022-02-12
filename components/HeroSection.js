import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import ContactButton from '../components/ContactButton';

import hand from '../public/hand-1.png';
import Ellipse from './illustrations/Ellipse';

const Section = styled.section`
 display: flex;
 align-items: center;
 min-height: 100vh;
 max-height: 100vh;

 @media (min-width: 64rem) {
  width: 56rem;
  margin: 0 auto;
 }

 @media (min-width: 34rem) {
  margin: 0 auto;
 }

 @media only screen and (max-width: 600px) {
  flex-direction: column;
  margin: 0 1rem;
  margin-top: 80px;
 }  
`;

const HeroTextWrapper = styled(motion.div)`
 flex: 1 1;
 display: flex;
 flex-direction: column;
 align-items: left;
 justify-content: flex-start;
 gap: 20px;

 @media only screen and (max-width: 600px) {
  text-align: center;
  align-items: center;
 }  
`;

/* Animation */
const HeroTextWrapperVariants = {
 hidden: { opacity: 0, x: -100, rotate: 20 },
 show: {
  opacity: 1,
  x: 0,
  rotate: 0,
  transition: {
   delay: 0.3,
   staggerChildren: 10,
  },
 },
};

/* Animation */
const HeroTextItem = {
 hidden: { opacity: 0, x: -100 },
 show: { opacity: 1, x: 0, transition: { delay: 0.4 } },
};

const HeroImageWrapper = styled(motion.div)`
 margin-left: -50px;
 @media only screen and (max-width: 600px) {
  margin-left: 100px;
 }  
`;

const HandImageWrapper = styled(motion.div)`
 float: right;
 @media only screen and (max-width: 600px) {
  img {
    transform: scale(0.8);
  }
 }  
`;

const EllipseSVG = styled(motion.svg)`
 position: relative;
 top: 65px;
 left: 140px;
 z-index: -10;

 @media only screen and (max-width: 600px) {
  position: absolute;
  top: 60vh;
  left: 50px;
  width: 250px;
  height: 250px;
 }
`;

/* Animation */
const HandImageWrapperVariants = {
 hidden: { opacity: 0, x: -100 },
 show: { opacity: 1, x: 0, transition: { delay: 0.4 } },
};

export default function HeroSection() {
 return (
  <Section>
   <HeroTextWrapper variants={HeroTextWrapperVariants} initial='hidden' animate='show'>
    <motion.h1 variants={HeroTextItem}>Smart, creative development.</motion.h1>
    <motion.p>
     No techie? No problem. I provide creative and professional software development for your business vision.
    </motion.p>
    <ContactButton variants={HeroTextItem} text="Let's collaborate!" url={'/'} size='15px 35px' float='left' />
   </HeroTextWrapper>
   <HeroImageWrapper>
    <HandImageWrapper variants={HandImageWrapperVariants} initial='hidden' animate='show'>
     <Ellipse color="#8E8CED" SVG={EllipseSVG} />
     <Image alt='3D-Hand' src={hand} height={400} width={260}></Image>
    </HandImageWrapper>
   </HeroImageWrapper>
  </Section>
 );
}
