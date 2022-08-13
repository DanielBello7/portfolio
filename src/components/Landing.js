


import { assets } from '../constants';

export function LandingImage() {
  return (
  <div id="landing-image" className='w-100'>
  <img src={assets.img1} 
       id="img"
       className='w-100'
       alt='user-img'
       />
  </div>
  )
}

export function LandingText() {
  return (
  <div className='ms-4'>
  <h1 className='fw-bold' id="text1">
    Hi, I'm Daniel and I'm a <span className='bg-dark text-white'>Full-Stack Developer</span>.
  </h1>
  <p className='w-100 w-md-75 w-lg-75 text-muted' id="text2">
  I'm a full-stack developer based in Abuja, Nigeria. 
  I have 5 years developing experience and i specialize 
  in creating web applications. I am open for new opportunities and interesting projects.
  </p>

  <div>
  <a href="#contact" className='btn btn1'>Contact me</a>
  <a href="#work" className='btn ms-2 btn2'>Check my work</a>
  </div>
  </div>
  )
}

function Landing() {
  return (
  <div className='col-12 col-md-12 col-lg-8 d-flex flex-column-reverse flex-md-row flex-lg-row align-self-center align-items-center my-5' id="landing">
  <div className='col-12 col-md-4 col-lg-4'><LandingImage /></div>
  <div className='col-12 col-md-8 col-lg-8 mb-5'><LandingText /></div>
  </div>
  );
}

export default Landing