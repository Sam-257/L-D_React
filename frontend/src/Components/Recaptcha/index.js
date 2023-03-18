import React from 'react'
import { ReCAPTCHA } from "react-google-recaptcha";

const Recaptcha = () => {
    const recaptchaRef = React.createRef();
  const handleCaptcha = () => {
      console.log('sdasdasd');
  }
  return (
      <>
      <h1>sdasfasS</h1>
    <ReCAPTCHA
    ref={recaptchaRef}
    sitekey="6LdXGkogAAAAANNbG9yznovJpJ_dsV70jBbMNDW8"
    onChange={handleCaptcha}
  />  
  </>
  )
}

export default Recaptcha