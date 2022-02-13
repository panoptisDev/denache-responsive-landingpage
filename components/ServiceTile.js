import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Tile = styled(motion.div)`
 /* Appearance */
 background-color: #fff;
 border-radius: 8px;
 box-shadow: 0 2px 27px rgb(210 210 216 / 32%);
 max-width: 288px;

 /* Text appearance */
 a {
  color: #8e8ced;
 }

 /* Content Positioning */
 padding: 30px 20px 30px 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 15px;
 text-align: center;
`;

const Link = styled(motion.a)`
 display: inline-block;
 position: relative;

 &:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: -5px;
  left: 0;
  background-color: #8e8ced;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
 }
 &:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
 }
`;

export default function ServiceTile({ icon, name, text, linkText, linkHref, animation }) {
 return (
  <>
   {animation ? (
    <Tile
     variants={animation}
     drag
     dragConstraints={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
     }}
     whileHover={{ scale: 0.95 }}
    >
     {icon}
     <p style={{ fontWeight: 600 }}>{name}</p>
     <p>{text}</p>
     <Link href={linkHref} whileHover={{ scale: 1.1 }}>
      {linkText}
     </Link>
    </Tile>
   ) : (
    <Tile>
     {icon}
     <p style={{ fontWeight: 600 }}>{name}</p>
     <p>{text}</p>
     <Link href={linkHref}>
      {linkText}
     </Link>
    </Tile>
   )}
  </>
 );
}
