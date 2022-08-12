


import { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import { FaEye, FaGithub } from 'react-icons/fa';
import EmptyProject from '../components/EmptyProject';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Project() {
  const params = useParams();
  
  const [project, setProject] = useState(null);

  const tags = project?.tags.map((tag, index) => {
    return <span className='d-inline bg-light px-3 py-1 rounded-5 me-2 mb-2' 
                 key={index}>{tag}</span>
  });

  const imgs = project?.imgs?.map((img, index) => (
    <div className='col-3' key={index}>
    <img src={img} className="more-img"/>
    </div>
  ));

  useLayoutEffect(() => {
    const selectedProject = parseInt(params.projectID);
    const result = projects.find(item => item.id === selectedProject);
    if (!result) return setProject(null);
    setProject(result);
  }, [params.projectID]);

  if (!project) return <EmptyProject />

  return (
  <div className='container-xl w-100 d-flex flex-column align-items-center'>
  <Header />
  <main className='col-10 my-5 d-flex flex-column'>  
  <h1 className='title align-self-start'>{project.title}</h1>

  <div className='w-100 d-flex my-5'>
  <div className='col-4 d-flex flex-column'>
      <div className='w-100' id="test">{tags}</div>
      <div className='w-100 mt-3 desc'>{project.desc}</div>
      <div className='w-100 mt-3 desc'>{project.more}</div>

      <div className='w-100 mt-5'>
      Role: <span className='h3 bg-dark text-white txt'>{project.role}</span>
      </div>

      <div className='d-flex flex-row my-5'>
      <button className='btn btn-dark px-4 d-flex flex-row align-items-center'>
      <FaEye size={15} className="me-2"/>
      <span>Preview</span>
      </button>
      <button className='btn btn-outline-dark px-4 d-flex flex-row align-items-center ms-2'>
      <FaGithub size={15} className="me-2"/>
      <span>Github Repo</span>
      </button>
      </div>
    </div>
    
    <div className='col-8 d-flex flex-row align-items-end justify-content-end'>
    <img src={project.img} id="proj-img" className='rounded-3'/>
    </div>
  </div>

  <div className='w-100 my-5'>
  <div><h2 className='d-inline bg-dark text-white txt'>More Shots</h2></div>
  <div className='w-100 my-5 row m-0 p-0 g-4 d-flex flex-row align-items-center justify-content-between'>{imgs}</div>
  </div>
  </main>
  <div className='w-100' id="bottom-footer">
  <Footer />
  </div>
  </div>
  )
}

export default Project;