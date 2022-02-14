import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Button = styled(motion.a)`
 position: relative;
 padding: 10px 28px;
 ${(props) =>
  props.size &&
  css`
   padding: ${props.size};
  `}
 width: fit-content;
 float: right;
 ${(props) =>
  props.float &&
  css`
   float: ${props.float};
  `}
 border-style: none;
 border-radius: 8px;
 background: #8e8ced;
 color: white;
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 19px;
`;

export default function ContactButton({ text, url, size, float }) {
 const [anchorTarget, setAnchorTarget] = useState(null);

 useEffect(() => {
  setAnchorTarget(document.getElementById(`${url}`));
 });

 async function handleClick(event) {
  event.preventDefault();
  anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }

 return (
  <Button
   href={`#${url}`}
   onClick={handleClick}
   aria-label={`Scroll to ${url}`}
   size={size}
   float={float}
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
  >
   {text}
  </Button>
 );
}
