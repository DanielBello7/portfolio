


import DotsBox from './DotsBox';
import { assets } from '../constants';
import { Fade } from 'react-awesome-reveal';


export function LandingImage() {
  return (
  <div id="landing-image" className='w-100 position-relative'>
    {/* <div>
    <div id="skewed2" />
    <div id="handle2">
    <DotsBox amount={45} color={"rgb(0, 0, 0, 0.2)"} height={"70px"} width={"120px"}/>
    </div>
    </div> */}
    <Fade triggerOnce duration={1000} delay={2000}>
    <img src={assets.img1} id="img" className='w-100' alt='user-img' />
    </Fade>

    {/* <div>
    <div id="skewed3" />
    <div id="handle3">
    <DotsBox amount={40} color={"rgb(0, 0, 0, 0.2)"} height={"50px"} width={"110px"}/>
    </div>
    </div> */}
  </div>
  )
}

export function LandingText() {
  return (
  <div className='ms-0 ms-md-4 ms-lg-4 text-center text-md-start text-lg-start'>
  
  <div className='w-100 position-relative'>
  <Fade delay={2000} duration={2000}>
  <div id="small-box" className="zindex-dropdown"></div>
  </Fade>
  
  <Fade triggerOnce direction='up' delay={2000} duration={1000}>
  <h1 className='fw-bold zindex-tooltip' id="text1">
  Hi, I'm Daniel and I'm a <span className='bg-dark text-white'>Full-Stack Developer</span>.
  </h1>
  </Fade>
  </div>

  <Fade triggerOnce direction='up' duration={1000} delay={2500}>
  <p className='w-100 w-md-75 w-lg-75 text-muted my-5 my-md-3 my-lg-3' id="text2">
  I'm a computer engineer based in Abuja, Nigeria. 
  I have 5 years developing experience and i specialize 
  in full-stack software development (and occasionally designing). 
  I am focused on building exceptional digital experiences, 
  and i am open for new opportunities and interesting projects.
  </p>
  </Fade>

  <Fade triggerOnce direction='up' duration={1000} delay={3000}>
  <div className='d-flex flex-row justify-content-center justify-content-md-start justify-content-lg-start'>
  <a href="#contact" className='btn btn1'>Contact me</a>
  <a href="#work" className='btn ms-2 btn2'>Check my work</a>
  </div>
  </Fade>
  </div>
  )
}

function Landing() {
  return (
  <div className='col-12 col-md-12 col-lg-9 d-flex flex-column-reverse flex-md-row flex-lg-row align-self-center align-items-center my-4' id="landing">
  <div className='col-12 col-md-4 col-lg-4'><LandingImage /></div>
  <div className='col-12 col-md-8 col-lg-8 mb-5'><LandingText /></div>
  </div>
  );
}

export default Landing;