


import { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants';
import EmptyProject from '../components/EmptyProject';

function Project() {
  const params = useParams();
  
  const [project, setProject] = useState();

  useLayoutEffect(() => {
    const selectedProject = parseInt(params.projectID);
    const result = projects.find(item => item.id === selectedProject);
    if (!result) return setProject(null);
    setProject(result);
  }, [params.projectID]);

  if (!project) return <EmptyProject />

  return (
  <div className='container-xl w-100 border'>
  Project
  </div>
  )
}

export default Project;