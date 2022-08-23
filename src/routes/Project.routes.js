


import React, { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import { FaEye, FaGithub } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { Toast } from 'bootstrap';
import EmptyProject from '../components/EmptyProject';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToastComponent2 from '../components/ToastComponent2';

function Project() {
  const params = useParams();

  const [toast, setToast] = useState({type: false, msg: ""});
  
  const [project, setProject] = useState(null);

  const HandleShow = (text, type) => {
    const element = document.getElementById("liveToast2");
    const myToast = Toast.getOrCreateInstance(element, {animation: true});
    setToast({msg: text, type: type});
    return myToast.show();
  }

  const tags = project?.tags.map((tag, index) => {
    return <span className='d-inline bg-light rounded-5' 
                 key={index}>{tag}</span>
  });

  const imgs = project?.imgs?.map((img, index) => (
    <div className='col-12 col-md-12 col-lg-12' key={index}>
    <img src={img} className="more-img shadow rounded-3 border" alt="short-imgs"/>
    </div>
  ));

  useLayoutEffect(() => {
    window.scrollTo({top: 0});
    const selectedProject = parseInt(params.projectID);
    const result = projects.find(item => item.id === selectedProject);
    if (!result) return setProject(null);
    setProject(result);
  }, [params.projectID]);

  if (!project) return <EmptyProject />

  return (
  <React.Fragment>
  <div className='container-xl w-100 d-flex flex-column align-items-center'>
  <Header />
  <main className='col-12 col-md-10 col-lg-10 my-5 d-flex flex-column'>  
  <Fade triggerOnce>
  <h1 className='title align-self-start'>{project.title}</h1>
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
      <span>Role:</span> <span className='h3 bg-dark text-white txt'>{project.role}</span>
      </Fade>
      </div>

      <Fade triggerOnce delay={600}>
      <div className='d-flex flex-row my-5'>
      <a className='btn btn-dark px-4 d-flex flex-row align-items-center' href={project.link} target="_blank">
      <FaEye size={15} className="me-2"/>
      <span>Preview</span>
      </a>
      <a className='btn btn-outline-dark px-4 d-flex flex-row align-items-center ms-2' href={project.repo} target="_blank" onClick={() => !project.repo && HandleShow('Currently unavailable', false)}>
      <FaGithub size={15} className="me-2"/>
      <span>Github Repo</span>
      </a>
      </div>
      </Fade>
    </div>
    
    <div className='col-12 col-md-12 col-lg-8 d-flex flex-row justify-content-center justify-content-end-lg'>
    <Fade className='col-12 col-md-12 col-lg-12 d-flex flex-row ms-5' triggerOnce>
    <img src={project.img} id="proj-img" className='w-100 h-auto rounded-3 border shadow' alt="project-img"/>
    </Fade>
    </div>
  </div>

  <div className='w-100 my-5'>
  <Fade triggerOnce>
  <div><h2 className='d-inline bg-dark text-white txt'>More Shots</h2></div>
  </Fade>
  <div className='w-100 my-5 row m-0 p-0 g-4 d-flex flex-row align-items-center justify-content-between'>
  <Fade className='col-12 col-md-6 col-lg-6' cascade triggerOnce>{imgs}</Fade>
  </div>
  </div>
  </main>

  <div className='w-100' id="bottom-footer"><Footer /></div>
  </div>
  <ToastComponent2 response={toast.msg} type={toast.type} />
  </React.Fragment>
  );
}

export default Project;