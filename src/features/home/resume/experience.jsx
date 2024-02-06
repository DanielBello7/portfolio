import { FormattedMessage } from 'react-intl';
import { experience } from '@/constants';
import { motion } from 'framer-motion';
import WorkExperience from './work-experience';
import * as React from "react";
import { container } from "./animation";

export default function Experience() {
  const output = experience.map((item, index) => {
    return <WorkExperience {...item} key={index} />
  });

  return (
    <div className='col-12 col-md-12 col-lg-9 my-5 text-center'>
      <motion.h3 className='h1 txt fw-bold bg-dark text-white d-inline' initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <FormattedMessage id="resumeExperience" />
      </motion.h3>
      <div className='mt-3 w-100 row gx-2 m-0 justify-content-between'>
        <motion.div className='row w-100 col-12 col-md-4 col-lg-4' variants={container}
          initial="hidden" whileInView="show" viewport={{ once: true }} exit="hidden">
          {output}
        </motion.div>
      </div>
    </div >
  )
}

