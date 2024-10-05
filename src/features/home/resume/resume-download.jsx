import { FormattedMessage } from 'react-intl';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ResumeDownload() {
  return (
    <motion.div className="col-9 my-5 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ delay: 0.8 }}>
      <p>
        <FormattedMessage id="resumeInfo" />
      </p>
      <a href="/DanielBelloCV.pdf" download="Resume.pdf" className='btn btn-dark px-4'>
        <FaDownload className='me-2' />
        <span>
          <FormattedMessage id="resumeDownload" />
        </span>
      </a>
    </motion.div>
  )
}
