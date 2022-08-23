


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaGithub } from 'react-icons/fa';
import { projects } from '../constants';
import { Fade } from 'react-awesome-reveal';
import { tabs } from '../constants';

export function WorkExample({ id, title, tags, desc, img, repo, link }) {
  const navigate = useNavigate();
  
  const output = tags.map((tag, index) => <p className='tag' key={index}>{tag}</p>);

  const HandleNavigation = () => {
    return navigate(`/project/${id}`);
  }
  
  return (
  <div className='col-12 col-md-12 col-lg-12' id="project" onClick={HandleNavigation}>
    <div className='w-100' id="asset-img">
    <img src={img} 
         className="w-100 border border-2 rounded-4 mb-2 h-100 asst-img" 
         alt="asset-img" 
         />
    </div>
    
    <h5 className='fw-bold txt my-2 w-100'>{title}</h5>
    
    <div className='d-flex flex-row flex-warp overflow-hidden'>
    {output.slice(0, 3)} 
    {output.length > 3 && <p className='tag'>+{output.length - 3}</p>}
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
  
  const [selected, setSelected] = useState(projects);

  const [active, setActive] = useState('All');

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
      setActive(tab);
      if (tab === 'All') return setSelected(projects);
      const all = projects.filter(project => project.tags.includes(tab));
      return setSelected(all);
    }

    return <p className={`${active === tab && 'bg-dark bg-opacity-75 text-white'} tags mb-2 mb-md-0 mb-lg-0 `} 
              key={index} onClick={HandleSelection}>
           {tab} ({tab === 'All' ? projects.length : amount.length})
           </p>
  });

  return (
  <div className='d-flex flex-column my-5 align-items-center'>
  <WorkIntro />
  <div className='mt-5 mb-3 d-flex flex-row overflow-hidden flex-warp align-items-center justify-content-center' id="tabsLine">
  <Fade triggerOnce cascade duration={500}>{tabOutput}</Fade>
  </div>
  <div className='col-12 col-md-12 col-lg-9 my-4 d-flex flex-row flex-warp'>
  <div className='w-100 m-0 p-0 row g-5'>
  <Fade direction='up' cascade triggerOnce duration={1000} className="col-12 col-md-4 col-lg-4">
  {output}
  </Fade>
  </div>
  </div>
  </div>
  );
}

export default Work;