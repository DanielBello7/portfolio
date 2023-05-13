import { FaEye, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { projects } from '../constants';
import { Fade } from 'react-awesome-reveal';
import { tabs } from '../constants';
import { useModalData } from '../ModalContext';
import React from 'react';

export function WorkExample({ id, title, tags, desc, img, repo, link, handleClick }) {
    const navigate = useNavigate();
    const output = tags.map((tag, index) => <p className='tag mb-2' key={index}>{tag}</p>);
    const HandleNavigation = () => navigate(`/project/${id}`);

    return (
        <div className='col-12 col-md-12 col-lg-12' id="project">
            <div className='w-100' id="asset-img" onClick={HandleNavigation}>
                <img
                    className="w-100 border border-2 rounded-4 mb-2 h-100 asst-img"
                    src={img}
                    alt="asset-img"
                />
            </div>

            <h5 className='fw-bold txt my-2 w-100'>{title}</h5>

            <div className='d-flex w-100 flex-row overflow-hidden mb-2 f'>
                {output.slice(0, 2)}
                {output.length > 2 && <p className='tag mb-2'>+{output.length - 2}</p>}
            </div>

            <p className='text-muted example-text mb-3'>{desc}</p>

            <div className='mt-3 d-flex flex-row'>
                <a
                    className='btn btn3'
                    href={link}
                    target="_blank"
                >
                    <FaEye className='me-2' />
                    <span>Preview</span>
                </a>
                <a
                    className='btn btn4 ms-2'
                    href={repo}
                    target="_blank"
                    onClick={() => !repo && handleClick()}
                >
                    <FaGithub className='me-2' />
                    <span>GitHub Repo</span>
                </a>
            </div>
        </div>
    );
}

export function WorkIntro() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <Fade triggerOnce duration={1000}>
                <h3 className='h1 fw-bold txt resume'>
                    <a id="work" href='#!' className='text-decoration-none text-dark'>Work</a>
                </h3>
            </Fade>
            <Fade triggerOnce duration={1000} className="d-flex justify-content-center">
                <p className='text-muted col-12 col-md-7 col-lg-7 text-center' id="work-text">
                    Check some of my commercial and non commercial projects.
                    If you have any questions feel free to ask me for more information.
                </p>
            </Fade>
        </div>
    )
}

function Work() {
    const [selected, setSelected] = React.useState(projects);
    const [active, setActive] = React.useState('All');
    const { ToggleToast } = useModalData();

    const output = selected.map(project => (
        <WorkExample
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
        const amount = projects.filter(project => project.tags.includes(tab));

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
                {tab} ({tab === 'All' ? projects.length : amount.length})
            </p>
        )
    });

    return (
        <React.Fragment>
            <div className='d-flex flex-column my-5 align-items-center'>
                <WorkIntro />
                <div className='mt-5 mb-3 d-flex flex-row overflow-hidden flex-warp align-items-center justify-content-center' id="tabsLine">
                    <Fade triggerOnce cascade duration={500}>{tabOutput}</Fade>
                </div>
                <div className='col-12 col-md-12 col-lg-10 my-4 d-flex flex-row flex-warp'>
                    <div className='w-100 m-0 p-0 row g-5'>
                        <Fade direction='up' cascade triggerOnce duration={1000} className="col-12 col-md-4 col-lg-4">
                            {output}
                        </Fade>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Work);