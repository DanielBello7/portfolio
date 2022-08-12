


import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Default() {
  return (
  <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
  <h1 className="fw-bold" id="error">404 Page Error</h1>
  <h1 className="col-5 text-center fw-bold" id="sorry">
  Oops. Sorry, the page you're looking for doesn't exist
  </h1>
  <p className="sorry-txt">Try starting from the homepage</p>
  <Link to="/" className="btn btn-dark px-4">
    <span>Home</span>
    <FaArrowRight size={12} className="ms-1"/>
  </Link>
  </div>
  )
}

export default Default;