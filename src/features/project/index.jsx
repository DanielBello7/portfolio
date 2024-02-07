import { useParams } from 'react-router-dom';
import { projects } from '@/constants';
import { motion } from 'framer-motion';
import EmptyProject from "./empty-project";
import Title from './title';
import Body from './body';
import Gallery from './gallery';
import * as React from 'react';

export default function Project() {
  const [project, setProject] = React.useState(null);
  const { projectId } = useParams();

  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const result = projects.find(item => item.id === projectId);
    if (!result) return setProject(null);
    setProject(result);
  }, [projectId]);

  if (!project) return <EmptyProject />
  return (
    <motion.div className='container-xl w-100 d-flex flex-column align-items-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <main className='col-12 col-md-10 col-lg-10 my-5 d-flex flex-column'>
        <Title title={project.title} />
        <Body project={project} />
        <Gallery project={project} />
      </main>
    </motion.div>
  );
}
