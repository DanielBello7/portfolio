import { FormattedMessage } from 'react-intl';
import { skills } from '@/constants';
import { container, item } from "./animation"
import { motion } from "framer-motion";

export default function SkillsTechnologies() {
  const skillsOutput = skills.map((skill, index) => (
    <motion.h5 variants={item} className='col-4' key={index}>
      {skill}
    </motion.h5>
  ));
  return (
    <div className='col-12 col-md-9 col-lg-9 my-5 text-center'>
      <motion.h3 className='h1 txt fw-bold bg-dark text-white d-inline'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <FormattedMessage id="resumeSub" />
      </motion.h3>

      <div className='mt-5 w-100 row gx-1 m-0 text-center'>
        <motion.div className='w-100 row col-4' initial="hidden" variants={container} whileInView="show"
          viewport={{ once: true }} exit="hidden">
          {skillsOutput}
        </motion.div>
      </div>
    </div>
  )
}

