import React from 'react'
import styled, {css} from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

const NotificationWrapper = styled(motion.div)`
  /* Position */
  position: absolute;
  z-index: 1000;
  left: 0;
  ${(props) =>
    props.left &&
    css`
    left: ${props.left}px;
  `}
  bottom: 0;
  ${(props) =>
    props.bottom &&
    css`
    bottom: ${props.bottom}px;
  `}

  /* Proportions */
  width: 200px;
  height: 45px;
  border-radius: 8px;
  padding: 12px 15px 12px 15px;

  /* styling */
  background-color: white;
  box-shadow: 0 4px 20px rgb(0 0 0 / 20%);

  /* Inside Content */
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled(motion.div)`
  padding: 0 50px 0 0;
  margin: 0;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Blob = styled(motion.div)`
  border-radius: 50%50%;
  width: 22px;
  height: 22px;
  padding: 10px;
  background: #8e8ced;
  margin: 0;
  color: white;
  font-size: 0.7em;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Notification({logo, number, left, bottom}) {
  return (
    <NotificationWrapper left={left} bottom={bottom}>
      <LogoWrapper>
        <Image src={logo}/>
      </LogoWrapper>
      <Blob>
        {number}
      </Blob>
    </NotificationWrapper>
  )
}
