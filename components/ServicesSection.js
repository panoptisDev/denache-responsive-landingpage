import { motion } from 'framer-motion';
import styled from 'styled-components';

import ServiceTile from '../components/ServiceTile';
import DesignIcon from '../components/illustrations/DesignIcon';
import DevelopIcon from '../components/illustrations/DevelopIcon';
import AdviseIcon from '../components/illustrations/AdviseIcon';
import FixIcon from '../components/illustrations/FixIcon';
import Ellipse from '../components/illustrations/Ellipse';

const ServicesSectionWrapper = styled.div`
 margin-top: 100px;
 min-height: 80vh;
`;

const ServicesWrapper = styled.div`
 position: relative;
 @media (min-width: 64rem) {
  width: 56rem;
  margin: 0 auto;
 }
 @media (min-width: 481px) and (max-width: 1024px) {
  flex-direction: column;
  min-height: 80vh;
  margin: 0 1rem 200px 1rem;
 }
`;

const ServicesHeadingWrapper = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;
 @media (min-width: 320px) and (max-width: 480px) {
  margin-bottom: 100px;
 }
`;

const ServicesContent = styled(motion.div)`
 margin-top: 80px;
 display: flex;
 flex-wrap: wrap;
 gap: 20px;
 align-items: center;
 justify-content: center;
`;

const GreenEllipseSVG = styled(motion.svg)`
 @media only screen and (min-width: 700px) {
  position: absolute;
  top: 110px;
  left: -90px;
  z-index: -10;
 }
 @media (min-width: 481px) and (max-width: 699px) {
  position: absolute;
  top: 210px;
  left: -90px;
  z-index: -10;
 }

 @media (min-width: 320px) and (max-width: 480px) {
  position: absolute;
  top: 230px;
  right: 0;
  z-index: -10;
  width: 250px;
  height: 250px;
 }
`;

const VioletEllipseSVG = styled(motion.svg)`
 @media only screen and (min-width: 481px) {
  position: absolute;
  bottom: -100px;
  right: -70px;
  z-index: -10;
  transform: scale(0.8) rotate(90deg);
 }
 @media (min-width: 320px) and (max-width: 480px) {
  position: absolute;
  bottom: -150px;
  left: -30px;
  z-index: -10;
  transform: scale(0.8) rotate(90deg);
  width: 250px;
  height: 250px;
 }
`;

export default function ServicesSection({ windowDimension }) {
 /* Animation of Tiles */

 /* Parent */
 const parentVariants = {
  hidden: {},
  show: {
   transition: {
    staggerChildren: 0.5,
   },
  },
 }

 /* Children */
 const childVariants = {
  hidden: { opacity: 0, x: -100, rotate: 100, scale: 0 },
  show: { opacity: 1, x: 0, rotate: 0, scale: 1 },
 }

 
 return (
  <ServicesSectionWrapper>
   <ServicesWrapper>
     {/* For menu scrolling */}
    <div id="Services" style={{position: "absolute", top: "-100px", left: 0}}></div>
    <ServicesHeadingWrapper>
     <h2>Inspiration, Consultation, Development</h2>
     <p>
      Running a successfull business can be stressful. My services give you a couple of things less to worry
      about.
     </p>
    </ServicesHeadingWrapper>
    <ServicesContent variants={windowDimension >= 480 ? parentVariants : null} initial='hidden' whileInView='show' viewport={{ once: false }}>
     <Ellipse color='#84DCB4' SVG={GreenEllipseSVG} />
     <Ellipse color='#8E8CED' SVG={VioletEllipseSVG} />
     <ServiceTile
      animation={windowDimension >= 480 ? childVariants : null}
      icon={<DesignIcon />}
      name='Design'
      text='Let me inspire you with modern, sophisticated and clean design proposals'
      linkText='Learn more'
      linkHref='/'
     />
     <ServiceTile
      animation={windowDimension >= 480 ? childVariants : null}
      icon={<DevelopIcon />}
      name='Develop'
      text='Let me develop clean, functional and performant features and applications'
      linkText='Learn more'
      linkHref='/'
     />
     <ServiceTile
      animation={windowDimension >= 480 ? childVariants : null}
      icon={<AdviseIcon />}
      name='Advise'
      text='Let me ask you the right questions to arrive at the right answers'
      linkText='Learn more'
      linkHref='/'
     />
     <ServiceTile
      animation={windowDimension >= 480 ? childVariants : null}
      icon={<FixIcon />}
      name='Fix'
      text='Whatever your painpoints are, let me help you with all your technology questions'
      linkText='Learn more'
      linkHref='/'
     />
    </ServicesContent>
   </ServicesWrapper>
  </ServicesSectionWrapper>
 );
}
