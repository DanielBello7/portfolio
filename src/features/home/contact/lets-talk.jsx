import { FormattedMessage } from 'react-intl';
import { FaArrowRight } from 'react-icons/fa';

export default function LetsTalk() {
  return (
    <div className='col-12 col-md-3 col-lg-4 d-flex flex-column align-items-center justify-content-center p-1 overflow-hidden'>
      <h4 className='fw-bold bg-dark text-white'>
        <FormattedMessage id="contactSubTitleMsg" />
      </h4>
      <a href="mailto:gokebello@gmail.com" id="my-email" className='text-decoration-none'>
        <span className='me-1'>
          <FormattedMessage id="contactEmailAddress" />
        </span>
        <FaArrowRight size={15} />
      </a>
    </div>
  )
}

