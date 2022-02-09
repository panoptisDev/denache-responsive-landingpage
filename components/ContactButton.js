import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
 position: relative;
 padding: 10px 28px;
 margin-right: auto;
 width: fit-content;
 float: right;
 border-style: none;
 border-radius: 8px;
 background: #8e8ced;
 color: white;
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 19px;
`;

export default function ContactButton({ text, url }) {
 return (
   <Button href={url}>{text}</Button>
 );
}
