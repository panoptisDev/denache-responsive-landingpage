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
   color: #8E8CED;
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

export default function ServiceTile({ icon, name, text, linkText, linkHref }) {
 return (
  <Tile>
   {icon}
   <p style={{fontWeight: 600}}>{name}</p>
   <p>{text}</p>
   <a href={linkHref}>{linkText}</a>
  </Tile>
 );
}
