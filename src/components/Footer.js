


import { Logo } from '../components/Header';

function Footer() {
  return (
  <footer className='mb-5 p-2 d-flex flex-row justify-content-between align-items-center bg-light'>
    <Logo />
    <p className='p-0 m-0 text-muted'>
    Website by <span className='text-dark fw-bold'>Daniel Bello</span>
    </p>
  </footer>
  )
}

export default Footer;