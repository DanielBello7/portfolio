


import { experience } from '../constants';
import { FaDownload } from 'react-icons/fa';


function WorkExperience({ title, location, period }) {
  return (
  <div className='col-4'>
  <h5 className='fw-bold txt h4 mt-5'>{title}</h5>
  <h5 className='txt h4'>{location}</h5>
  <h5 className='txt h5'>{period}</h5>
  </div>
  )
}

function Resume() {
  const skills = [
    'HTML & CSS',
    'Javascript',
    'Typescript',
    'C#',
    'NodeJS',
    'Express',
    'React',
    'React Native',
  ];
  
  const output = experience.map((item, index) => {
    return <WorkExperience key={index} 
                           title={item.title} 
                           location={item.location} 
                           period={item.period}/>
  });

  const skillsOutput = skills.map((skill, index) => (
    <h5 className='col-4' key={index}>{skill}</h5>
  ));

  return (
  <div className='my-5 d-flex flex-column align-items-center'>
    <div className='col-7 text-center mb-5'>
    <h3 className='h1 txt fw-bold resume'>Resume</h3>
    <p className='text-center text-muted' id="resume-text">
    My journey so far as a software engineer, 
    specializing in full-stack software development 
    started 6 years ago when i enroled in a c++ course 
    in school. Whithin the following year i continued 
    and developed my skills in web development
    </p>
    </div>

    <div className='col-5 my-5 text-center'>
    <h3 className='h1 txt fw-bold bg-dark text-white d-inline'>Education</h3>
    <h5 className='fw-bold txt h4 mt-5'>B.Eng Computer Engineering</h5>
    <h5 className='txt h4'>Ekiti State University</h5>
    <h5 className='txt h5'>2015 - 2019</h5>
    </div>

    <div className='col-9 my-5 text-center'>
    <h3 className='h1 txt fw-bold bg-dark text-white d-inline'>Work Experience</h3>
    <div className='mt-3 w-100 row gx-4 m-0 justify-content-between'>{output}</div>
    </div>

    <div className='col-9 my-5 text-center'>
    <h3 className='h1 txt fw-bold bg-dark text-white d-inline'>Skills and Tools</h3>
    <div className='mt-5 w-100 row gx-4 m-0 text-start'>
    {skillsOutput}
    </div>
    </div>

    <div className='col-9 my-5 text-center'>
    <p>Download my resume as a PDF file</p>
    <button className='btn btn-dark px-4'>
    <FaDownload className='me-2'/>
    <span>Download (3MB)</span>
    </button>
    </div>
  </div>
  )
}

export default Resume;