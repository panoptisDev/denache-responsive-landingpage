import { motion } from 'framer-motion';
import styled from 'styled-components';

const draw = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: (i) => {
  const delay = i * 0.4;
  return {
   pathLength: 1,
   opacity: 1,
   transition: {
    pathLength: { type: 'tween', delay, duration: 1 },
   },
  };
 },
};

const SVG = styled(motion.svg)`
 position: absolute;
 top: 130px;
 left: -400px;
 z-index: -10;
 @media (min-width: 320px) and (max-width: 480px) {
  top: 180px;
  left: -260px;
 }
 @media (min-width: 600px) and (max-width: 1024px) {
  top: 130px;
  left: -220px;
 }
 @media (min-width: 481px) and (max-width: 1023px) {
  top: 170px;
  left: -220px;
 }
`;

export default function Waves() {
 return (
  <SVG
   id='b33490be-5624-4cdf-a8ad-dc83ee655a0c'
   data-name='Layer 1'
   xmlns='http://www.w3.org/2000/svg'
   width={590}
   height={300}
   viewBox='0 20 1130 550'
   variants={draw}
   initial='hidden'
   whileInView='visible'
   viewport={{ once: true }}
  >
   <motion.g>
    <motion.path
     d='M933.27,325.24s38.8-40.23,101.36-35.46S1136,254.32,1136,254.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0}
    />
    <motion.path
     d='M903.27,295.24s38.8-40.23,101.36-35.46S1106,224.32,1106,224.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.1}
    />
    <motion.path
     d='M873.27,265.24s38.8-40.23,101.36-35.46S1076,194.32,1076,194.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.2}
    />
    <motion.path
     d='M843.27,235.24s38.8-40.23,101.36-35.46S1046,164.32,1046,164.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.3}
    />
    <motion.path
     d='M813.27,205.24s38.8-40.23,101.36-35.46S1016,134.32,1016,134.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.4}
    />
    <motion.path
     d='M783.27,175.24s38.8-40.23,101.36-35.46S986,104.32,986,104.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.5}
    />
    <motion.path
     d='M753.27,145.24s38.8-40.23,101.36-35.46S956,74.32,956,74.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.6}
    />
    <motion.path
     d='M723.27,115.24S762.07,75,824.63,79.78,926,44.32,926,44.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.7}
    />
    <motion.path
     d='M693.27,85.24S732.07,45,794.63,49.78,896,14.32,896,14.32'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.8}
    />
   </motion.g>
   <motion.g>
    <motion.path
     d='M704.63,415.24S743.43,375,806,379.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={0.9}
    />
    <motion.path
     d='M674.63,385.24S713.43,345,776,349.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1}
    />
    <motion.path
     d='M644.63,355.24S683.43,315,746,319.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.1}
    />
    <motion.path
     d='M614.63,325.24S653.43,285,716,289.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.2}
    />
    <motion.path
     d='M584.63,295.24S623.43,255,686,259.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.3}
    />
    <motion.path
     d='M554.63,265.24S593.43,225,656,229.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.4}
    />
    <motion.path
     d='M524.63,235.24S563.43,195,626,199.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.5}
    />
    <motion.path
     d='M494.63,205.24S533.43,165,596,169.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.6}
    />
    <motion.path
     d='M464.63,175.24S503.43,135,566,139.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.7}
    />
   </motion.g>
   <motion.g>
    <motion.path
     d='M476.7,505.24S515.5,465,578.06,469.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.8}
    />
    <motion.path
     d='M446.7,475.24S485.5,435,548.06,439.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={1.9}
    />
    <motion.path
     d='M416.7,445.24S455.5,405,518.06,409.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2}
    />
    <motion.path
     d='M386.7,415.24S425.5,375,488.06,379.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.1}
    />
    <motion.path
     d='M356.7,385.24S395.5,345,458.06,349.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.2}
    />
    <motion.path
     d='M326.7,355.24S365.5,315,428.06,319.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.3}
    />
    <motion.path
     d='M296.7,325.24S335.5,285,398.06,289.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.4}
    />
    <motion.path
     d='M266.7,295.24S305.5,255,368.06,259.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.5}
    />
    <motion.path
     d='M236.7,265.24S275.5,225,338.06,229.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.6}
    />
   </motion.g>
   <motion.g>
    <motion.path
     d='M249.93,595.24s38.8-40.23,101.36-35.46,101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.7}
    />
    <motion.path
     d='M219.93,565.24s38.8-40.23,101.36-35.46,101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.8}
    />
    <motion.path
     d='M189.93,535.24s38.8-40.23,101.36-35.46,101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={2.9}
    />
    <motion.path
     d='M159.93,505.24s38.8-40.23,101.36-35.46,101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={3}
    />
    <motion.path
     d='M129.93,475.24s38.8-40.23,101.36-35.46,101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={3.1}
    />
    <motion.path
     d='M99.93,445.24s38.8-40.23,101.36-35.46,101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={3.2}
    />
    <motion.path
     d='M69.93,415.24s38.8-40.23,101.36-35.46,101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={3.3}
    />
    <motion.path
     d='M39.93,385.24S78.73,345,141.29,349.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={3.4}
    />
    <motion.path
     d='M9.93,355.24S48.73,315,111.29,319.78s101.36-35.46,101.36-35.46'
     transform='translate(-8.43 -12.82)'
     fill='none'
     stroke='#8e8ced'
     strokeLinecap='round'
     strokeLinejoin='round'
     strokeWidth={3}
     variants={draw}
     custom={3.5}
    />
   </motion.g>
  </SVG>
 );
}
