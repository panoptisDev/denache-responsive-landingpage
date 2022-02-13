import { useState, useEffect } from 'react';
import Head from 'next/head';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Formik } from 'formik';

const ContactSection = styled.section`
 min-height: 80vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const ContactHeadingWrapper = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;
 @media (min-width: 320px) and (max-width: 480px) {
  margin-bottom: 100px;
 }
`;

const Form = styled(motion.form)`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;

const TextInputWrapper = styled(motion.div)`
 font-size: 16px;
 line-height: 24px;
 height: 72px;
 display: inline-block;
 position: relative;
 background-color: transparent;
 font-family: Roboto, sans-serif;
 transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
 cursor: auto;
 border-bottom-style: solid;
 border-bottom-width: 1px;
 border-bottom-color: #e0e0e0;

 &:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #8e8ced;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
 }

 &:focus-within:after {
  transform: scaleX(1);
  transform-origin: bottom left;
 }
`;

const TextInput = styled.input`
 appearance: textfield;
 padding: 0px;
 position: relative;
 width: 100%;
 border: none;
 outline: none;
 background-color: rgba(0, 0, 0, 0);
 color: rgba(0, 0, 0, 0.87);
 cursor: inherit;
 font: inherit;
 opacity: 1;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 height: 100%;
 box-sizing: border-box;
 margin-top: 14px;
`;

const TextInputLabel = styled.label`
 margin: 0;
 padding: 0;
 border: 0;
 font: inherit;
 vertical-align: baseline;
 position: absolute;
 line-height: 22px;
 top: 38px;
 transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
 z-index: 1;
 transform: scale(1) translate(0px, 0px);
 transform-origin: left top;
 pointer-events: none;
 user-select: none;
 color: rgba(0, 0, 0, 0.3);

 ${(props) =>
  props.filled &&
  css`
   transform: scale(0.75) translate(0px, -28px);
    color: rgba(0, 0, 0, 0.3);
  `}

 ${TextInputWrapper}:focus-within & {
  transform: scale(0.75) translate(0px, -28px);
  color: #8e8ced;
 }


`;
export default function Home() {
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
  <div>
   <Head>
    <title>Denache Development</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar windowDimension={windowDimension} />
    {windowDimension && <HeroSection windowDimension={windowDimension} />}
    <AboutSection />
    {windowDimension && <ServicesSection windowDimension={windowDimension} />}

    <ContactSection>
     {/* For menu scrolling */}
     <div id='Services' style={{ position: 'absolute', top: '-100px', left: 0 }}></div>
     <ContactHeadingWrapper>
      <h2>Let’s get in touch</h2>
      <p>Have a project in mind? Need a wise advice? Want to say hi? I’m excited to talk to you.</p>
     </ContactHeadingWrapper>

     <Formik
      initialValues={{ email: '', name: '', text: '' }}
      validate={(values) => {
       const errors = {};
       if (!values.email) {
        errors.email = 'Required';
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
       }
       return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
       setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
       }, 400);
      }}
     >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
       <Form onSubmit={handleSubmit}>
         <TextInputWrapper>
          <TextInputLabel filled={values.name ? true : false}>What is your name?</TextInputLabel>
          <TextInput
           type='text'
           name='name'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.name}
          />
          {errors.name && touched.name && errors.name}
         </TextInputWrapper>
         <TextInputWrapper>
          <TextInputLabel filled={values.email ? true : false}>Your email</TextInputLabel>
          <TextInput
           type='email'
           name='email'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.email}
          />
          {errors.email && touched.email && errors.email}
         </TextInputWrapper>

        {/* <textarea
         type='text'
         name='text'
         rows='1'
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.email}
        />
        {errors.email && touched.email && errors.email}
        <button type='submit' disabled={isSubmitting}>
         Submit
        </button> */}
       </Form>
      )}
     </Formik>
    </ContactSection>
   </main>

   <footer></footer>
  </div>
 );
}

export function getStaticProps(context) {
 /* No fetching necessary at this point */
 return {
  props: {},
 };
}
