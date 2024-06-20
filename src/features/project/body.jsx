import { FaEye, FaGithub } from 'react-icons/fa';
import { useModalData } from '@/modal-context.jsx';
import { FormattedMessage } from 'react-intl';
import { motion } from "framer-motion";
import { container, item } from "./animation";
import * as React from 'react';

export default function Body(props) {
  const { ToggleToast } = useModalData();
  const { project } = props;

  const tags = project?.tags.map((tag, index) => {
    return (
      <motion.span className='d-inline bg-light rounded-5 p-1 px-3 me-2 mb-2' key={index} variants={item}>
        {tag}
      </motion.span>
    );
  });

  const onclick = () => {
    project.repo && ToggleToast(
      true,
      'Currently unavailable',
      false
    );
  }

  return (
    <div className='w-100 d-flex flex-column flex-sm-column flex-md-column align-items-center flex-lg-row my-5'>
      <div className='col-12 col-md-12 col-lg-4 d-flex flex-column'>
        <motion.div id="test" className='w-100 flex-wrap' variants={container} initial="hidden" animate="show" exit="hidden">
          {tags}
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" exit="hidden">
          <motion.div className='w-100 mt-3 desc' variants={item}>
            {project.desc}
          </motion.div>
          <motion.div className='w-100 mt-3 desc' variants={item}>
            {project.more}
          </motion.div>
        </motion.div>

        <motion.div className='w-100 mt-5' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <span>
            <FormattedMessage id="projectRoleInfo" />
          </span>
          <span className='h3 bg-dark text-white txt'>
            {project.role}
          </span>
        </motion.div>

        <motion.div className='d-flex flex-row my-5' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}>
          <a className='btn btn-dark px-4 d-flex flex-row align-items-center' href={project.link} target="_blank" rel="noreferrer">
            <FaEye size={15} className="me-2" />
            <span>
              <FormattedMessage id="projectsPreviewButton" />
            </span>
          </a>
          <a className='btn btn-outline-dark px-4 d-flex flex-row align-items-center ms-2' rel="noreferrer" href={project.repo} target="_blank" onClick={onclick}>
            <FaGithub size={15} className="me-2" />
            <span>
              <FormattedMessage id="projectsGithubButton" />
            </span>
          </a>
        </motion.div>
      </div>

      <div className='col-12 col-md-12 col-lg-8 d-flex flex-row justify-content-center justify-content-end-lg'>
        <motion.div className='col-12 col-md-12 col-lg-12 d-flex flex-row ms-0 ms-md-5 ms-lg-5' initial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true }}>
          <img
            src={project.img}
            id="proj-img"
            className='w-100 h-auto border shadow'
            alt="project-img"
          />
        </motion.div>
      </div>
    </div>
  )
}


