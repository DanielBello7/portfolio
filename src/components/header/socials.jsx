import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

export default function Socials(props) {
  const { reverse } = props;
  return (
    <div className="d-flex flex-row">
      <Fade
        reverse={reverse}
        direction={"down"}
        duration={500}
        delay={900}
        triggerOnce
        cascade
      >
        <a
          href="https://github.com/DanielBello7"
          rel="noreferrer"
          target="_blank"
          className='text-dark'
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/adegoke-bello-3397a3a6"
          rel="noreferrer"
          target="_blank"
          className='text-dark'
        >
          <FaLinkedin className='ms-3' size={24} />
        </a>

        <a
          href="https://twitter.com/OnlyBello_"
          target="_blank"
          rel="noreferrer"
          className='text-dark'
        >
          <FaTwitter className='ms-3' size={24} />
        </a>
      </Fade>
    </div>
  )
}

