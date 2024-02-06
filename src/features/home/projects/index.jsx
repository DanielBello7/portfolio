import { useModalData } from '@/modal-context.jsx';
import { projects } from '@/constants';
import { motion } from 'framer-motion';
import { container } from "./animation"
import Project from "./project";
import ProjectsIntro from "./projects-intro";
import * as React from 'react';

export default function Projects() {
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
        <div className='col-12 col-md-12 col-lg-10 my-4 d-flex flex-row flex-warp'>
          <motion.div className="w-100 m-0 p-0 row g-4 col-12 col-md-4 col-lg-4" variants={container}
            initial="hidden" whileInView="show" exit="hidden">
            {output}
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
}

