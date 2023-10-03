import logo from '../Images/Shinecoderlogo.png';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import Stepper from '../Stepper/Stepper';
import Steper from "../steper/Steper"
import Steppercontroler from '../Stepper/Steppercontroler';
import '../index.scss';
const Signupemail = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div>
      <Steppercontroler />
      {/* <Steper /> */}

    </div>
  );
};

export default Signupemail;
