
import styled from 'styled-components';

import Image from 'next/image';
import Logo from '../public/Logo.svg';

import ContactButton from './ContactButton';
import MobileMenuItem from './MobileMenuItem';
import DesktopMenuItem from './DesktopMenuItem';


/* Desktop Components */
const DesktopNav = {
 Bar: styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10000;
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
 Link: DesktopMenuItem,
 ButtonWrapper: styled.div`
  flex: 1;
  justify-content: flex-end;
 `,
};

/* Mobile Components */
const MobileNav = {
 TopBar: styled(DesktopNav.Bar)`
  height: 65px;
  transition: 0.3s;
 `,
 BottomBar: styled(DesktopNav.Bar)`
  top: inherit;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 36px rgb(196 196 196 / 24%);
  z-index: 10000;
 `,
 Content: styled(DesktopNav.Content)`
  justify-content: space-around;
 `,
 Link: MobileMenuItem,
};

export default function Navbar({ windowDimension }) {
 
 return (
  <>
   {windowDimension >= 1024 ? (
    <DesktopNav.Bar>
     <DesktopNav.Content>
      <DesktopNav.LogoWrapper>
       <Image alt='denache logo' src={Logo} height={48} width={165} />
      </DesktopNav.LogoWrapper>
      <DesktopNav.LinkWrapper>
       <DesktopNav.Link itemName={'About'} key={1}/>
       <DesktopNav.Link itemName={'Services'} key={2}/>
       <DesktopNav.Link itemName={'Contact'} key={3}/>
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
       <MobileNav.Link itemName={'About'} key={1}/>
       <MobileNav.Link itemName={'Services'} key={2}/>
       <MobileNav.Link itemName={'Contact'} key={3} />
      </MobileNav.Content>
     </MobileNav.BottomBar>
    </>
   )}
  </>
 );
}
