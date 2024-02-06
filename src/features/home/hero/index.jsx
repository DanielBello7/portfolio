import HeroImage from './hero-image';
import HeroText from './hero-text';
import React from 'react';

export default function Hero() {
  return (
    <React.Fragment>
      <div className='col-12 col-md-12 col-lg-9 d-flex flex-column-reverse flex-md-row flex-lg-row align-self-center align-items-center my-5 pt-5' id="landing">
        <div className='col-12 col-md-4 col-lg-4'>
          <HeroImage />
        </div>

        <div className='col-12 col-md-8 col-lg-8'>
          <HeroText />
        </div>
      </div>
    </React.Fragment>
  );
}
