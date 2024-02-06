import { FormattedMessage } from 'react-intl';
import { FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import ContactForm from './contact-form';

export default function Contact() {
  return (
    <Fade triggerOnce delay={500}>
      <div className='text-center mb-5 d-flex flex-column align-items-center'>
        <div className='col-12 col-md-8 col-lg-8'>
          <h1 className='fw-bold resume txt'>
            <a id="contact" href='#!' className='text-decoration-none text-dark'>
              <FormattedMessage id="contactHead" />
            </a>
          </h1>

          <p className='m-0 p-0 text-muted bt-txt'>
            <FormattedMessage id="contactTitle" />
          </p>
          <p className='m-0 p-0 text-muted bt-txt'>
            <FormattedMessage id="contactMsg" />
          </p>
          <p className='m-0 p-0 text-muted bt-txt'>
            <FormattedMessage id="contactSubMsg" />
          </p>
        </div>

        <div className='w-100 d-flex flex-column flex-md-row flex-lg-row'>
          <div className='col-0 col-md-3 col-lg-4' />

          <ContactForm />

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
        </div>
      </div>
    </Fade>
  );
}

