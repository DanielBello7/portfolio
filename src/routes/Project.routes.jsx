import { FaEye, FaGithub } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import { Fade } from 'react-awesome-reveal';
import { useModalData } from '../ModalContext';
import React from 'react';
import EmptyProject from '../modules/EmptyProject';

export default function Project() {
  const [project, setProject] = React.useState(null);
  const { ToggleToast } = useModalData();
  const params = useParams();

  const tags = project?.tags.map((tag, index) => {
    return (
      <span className='d-inline bg-light rounded-5' key={index}>
        {tag}
      </span>
    );
  });

  const imgs = project?.imgs?.map((img, index) => (
    <div className='col-12 col-md-12 col-lg-12' key={index}>
      <img src={img} className="more-img shadow rounded-3 border" alt="short-imgs" />
    </div>
  ));

  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
    const selectedProject = parseInt(params.projectID);
    const result = projects.find(item => item.id === selectedProject);
    if (!result) return setProject(null);
    setProject(result);
  }, [params.projectID]);

  if (!project) return <EmptyProject />

  return (
    <div className='container-xl w-100 d-flex flex-column align-items-center'>
      <main className='col-12 col-md-10 col-lg-10 my-5 d-flex flex-column'>
        <Fade triggerOnce>
          <h1 className='title2 d-block d-md-none d-lg-none align-self-start'>{project.title}</h1>
          <h1 className='title d-none d-md-block d-lg-block align-self-start'>{project.title}</h1>
        </Fade>

        <div className='w-100 d-flex flex-column flex-sm-column flex-md-column align-items-center flex-lg-row my-5'>
          <div className='col-12 col-md-12 col-lg-4 d-flex flex-column'>
            <div className='w-100' id="test">
              <Fade className='d-inline bg-light px-3 py-1 rounded-5 me-2 mb-2' cascade triggerOnce>
                {tags}
              </Fade>
            </div>

            <Fade triggerOnce cascade>
              <div className='w-100 mt-3 desc'>{project.desc}</div>
              <div className='w-100 mt-3 desc'>{project.more}</div>
            </Fade>

            <div className='w-100 mt-5'>
              <Fade delay={600} triggerOnce>
                <span>
                  <FormattedMessage id="projectRoleInfo" />
                </span>
                <span className='h3 bg-dark text-white txt'>{project.role}</span>
              </Fade>
            </div>

            <Fade triggerOnce delay={600}>
              <div className='d-flex flex-row my-5'>
                <a className='btn btn-dark px-4 d-flex flex-row align-items-center' href={project.link} target="_blank" rel="noreferrer">
                  <FaEye size={15} className="me-2" />
                  <span>
                    <FormattedMessage id="projectsPreviewButton" />
                  </span>
                </a>
                <a className='btn btn-outline-dark px-4 d-flex flex-row align-items-center ms-2' rel="noreferrer" href={project.repo} target="_blank" onClick={() => !project.repo && ToggleToast(true, 'Currently unavailable', false)}>
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
              <img src={project.img} id="proj-img" className='w-100 h-auto rounded-3 border shadow' alt="project-img" />
            </Fade>
          </div>
        </div>

        <div className='w-100 my-5'>
          <Fade triggerOnce>
            <div><h2 className='d-inline bg-dark text-white txt'>
              <FormattedMessage id="projectsShotsMsg" />
            </h2></div>
          </Fade>
          <div className='w-100 my-5 row m-0 p-0 g-4 d-flex flex-row align-items-center justify-content-between'>
            <Fade className='col-12 col-md-6 col-lg-6' cascade triggerOnce>{imgs}</Fade>
          </div>
        </div>
      </main>
    </div>
  );
}
