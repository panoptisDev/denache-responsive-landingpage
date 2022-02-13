import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const LinkWrapper = styled(motion.div)`
 height: 100%;
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 ${(props) =>
  props.active &&
  css`
   border-bottom-width: 6px;
   border-bottom-style: solid;
   border-bottom-color: #8e8cec;
  `}
`;

export default function MobileMenuItem({ itemName, active }) {
 const [anchorTarget, setAnchorTarget] = useState(null);

 useEffect(() => {
  setAnchorTarget(document.getElementById(itemName));
 });

 async function handleClick(event) {
  event.preventDefault();
  anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }

 return (
  <LinkWrapper active={active ? 1 : 0}>
   <a href={`#${itemName}`} onClick={handleClick} aria-label={`Scroll to ${itemName}`}>
    {itemName}
   </a>
  </LinkWrapper>
 );
}
