import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';
import { container, item } from "./animation";
import * as React from 'react';

export default function Gallery(props) {
  const { project } = props;

  const imgs = project.imgs?.map((img, index) => (
    <motion.div className='col-12 col-md-12 col-lg-6 mb-4' key={index}
      variants={item}>
      <img src={img} className="more-img shadow rounded-3 border" alt="short-imgs" />
    </motion.div>
  ));

  return (
    <div className='w-100 my-5'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className='d-inline bg-dark text-white txt'>
          <FormattedMessage id="projectsShotsMsg" />
        </h2>
      </motion.div>

      <div className='w-100 my-5 row m-0 p-0 g-4 d-flex flex-row align-items-center justify-content-between'>
        <motion.div className='w-100 row col-12 col-md-6 col-lg-6' initial="hidden" whileInView="show"
          exit="hidden" variants={container} viewport={{ once: true }}>
          {imgs}
        </motion.div>
      </div>
    </div>
  )
}

