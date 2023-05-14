import Logo from '../modules/Logo';
import React from 'react';

function Footer() {
    return (
        <footer className='container-xl w-100 p-2 d-flex flex-row justify-content-between align-items-center bg-light'>
            <Logo />
            <p className='p-0 m-0 text-muted'>
                <span>Website by</span>
                <span className='ms-1 text-dark fw-bold'>Daniel Bello</span>
            </p>
        </footer>
    )
}

export default React.memo(Footer);