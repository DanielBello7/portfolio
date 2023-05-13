import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import React from "react";

function Logo({ reverse }) {
    return (
        <Fade duration={1000} triggerOnce reverse={reverse}>
            <Link to="/" className='text-decoration-none text-dark'>
                <h3 id='logo' className="p-0 m-0 fw-bold">DanielBello.</h3>
            </Link>
        </Fade>
    );
}

export default React.memo(Logo);