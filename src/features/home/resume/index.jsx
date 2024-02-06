import * as React from "react";
import ResumeTitle from './resume-title';
import Eduction from './education';
import Experience from './experience';
import SkillsTechnologies from './skills-technologies';
import ResumeDownload from './resume-download';

export default function Resume() {
  return (
    <div className='my-5 d-flex flex-column align-items-center'>
      <ResumeTitle />
      <Eduction />
      <Experience />
      <SkillsTechnologies />
      <ResumeDownload />
    </div>
  )
}

