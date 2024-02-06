import { FaEye, FaGithub } from 'react-icons/fa';
import { useModalData } from '@/modal-context.jsx';
import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import * as React from 'react';
import { motion } from "framer-motion";

export default function Body(props) {
  const { project } = props;
  const { ToggleToast } = useModalData();

  const tags = project?.tags.map((tag, index) => {
    return (
      <span className='d-inline bg-light rounded-5' key={index}>
        {tag}
      </span>
    );
  });

  const onclick = () => {
    project.repo && ToggleToast(true, 'Currently unavailable', false);
  }

  return (
    <div className='w-100 d-flex flex-column flex-sm-column flex-md-column align-items-center flex-lg-row my-5'>
      <div className='col-12 col-md-12 col-lg-4 d-flex flex-column'>
        <div className='w-100' id="test">
          <Fade className='d-inline bg-light px-3 py-1 rounded-5 me-2 mb-2' cascade triggerOnce>
            {tags}
          </Fade>
        </div>

        <Fade triggerOnce cascade>
          <div className='w-100 mt-3 desc'>
            {project.desc}
          </div>
          <div className='w-100 mt-3 desc'>
            {project.more}
          </div>
        </Fade>

        <div className='w-100 mt-5'>
          <Fade delay={600} triggerOnce>
            <span>
              <FormattedMessage id="projectRoleInfo" />
            </span>
            <span className='h3 bg-dark text-white txt'>
              {project.role}
            </span>
          </Fade>
        </div>

        <Fade triggerOnce delay={600}>
          <div className='d-flex flex-row my-5'>
            <a className='btn btn-dark px-4 d-flex flex-row align-items-center'
              href={project.link} target="_blank" rel="noreferrer">
              <FaEye size={15} className="me-2" />
              <span>
                <FormattedMessage id="projectsPreviewButton" />
              </span>
            </a>
            <a className='btn btn-outline-dark px-4 d-flex flex-row align-items-center ms-2'
              rel="noreferrer" href={project.repo} target="_blank" onClick={onclick}>
              <FaGithub size={15} className="me-2" />
              <span>
                <FormattedMessage id="projectsGithubButton" />
              </span>
            </a>
          </div>
        </Fade>
      </div>

      <div className='col-12 col-md-12 col-lg-8 d-flex flex-row justify-content-center justify-content-end-lg'>
        <Fade className='col-12 col-md-12 col-lg-12 d-flex flex-row ms-0 ms-md-5 ms-lg-5' triggerOnce>
          <img
            src={project.img}
            id="proj-img"
            className='w-100 h-auto rounded-3 border shadow'
            alt="project-img"
          />
        </Fade>
      </div>
    </div>
  )
}

