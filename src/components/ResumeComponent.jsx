import { experience, skills } from '../constants';
import { FaDownload } from 'react-icons/fa';
import { assets } from '../constants';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

function WorkExperience({ title, location, period }) {
    return (
        <div className='col-12 col-md-12 col-lg-12'>
            <h5 className='fw-bold txt h4 mt-5'>{title}</h5>
            <h5 className='txt h4'>{location}</h5>
            <h5 className='txt h5'>{period}</h5>
        </div>
    )
}

function Resume() {
    const output = experience.map((item, index) => {
        return (
            <WorkExperience
                key={index}
                title={item.title}
                location={item.location}
                period={item.period}
            />
        )
    });

    const skillsOutput = skills.map((skill, index) => (
        <h5 className='col-12' key={index}>{skill}</h5>
    ));

    return (
        <div className='my-5 d-flex flex-column align-items-center'>
            <div className='col-12 col-md-7 col-lg-7 text-center mb-5'>

                <div className='w-100 position-relative'>
                    <h3 className='h1 txt fw-bold resume'>
                        <Fade triggerOnce>
                            <a id="resume" href='#!' className='text-decoration-none text-dark'>Resume</a>
                        </Fade>
                    </h3>
                </div>

                <Fade triggerOnce>
                    <p className='text-center text-muted' id="resume-text">
                        My journey so far as a computer engineer,
                        specializing in full-stack software development
                        started in school. The following years saw me
                        develop my skills in web development.
                        After school i progressed with me
                        developing my skills as a software engineer,
                        focusing on networking, software development,
                        DevOps and space technology engineering.
                    </p>
                </Fade>
            </div>

            <div className='w-100 d-flex flex-column flex-md-row flex-lg-row'>
                <div className='col-0 col-md-4 col-lg-4'></div>

                <div className='col-12 col-md-4 col-lg-4'>
                    <Fade triggerOnce>
                        <div className='my-5 text-center'>
                            <h3 className='h1 txt fw-bold bg-dark text-white d-inline'>Education</h3>
                            <h5 className='fw-bold txt h4 mt-5'>B.Eng Computer Engineering</h5>
                            <h5 className='txt h4'>Ekiti State University</h5>
                            <h5 className='txt h5'>2015 - 2019</h5>
                        </div>
                    </Fade>
                </div>

                <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
                    <Fade delay={500} triggerOnce>
                        <div id="center-img">
                            <img
                                src={assets.user_img1}
                                id="user-img"
                                alt="user-img"
                            />
                        </div>
                    </Fade>
                </div>
            </div>


            <div className='col-12 col-md-12 col-lg-9 my-5 text-center'>
                <Fade triggerOnce>
                    <h3 className='h1 txt fw-bold bg-dark text-white d-inline'>Work Experience</h3>
                </Fade>
                <div className='mt-3 w-100 row gx-2 m-0 justify-content-between'>
                    <Fade triggerOnce className='col-12 col-md-4 col-lg-4' cascade direction='up'>
                        {output}
                    </Fade>
                </div>
            </div>

            <div className='col-12 col-md-9 col-lg-9 my-5 text-center'>
                <Fade triggerOnce>
                    <h3 className='h1 txt fw-bold bg-dark text-white d-inline'>Skills and Technologies</h3>
                </Fade>
                <div className='mt-5 w-100 row gx-1 m-0 text-center'>
                    <Fade triggerOnce className='col-4' cascade duration={200}>
                        {skillsOutput}
                    </Fade>
                </div>
            </div>

            <div className='col-9 my-5 text-center'>
                <Fade>
                    <p>Download my resume as a PDF file</p>
                    <a
                        href="/assets/Daniel-Bello-Resume.pdf"
                        download="Daniel Bello Resume.pdf"
                        className='btn btn-dark px-4'
                    >
                        <FaDownload className='me-2' />
                        <span>Download (1.9MB)</span>
                    </a>
                </Fade>
            </div>
        </div>
    )
}

export default React.memo(Resume);