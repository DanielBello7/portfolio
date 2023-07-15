import { FormattedMessage } from 'react-intl';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Default() {
    return (
        <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bold" id="error">
                <FormattedMessage id='notFoundErrorTitle' />
            </h1>

            <h1 className="col-5 text-center fw-bold" id="sorry">
                <FormattedMessage id='notFoundErrorMsg' />
            </h1>

            <p className="sorry-txt">
                <FormattedMessage id='notFoundErrorSupportTxt' />
            </p>

            <Link to="/" className="btn btn-dark d-flex align-items-center px-4">
                <FaArrowLeft size={12} className="me-1" />
                <span>
                    <FormattedMessage id='notFoundErrorButton' />
                </span>
            </Link>
        </div>
    )
}