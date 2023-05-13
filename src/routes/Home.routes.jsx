import Landing from '../components/LandingComponent';
import Contact from '../components/ContactComponent';
import Work from '../components/WorkComponent';
import Resume from '../components/ResumeComponent';
import React from 'react';

function Home() {
    return (
        <main className="container-xl w-100 d-flex flex-column overflow-hidden">
            <Landing />
            <br /><br />

            {/* <Work />
            <br /><br />

            <Resume />
            <br /><br />

            <Contact /> */}
        </main>
    );
}

export default React.memo(Home);