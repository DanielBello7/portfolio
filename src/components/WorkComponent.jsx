import { useModalData } from '../ModalContext';
import { Fade } from 'react-awesome-reveal';
import { projects } from '../constants';
import { tabs } from '../constants';
import React from 'react';
import Work from '../modules/Work';

function WorkIntro() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <Fade triggerOnce duration={1000}>
                <h3 className='h1 fw-bold txt resume'>
                    <a id="work" href='#!' className='text-decoration-none text-dark'>Work</a>
                </h3>
            </Fade>
            <Fade triggerOnce duration={1000} className="d-flex justify-content-center">
                <p className='text-muted col-12 col-md-7 col-lg-7 text-center' id="work-text">
                    Check some of my previous work and projects.
                    If you have any questions feel free to ask me for more information.
                </p>
            </Fade>
        </div>
    )
}

function WorkComponent() {
    const [selected, setSelected] = React.useState(projects);
    const [active, setActive] = React.useState('All');
    const { ToggleToast } = useModalData();

    const output = selected.map(project => (
        <Work
            title={project.title}
            key={project.id}
            tags={project.tags}
            desc={project.desc}
            img={project.img}
            repo={project.repo}
            link={project.link}
            id={project.id}
            handleClick={() => ToggleToast(true, 'Currently unavailable')}
        />
    ));

    const tabOutput = tabs.map((tab, index) => {
        const HandleSelection = () => {
            setActive(tab);
            if (tab === 'All') return setSelected(projects);
            const all = projects.filter(project => project.tags.includes(tab));
            return setSelected(all);
        }

        return (
            <p
                className={`${active === tab && 'bg-dark bg-opacity-75 text-white'} tags my-2 mb-md-0 mb-lg-0 `}
                key={index}
                onClick={HandleSelection}
            >
                {tab}
            </p>
        )
    });

    return (
        <React.Fragment>
            <div className='d-flex flex-column my-5 align-items-center'>
                <WorkIntro />
                {/* <div className='mt-5 mb-3 d-flex flex-row overflow-hidden flex-warp align-items-center justify-content-center' id="tabsLine">
                    <Fade triggerOnce cascade duration={500}>
                        {tabOutput}
                    </Fade>
                </div> */}
                <div className='col-12 col-md-12 col-lg-10 my-4 d-flex flex-row flex-warp'>
                    <div className='w-100 m-0 p-0 row g-4'>
                        <Fade direction='up' cascade triggerOnce duration={1000} className="col-12 col-md-4 col-lg-4">
                            {output}
                        </Fade>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(WorkComponent);