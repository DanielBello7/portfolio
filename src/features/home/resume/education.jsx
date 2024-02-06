import { FormattedMessage } from 'react-intl';
import { assets } from '@/constants';
import { motion } from 'framer-motion';

export default function Eduction() {
  return (
    <div className='w-100 d-flex flex-column flex-md-row flex-lg-row'>
      <div className='col-0 col-md-4 col-lg-4' />

      <div className='col-12 col-md-4 col-lg-4'>
        <motion.div className='my-5 text-center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <h3 className='h1 txt fw-bold bg-dark text-white d-inline'>
            <FormattedMessage id="resumeType" />
          </h3>
          <h5 className='fw-bold txt h4 mt-5'>
            <FormattedMessage id="resumeResult" />
          </h5>
          <h5 className='txt h4'>
            <FormattedMessage id="resumeLocation" />
          </h5>
          <h5 className='txt h5'>
            <FormattedMessage id="resumePeriod" />
          </h5>
        </motion.div>
      </div>

      <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
        <motion.div id="center-img" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }} viewport={{ once: true }}>
          <img
            src={assets.user_img1}
            id="user-img"
            alt="user-img"
          />
        </motion.div>
      </div>
    </div>
  )
}


