


import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export function Logo() {
  return (
  <span>
  <h3 id='logo' className="p-0 m-0 fw-bold">DanielBello.</h3>
  </span>
  );
}

export function Socials() {
  return (
  <div className="d-flex flex-row">
  <FaGithub size={24}/>
  <FaLinkedin className='ms-3' size={24}/>
  <FaTwitter className='ms-3' size={24}/>
  </div>
  )
}

export default function Header() {
  return (
  <header className="w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center pt-3 pb-3">
  <Logo />

  <div className="d-flex flex-row">
  <button className='btn'>Work</button>
  <button className='btn ms-lg-5'>Resume</button>
  <button className='btn ms-lg-5'>Contact</button>
  </div>
  
  <Socials />
  </header>
  )
}