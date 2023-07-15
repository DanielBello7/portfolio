import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

export default function WorkIntro() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <Fade triggerOnce duration={1000}>
        <h3 className='h1 fw-bold txt resume'>
          <a id="work" href='#!' className='text-decoration-none text-dark'>
            <FormattedMessage id="workIntroTitle" />
          </a>
        </h3>
      </Fade>
      <Fade triggerOnce duration={1000} className="d-flex justify-content-center">
        <p className='text-muted col-12 col-md-7 col-lg-7 text-center' id="work-text">
          <FormattedMessage id="workIntroMsg" />
        </p>
      </Fade>
    </div>
  )
}
