import { Fade } from 'react-awesome-reveal';
import { assets } from '../constants';
import React from 'react';

function LandingImage() {
    return (
        <div id="landing-image" className='w-100 position-relative' style={{ height: '350px' }}>
            <Fade triggerOnce duration={1000} delay={2000}>
                <img
                    src={assets.user_img4}
                    id="img"
                    className='w-100 h-100 rounded-3'
                    style={{ objectFit: 'cover' }}
                    alt='user-img'
                />
            </Fade>
        </div >
    )
}

function LandingText() {
    return (
        <div className='ms-0 ms-md-4 ms-lg-4 mb-5 mb-md-0 mb-lg-0 text-center text-md-start text-lg-start'>

            <div className='w-100 position-relative'>
                <Fade delay={2000} duration={2000}>
                    <div id="small-box" className="zindex-dropdown" />
                </Fade>

                <Fade triggerOnce direction='up' delay={2000} duration={1000}>
                    <h1 className='fw-bold zindex-tooltip' id="text1">
                        <span className=''>Hi, I'm Daniel and I'm a </span>
                        <span className='bg-dark text-white'>Full-Stack Developer</span>.
                    </h1>
                </Fade>
            </div>

            <Fade triggerOnce direction='up' duration={1000} delay={2500}>
                <p className='w-100 w-md-75 w-lg-75 text-muted my-5 my-md-3 my-lg-3' id="text2">
                    I'm a computer engineer based in Abuja, Nigeria.
                    I have 6 years developing experience and i specialize
                    in full-stack software development (and occasionally designing).
                    I am focused on building exceptional digital experiences,
                    and i am open for new opportunities and interesting projects.
                </p>
            </Fade>

            <Fade triggerOnce direction='up' duration={1000} delay={3000}>
                <div className='d-flex flex-row justify-content-center justify-content-md-start justify-content-lg-start'>
                    <a href="#contact" className='btn btn1'>
                        Contact me
                    </a>

                    <a href="#work" className='btn ms-2 btn2'>
                        Check my work
                    </a>
                </div>
            </Fade>
        </div>
    )
}

function Landing() {
    return (
        <React.Fragment>
            <div className='col-12 col-md-12 col-lg-9 d-flex flex-column-reverse flex-md-row flex-lg-row align-self-center align-items-center my-5 pt-5' id="landing">
                <div className='col-12 col-md-4 col-lg-4'>
                    <LandingImage />
                </div>

                <div className='col-12 col-md-8 col-lg-8'>
                    <LandingText />
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Landing);