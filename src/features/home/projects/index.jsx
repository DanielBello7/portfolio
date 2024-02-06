import { useModalData } from '@/modal-context.jsx';
import { Fade } from 'react-awesome-reveal';
import { projects } from '@/constants';
import Project from "./project";
import ProjectsIntro from "./projects-intro";
import ProjectsTabs from './projects-tabs';
import * as React from 'react';

export default function Projects() {
  const [active, setActive] = React.useState('all');
  const [selected] = React.useState(projects);
  const { ToggleToast } = useModalData();

  const output = selected.map((project, idx) => (
    <Project {...project} key={idx}
      handleClick={() => ToggleToast(true, 'Currently unavailable')}
    />
  ));

  return (
    <React.Fragment>
      <div className='d-flex flex-column my-5 align-items-center'>
        <ProjectsIntro />
        <ProjectsTabs active={active} setActive={setActive} />
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

