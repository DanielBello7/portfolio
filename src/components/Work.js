


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaGithub } from 'react-icons/fa';
import { projects } from '../constants';

export function WorkExample({ id, title, tags, desc, img, repo, link }) {
  const navigate = useNavigate();
  
  const output = tags.map((tag, index) => <p className='tag' key={index}>{tag}</p>);

  const HandleNavigation = () => {
    return navigate(`/project/${id}`);
  }
  
  return (
  <div className='col-12 col-md-4 col-lg-4' id="project" onClick={HandleNavigation}>
    <div className='w-100' id="asset-img">
    <img src={img} 
         className="w-100 rounded-2 mb-2 h-100 asst-img" 
         alt="asset-img" 
         />
    </div>
    
    <h5 className='fw-bold txt my-2 w-100'>{title}</h5>
    
    <div className='d-flex flex-row flex-warp overflow-hidden'>
    {output.slice(0, 4)} 
    {output.length > 4 && <p className='tag'>+{output.length - 4}</p>}
    </div>
    
    <p className='text-muted example-text mb-3'>{desc}</p>

    <div className='mt-3 d-flex flex-row'>
    <button className='btn btn3'>
    <FaEye className='me-2'/>Preview
    </button>
    <button className='btn btn4 ms-2'>
    <FaGithub className='me-2'/>GitHub Repo
    </button>
    </div>
  </div>
  );
}

export function WorkIntro() {
  return (
  <div className='d-flex flex-column justify-content-center align-items-center'>
  <h3 className='h1 fw-bold txt resume'><a id="work" href='#!'>Work</a></h3>
  <p className='text-muted col-7 text-center' id="work-text">
  Check my commercial and non commercial projects. 
  If you have any questions feel free to ask me for more information.
  </p>
  </div>
  )
}

function Work() {
  
  const [selected, setSelected] = useState(projects);

  const tabs = ['All', 'React', 'Vue', 'Java'];

  const output = selected.map(project => (
    <WorkExample key={project.id} 
                 title={project.title} 
                 tags={project.tags} 
                 desc={project.desc} 
                 img={project.img} 
                 repo={project.repo} 
                 link={project.link}
                 id={project.id}
                 />
  ));

  const tabOutput = tabs.map((tab, index) => {
    const amount = projects.filter(project => project.tags.includes(tab));
    
    const HandleSelection = () => {
      if (tab === 'All') return setSelected(projects);
      const all = projects.filter(project => project.tags.includes(tab));
      return setSelected(all);
    }

    return <p className='tags' key={index} onClick={HandleSelection}>
           {tab} ({tab === 'All' ? projects.length : amount.length})
           </p>
  });

  return (
  <div className='d-flex flex-column my-5 align-items-center'>
  <WorkIntro />
  <div className='mt-5 mb-3 d-flex flex-row'>{tabOutput}</div>
  <div className='col-12 col-md-12 col-lg-9 my-4 d-flex flex-row flex-warp'>
  <div className='w-100 m-0 p-0 row g-5'>{output}</div>
  </div>
  </div>
  );
}

export default Work;