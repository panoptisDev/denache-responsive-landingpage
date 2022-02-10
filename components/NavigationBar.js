import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import Image from 'next/image';
import Logo from '../public/Logo.svg';

import ContactButton from './ContactButton';
import { useEffect, useState } from 'react';

/* Desktop Components */
const DesktopNav = {
 Bar: styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  height: 75px;
  box-shadow: 0 4px 36px rgb(196 196 196 / 24%);
 `,
 Content: styled.div`
  display: flex;
  align-items: center;
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
 `,
 LogoWrapper: styled.div`
  flex: 1;
 `,
 LinkWrapper: styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
 `,
 Link: styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: #26262e;
  padding: 0;
  background-color: initial;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
 `,
 ButtonWrapper: styled.div`
  flex: 1;
  justify-content: flex-end;
 `,
};

/* Mobile Components */
const MobileNav = {
 TopBar: styled(DesktopNav.Bar)`
  height: 65px;
 `,
 BottomBar: styled(DesktopNav.Bar)`
  top: inherit;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 36px rgb(196 196 196 / 24%);
 `,
 Content: styled(DesktopNav.Content)`
  justify-content: space-around;
 `,
 Link: styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: #26262e;
  padding: 0;
  background-color: initial;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
 `,
 LinkWrapper: styled(motion.div)`
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
    border-bottom-color: #8E8CEC;
   `}
 `,
};

export default function Navbar({ activeSection }) {
 // check if mobile screen
 const [windowDimension, setWindowDimension] = useState(null);

 // on first load
 useEffect(() => {
  setWindowDimension(window.innerWidth);
 }, []);

 // on resize
 useEffect(() => {
  function handleResize() {
   setWindowDimension(window.innerWidth);
  }
  window.onresize = handleResize;
 }, []);

 return (
  <>
   {windowDimension >= 640 ? (
    <DesktopNav.Bar>
     <DesktopNav.Content>
      <DesktopNav.LogoWrapper>
       <Image alt='denache logo' src={Logo} height={48} width={165} />
      </DesktopNav.LogoWrapper>
      <DesktopNav.LinkWrapper>
       <DesktopNav.Link>About</DesktopNav.Link>
       <DesktopNav.Link>Services</DesktopNav.Link>
       <DesktopNav.Link>Contact</DesktopNav.Link>
      </DesktopNav.LinkWrapper>
      <DesktopNav.ButtonWrapper>
       <ContactButton text='Talk to me' url={'/'} size='10px 20px' />
      </DesktopNav.ButtonWrapper>
     </DesktopNav.Content>
    </DesktopNav.Bar>
   ) : (
    <>
     <MobileNav.TopBar>
      <MobileNav.Content>
       <Image alt='denache logo' src={Logo} height={48} width={165} />
      </MobileNav.Content>
     </MobileNav.TopBar>

     <MobileNav.BottomBar>
      <MobileNav.Content>
       <MobileNav.LinkWrapper active={activeSection.about || activeSection.hero}>
        <MobileNav.Link>About</MobileNav.Link>
       </MobileNav.LinkWrapper>
       <MobileNav.LinkWrapper active={activeSection.services}>
        <MobileNav.Link>Services</MobileNav.Link>
       </MobileNav.LinkWrapper>
       <MobileNav.LinkWrapper active={activeSection.contact}>
        <MobileNav.Link>Contact</MobileNav.Link>
       </MobileNav.LinkWrapper>
      </MobileNav.Content>
     </MobileNav.BottomBar>
    </>
   )}
  </>
 );
}
