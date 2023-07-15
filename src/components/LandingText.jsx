import { FormattedMessage } from "react-intl";
import { Fade } from 'react-awesome-reveal';
import React from 'react';

export default function LandingText() {
  return (
    <div className='ms-0 ms-md-4 ms-lg-4 mb-5 mb-md-0 mb-lg-0 text-center text-md-start text-lg-start'>

      <div className='w-100 position-relative'>
        <Fade delay={2000} duration={2000}>
          <div id="small-box" className="zindex-dropdown" />
        </Fade>

        <Fade triggerOnce direction='up' delay={2000} duration={1000}>
          <h1 className='fw-bold zindex-tooltip' id="text1">
            <span className=''>
              <FormattedMessage id="landingTextTitle" />
            </span>
            <span className='bg-dark text-white'>
              <FormattedMessage id="landingTextTitleSub" />
            </span>.
          </h1>
        </Fade>
      </div>

      <Fade triggerOnce direction='up' duration={1000} delay={2500}>
        <p className='w-100 w-md-75 w-lg-75 text-muted my-5 my-md-3 my-lg-3' id="text2">
          <FormattedMessage id="landingTextMsg" />
        </p>
      </Fade>

      <Fade triggerOnce direction='up' duration={1000} delay={3000}>
        <div className='d-flex flex-row justify-content-center justify-content-md-start justify-content-lg-start'>
          <a href="#contact" className='btn btn1'>
            <FormattedMessage id="landingTextContactButton" />
          </a>

          <a href="#work" className='btn ms-2 btn2'>
            <FormattedMessage id="landingTextWorkButton" />
          </a>
        </div>
      </Fade>
    </div>
  )
}
