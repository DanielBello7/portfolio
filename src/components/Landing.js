


import DotsBox from './DotsBox';
import { assets } from '../constants';


export function LandingImage() {
  return (
  <div id="landing-image" className='w-100 position-relative'>
  <div>
    <div id="skewed2" />
    <div id="handle2">
    <DotsBox amount={97} color={"rgb(0, 0, 0, 0.6)"} height={"100px"} width={"190px"}/>
    </div>
  </div>
  <img src={assets.img1} id="img" className='w-100' alt='user-img' />
  <div>
    <div id="skewed3" />
    <div id="handle3">
    <DotsBox amount={65} color={"rgb(0, 0, 0, 0.6)"} height={"60px"} width={"150px"}/>
    </div>
  </div>
  </div>
  )
}

export function LandingText() {
  return (
  <div className='ms-4'>
  
  <div className='w-100 position-relative'>
  <div id="small-box" className="zindex-dropdown"></div>
  <h1 className='fw-bold zindex-tooltip' id="text1">
  Hi, I'm Daniel and I'm a <span className='bg-dark text-white'>Full-Stack Developer</span>.
  </h1>
  </div>

  <p className='w-100 w-md-75 w-lg-75 text-muted' id="text2">
  I'm a full-stack developer based in Abuja, Nigeria. 
  I have 5 years developing experience and i specialize 
  in creating web applications. I am open for new opportunities and interesting projects.
  </p>

  <div className='d-flex flex-row'>
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

export default Landing;