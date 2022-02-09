import { motion } from "framer-motion";
import styled from "styled-components";

import Image from "next/image";
import Logo from "../public/Logo.svg"

import ContactButton from "./ContactButton";

const NavigationBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  height: 75px;
  box-shadow: 0 4px 36px rgb(196 196 196 / 24%);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  flex: 1;
`

const LinkWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const Link = styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #26262e;
  padding: 0;
  background-color: initial;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
`

const ButtonWrapper = styled.div`
 flex: 1;
 justify-content: flex-end;
`



export default function Navbar() {
  return (
    <NavigationBar>
      <Content>
        <LogoWrapper>
          <Image alt="denache logo" src={Logo} height={48} width={165}/>
        </LogoWrapper>
        <LinkWrapper>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Contact</Link>
        </LinkWrapper>
        <ButtonWrapper>
          <ContactButton text="Talk to me" url={"/"} size="10px 20px"/>
        </ButtonWrapper>
      </Content>
    </NavigationBar>
  )
}

