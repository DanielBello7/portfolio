import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

function Default() {
    return (
        <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bold" id="error">
                404 Page Error
            </h1>

            <h1 className="col-5 text-center fw-bold" id="sorry">
                Oops. Sorry, the page you're looking for doesn't exist
            </h1>

            <p className="sorry-txt">
                Try starting from the homepage
            </p>

            <Link to="/" className="btn btn-dark d-flex align-items-center px-4">
                <FaArrowLeft size={12} className="me-1" />
                <span>Home</span>
            </Link>
        </div>
    )
}

export default React.memo(Default);