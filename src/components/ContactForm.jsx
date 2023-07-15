import { FormattedMessage } from 'react-intl';
import { FaPaperPlane } from 'react-icons/fa';
import { variables } from '../constants';
import { useModalData } from '../ModalContext';
import React from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [isLoading, setLoading] = React.useState(false);
  const [abort, setAbort] = React.useState(null);
  const { ToggleToast } = useModalData();
  const fullnameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  const HandleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const emailData = {
        from: emailRef.current.value,
        name: fullnameRef.current.value,
        message: messageRef.current.value
      }

      await axios.post('https://api.brevo.com/v3/smtp/email',
        {
          sender: {
            "name": 'inScript',
            "email": 'support@inscripconnect.space'
          },
          to: [
            {
              "email": "gokebello@gmail.com",
              "name": "Goke Bello"
            }
          ],
          subject: "Email From Personal Website",
          "htmlContent": JSON.stringify(emailData)
        },
        {
          headers: {
            'api-key': variables.MAIL_API_KEY,
            'accept': 'application/json',
            'content-type': 'application/json'
          },
          timeout: '10000',
          signal: abort
        }
      );
      setLoading(false);
      ToggleToast(true, "Message sent successfully", true);
      return event.target.reset();
    }
    catch (error) {
      ToggleToast(true, "Error sending email. Try again", false);
      return setLoading(false);
    }
  }

  React.useEffect(() => {
    const controller = new AbortController();
    setAbort(controller.signal);
    return () => controller.abort();
  }, []);

  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <form className='text-start my-5 d-flex flex-column' onSubmit={HandleSubmit}>
        <div className="form-floating mb-3 bg-light rounded-3">
          <input
            type="email"
            className="form-control bg-light border-0"
            id="floatingInput"
            ref={emailRef}
            required
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput" className="floatingTextarea2label">
            <FormattedMessage id="contactEmailLabel" />
          </label>
        </div>

        <div className="form-floating mb-3 rounded-3">
          <input
            type="text"
            className="form-control bg-light border-0"
            id="floatingPassword"
            ref={fullnameRef}
            required
            placeholder="Password"
          />
          <label htmlFor="floatingPassword" className="floatingTextarea2label">
            <FormattedMessage id="contactNameLabel" />
          </label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control bg-light border-0"
            placeholder="Leave a comment here"
            ref={messageRef}
            required
            id="floatingTextarea2"
          />
          <label htmlFor="floatingTextarea2" className="floatingTextarea2label">
            <FormattedMessage id="contactTextBoxLabel" />
          </label>
        </div>

        <button type="submit" className="btn btn-dark px-5 py-2 d-flex align-items-center align-self-center"
          disabled={isLoading && true}>
          {
            isLoading
              ?
              <div className="spinner-border" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                <span className="visually-hidden">
                  <FormattedMessage id="loadingMsg" />
                </span>
              </div>
              :
              <React.Fragment>
                <FaPaperPlane className='me-2' size={13} />
                <span>
                  <FormattedMessage id="sendMsg" />
                </span>
              </React.Fragment>
          }
        </button>
      </form>
    </div>
  )
}
