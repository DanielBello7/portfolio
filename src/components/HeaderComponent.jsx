import { Fade } from 'react-awesome-reveal';
import Socials from '../modules/Socials';
import Logo from '../modules/Logo';
import React from 'react';

function Navigation() {
    return (
        <div className="d-flex flex-row my-3 my-md-0 my-lg-0">
            <Fade
                direction={"down"}
                duration={500}
                triggerOnce
                cascade
                reverse={false}
            >
                <a href="#work" className='btn txts'>Work</a>
                <a href="/home/#resume" className='btn ms-lg-5 txts'>Resume</a>
                <a href="#contact" className='btn ms-lg-5 txts'>Contact</a>
            </Fade>
        </div>
    )
}

function Header() {
    return (
        <header className="container-xl w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center pt-3 pb-3">
            <Logo reverse={false} />
            <Navigation />
            <Socials reverse={false} />
        </header>
    )
}

export default React.memo(Header);