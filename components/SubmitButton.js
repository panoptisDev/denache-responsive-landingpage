import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Button = styled(motion.button)`
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

export default function SubmitButton({ text, size, float }) {

 return (
  <Button
   type="submit"
   size={size}
   float={float}
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
  >
   {text}
  </Button>
 );
}
