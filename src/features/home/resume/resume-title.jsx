import { FormattedMessage } from 'react-intl';
import { motion } from "framer-motion";

export default function ResumeTitle() {
  return (
    <div className='col-12 col-md-7 col-lg-7 text-center mb-5'>
      <div className='w-100 position-relative'>
        <h3 className='h1 txt fw-bold resume'>
          <motion.a id="resume" href='#!' className='text-decoration-none text-dark'
            initial={{ opacity: 0, y: "20%" }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: "0%" }}>
            <FormattedMessage id="resumeTitle" />
          </motion.a>
        </h3>
      </div>

      <motion.p className='text-center text-muted' id="resume-text"
        initial={{ opacity: 0, y: "20%" }} viewport={{ once: true }}
        whileInView={{ opacity: 1, y: "0%" }}>
        <FormattedMessage id="resumeMsg" />
      </motion.p>
    </div>
  )
}

