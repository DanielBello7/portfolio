import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';

export default function ProjectsIntro() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <motion.h3 className='h1 fw-bold txt resume'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <a id="work" href='#!' className='text-decoration-none text-dark'>
          <FormattedMessage id="workIntroTitle" />
        </a>
      </motion.h3>

      <motion.p className='text-muted col-12 col-md-7 col-lg-7 text-center' id="work-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <FormattedMessage id="workIntroMsg" />
      </motion.p>
    </div>
  )
}
