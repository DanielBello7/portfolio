import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

function Socials({ reverse }) {
    return (
        <div className="d-flex flex-row">
            <Fade
                reverse={reverse}
                triggerOnce
                delay={900}
                duration={500}
                cascade
                direction={"down"}
            >
                <a href="https://github.com/DanielBello7" target="_blank" className='text-dark'>
                    <FaGithub size={24} />
                </a>

                <a href="https://www.linkedin.com/in/adegoke-bello-3397a3a6" target="_blank" className='text-dark'>
                    <FaLinkedin className='ms-3' size={24} />
                </a>

                <a href="https://twitter.com/OnlyBello_" target="_blank" className='text-dark'>
                    <FaTwitter className='ms-3' size={24} />
                </a>
            </Fade>
        </div>
    )
}

export default React.memo(Socials);