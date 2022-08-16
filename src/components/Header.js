


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';


export function Logo({ reverse }) {
  return (
  <Fade duration={1000} triggerOnce reverse={reverse}>
  <Link to="/" className='text-decoration-none text-dark'>
  <h3 id='logo' className="p-0 m-0 fw-bold">DanielBello.</h3>
  </Link>
  </Fade>
  );
}

export function Socials({ reverse }) {
  return (
  <div className="d-flex flex-row">
  <Fade delay={900} triggerOnce duration={500} reverse={reverse} cascade direction={!reverse ? "down" : "up"}>
  <a href="https://github.com/DanielBello7" className='text-dark'><FaGithub size={24}/></a>

  <a href="https://www.linkedin.com/in/adegoke-bello-3397a3a6" 
     className='text-dark'><FaLinkedin className='ms-3' size={24}/></a>

  <a href="https://twitter.com/OnlyBello_" className='text-dark'><FaTwitter className='ms-3' size={24}/></a>
  </Fade>
  </div>
  )
}

export default function Header() {
  const [close, setClose] = useState(false);

  return (
  <header className="w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center pt-3 pb-3">
  <Logo reverse={close}/>

  <div className="d-flex flex-row my-3 my-md-0 my-lg-0">
  <Fade duration={500} triggerOnce direction={!close ? "down" : "up"} cascade reverse={close}>
  <a href="#work" className='btn txts'>Work</a>
  <a href="/home/#resume" className='btn ms-lg-5 txts'>Resume</a>
  <a href="#contact" className='btn ms-lg-5 txts'>Contact</a>
  </Fade>
  </div>
  
  <Socials reverse={close}/>
  </header>
  )
}