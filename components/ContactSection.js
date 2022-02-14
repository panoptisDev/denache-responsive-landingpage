import { useState, useEffect } from 'react';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import SubmitButton from '../components/SubmitButton';

import emailjs from '@emailjs/browser';
import { init } from "@emailjs/browser";

const Section = styled.section`
 position: relative;
 min-height: 60vh;
 display: flex;
 gap: 20px;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin-left: -1rem;
 margin-right: -1rem;
 margin-top: 150px;
 padding: 50px 0 50px 0;
 background-color: #f5f5fa;
 @media (max-width: 700px) {
  padding: 50px;
 }
 @media (max-width: 480px) {
  background-color: rgb(0, 0, 0, 0);
  margin-left: 0;
  margin-right: 0;
  padding: 20px;
 }
`;

const ContactHeadingWrapper = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 0px;
`;

const Form = styled(motion.form)`
 display: flex;
 flex-direction: column;
 gap: 10px;
 justify-content: center;
 align-items: center;
 width: 100%;
 max-width: 30rem;
`;

const TextInputWrapper = styled(motion.div)`
 font-size: 16px;
 line-height: 24px;
 width: 100%;
 height: 72px;
 ${(props) =>
  props.height &&
  css`
   height: max(72px, ${props.height + 48}px);
  `}
 display: inline-block;
 position: relative;
 background-color: transparent;
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

 font-family: Inter;
 font-weight: 300;
`;

const TextInputLabel = styled.label`
 margin: 0;
 padding: 0;
 border: 0;
 font-family: Inter;
 font-weight: 300;
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

 ${(props) =>
  props.errorMessage &&
  css`
   &:after {
    color: rgb(183, 20, 22);
    margin-left: 20px;
    content: '(${props.errorMessage})';
   }
  `}

 ${TextInputWrapper}:focus-within & {
  transform: scale(0.75) translate(0px, -28px);
  color: #8e8ced;
 }
`;

const TextArea = styled(motion.textarea)`
 ${(props) =>
  props.height &&
  css`
   height: ${props.height}px;
  `}
 width: 100%;
 resize: none;
 font: inherit;
 font-family: Inter;
 font-weight: 300;
 line-height: 24px;
 padding: 0px;
 cursor: inherit;
 position: relative;
 border: none;
 outline: none;
 background-color: rgba(0, 0, 0, 0) !important;
 color: rgba(0, 0, 0, 0.87);
 opacity: 1;
 margin-top: 36px;
 margin-bottom: -36px;
 box-sizing: border-box;
 appearance: textfield;
`;

export default function ContactSection() {
 // resizing textarea automatically
 const [textAreaHeight, setTextAreaHeight] = useState('');

 function autoResize(element) {
  console.log(textAreaHeight);
  setTextAreaHeight(element.target.scrollHeight);
 }

 return (
  <Section>
   {/* For menu scrolling */}
   <div id='Contact' style={{ position: 'absolute', top: '-100px', left: 0 }}></div>
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
     emailjs.send('default_service', 'template_na05sca', values, "user_63pGT8hWBe7iovDx4v0uc").then(
      function (response) {
       setSubmitting(false);
       console.log('SUCCESS!', response.status, response.text, values);
      },
      function (error) {
       setSubmitting(false);
       console.log('FAILED...', error, values);
      }
     );
    }}
   >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
     <Form id='contactForm' onSubmit={handleSubmit}>
      <TextInputWrapper>
       <TextInputLabel filled={values.name ? true : false}>What is your name?</TextInputLabel>
       <TextInput type='text' name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} />
      </TextInputWrapper>
      <TextInputWrapper>
       <TextInputLabel
        filled={values.email ? true : false}
        errorMessage={errors.email && touched.email && errors.email}
       >
        Your email*
       </TextInputLabel>
       <TextInput
        type='email'
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
       />
      </TextInputWrapper>

      <TextInputWrapper height={textAreaHeight}>
       <TextInputLabel
        filled={values.text ? true : false}
        errorMessage={errors.text && touched.text && errors.text}
       >
        How can I help you?
       </TextInputLabel>
       <TextArea
        type='text'
        name='text'
        rows='1'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.text}
        onInput={autoResize}
        height={textAreaHeight}
        spellCheck={false}
       />
      </TextInputWrapper>
      <br></br>
      <SubmitButton text='Hit me with it!' size='10px 40px 10px 40px' disabled={isSubmitting} />
     </Form>
    )}
   </Formik>
  </Section>
 );
}
