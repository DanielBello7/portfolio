import { tabs } from '@/constants';
import { Fade } from 'react-awesome-reveal';
import Tab from "./tab";
import * as React from "react";

export default function ProjectsTab() {
  const tabOutput = tabs.map((tab, index) => {
    <Tab {...tab} key={index} />
  });

  return (
    <div className='mt-5 mb-3 d-flex flex-row overflow-hidden flex-warp align-items-center justify-content-center' id="tabsLine">
      <Fade triggerOnce cascade duration={500}>
        {tabOutput}
      </Fade>
    </div>
  )
}

