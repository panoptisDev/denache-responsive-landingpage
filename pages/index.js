import { motion } from 'framer-motion'
import Head from 'next/head'
import styled from 'styled-components'
import NavigationBar from "../components/NavigationBar"

import ContactButton from '../components/ContactButton'

const HeroSection = styled.section`
  display: flex;
  align-items: center;

  @media (min-width: 64rem) {
    width: 56rem;
    margin: 0 auto;
    margin-top: 96px;
  }

  @media (min-width: 34rem) {
    margin-top: 96px;
    margin: 0 auto;
    margin-top: 96px;
  }
`

const HeroTextWrapper = styled(motion.div)`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const HeroImageWrapper = styled(motion.div)`
  flex: 1 1;
`



export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavigationBar/>
        <HeroSection>
          <HeroTextWrapper>
            <h1>
            Smart, creative development.
            </h1>
            <p>
            No techie? No problem. I provide creative and professional software development for your business vision.
            </p>
            <ContactButton text="Talk to me" url={"/"} size="10px 28px" float="left"/>
          </HeroTextWrapper>
          <HeroImageWrapper></HeroImageWrapper>
        </HeroSection>
      </main>

      <footer>
      </footer>
    </div>
  )
}
