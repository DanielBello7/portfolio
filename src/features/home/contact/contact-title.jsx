import { FormattedMessage } from 'react-intl';

export default function ContactTitle() {
  return (
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
  )
}


