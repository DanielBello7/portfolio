import * as React from "react";
import ResumeTitle from './resume-title';
import Education from './education';
import Experience from './experience';
import SkillsTechnologies from './skills-technologies';
import ResumeDownload from './resume-download';

export default function Resume() {
  return (
    <div className='my-5 d-flex flex-column align-items-center'>
      <ResumeTitle />
      <Education />
      <Experience />
      <SkillsTechnologies />
      <ResumeDownload />
    </div>
  )
}

