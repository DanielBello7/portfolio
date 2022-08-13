


import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export function Logo() {
  return (
  <Link to="/" className='text-decoration-none text-dark'>
  <h3 id='logo' className="p-0 m-0 fw-bold">DanielBello.</h3>
  </Link>
  );
}

export function Socials() {
  return (
  <div className="d-flex flex-row">
  <a href="https://github.com/DanielBello7" className='text-dark'><FaGithub size={24}/></a>

  <a href="https://www.linkedin.com/in/adegoke-bello-3397a3a6" 
     className='text-dark'><FaLinkedin className='ms-3' size={24}/></a>

  <a href="https://twitter.com/OnlyBello_" className='text-dark'><FaTwitter className='ms-3' size={24}/></a>
  </div>
  )
}

export default function Header() {
  return (
  <header className="w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center pt-3 pb-3">
  <Logo />

  <div className="d-flex flex-row">
  <a href="#work" className='btn'>Work</a>
  <a href="/home/#resume" className='btn ms-lg-5'>Resume</a>
  <a href="#contact" className='btn ms-lg-5'>Contact</a>
  </div>
  
  <Socials />
  </header>
  )
}