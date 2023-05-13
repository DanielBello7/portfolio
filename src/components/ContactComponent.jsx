import { FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { useModalData } from '../ModalContext';
import React from 'react';
import SendMail from '../SendMail';

function Contact() {
    const [isLoading, setLoading] = React.useState(false);;
    const { ToggleToast } = useModalData();
    const fullnameRef = React.useRef();
    const emailRef = React.useRef();
    const messageRef = React.useRef();

    const HandleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const data = {
                email: emailRef.current.value,
                fullname: fullnameRef.current.value,
                message: messageRef.current.value
            }

            const res = await SendMail(data.fullname, data.message, data.email);

            setLoading(false);
            ToggleToast(true, "Message sent successfully", true);
            return event.target.reset();
        }
        catch (error) {
            HandleShow(true, "Error sending email. Try again", false);
            return setLoading(false);
        }
    }

    return (
        <Fade triggerOnce delay={500}>
            <div className='text-center mb-5 d-flex flex-column align-items-center'>

                <div className='col-12 col-md-8 col-lg-8'>
                    <h1 className='fw-bold resume txt'>
                        <a id="contact" href='#!' className='text-decoration-none text-dark'>Contact</a>
                    </h1>

                    <p className='m-0 p-0 text-muted bt-txt'>Reach out to me.</p>
                    <p className='m-0 p-0 text-muted bt-txt'>
                        Let me know if
                        you are interested in my services
                        or collaboration.
                    </p>
                    <p className='m-0 p-0 text-muted bt-txt'>I will reply as soon as possible.</p>
                </div>

                <div className='w-100 d-flex flex-column flex-md-row flex-lg-row'>
                    <div className='col-0 col-md-3 col-lg-4'></div>

                    <div className='col-12 col-md-6 col-lg-4'>
                        <form className='text-start my-5 d-flex flex-column' onSubmit={HandleSubmit}>
                            <div className="form-floating mb-3 bg-light rounded-3">
                                <input type="email"
                                    className="form-control bg-light border-0"
                                    id="floatingInput"
                                    ref={emailRef}
                                    required
                                    placeholder="name@example.com" />
                                <label htmlFor="floatingInput" className="floatingTextarea2label">Enter your email address</label>
                            </div>

                            <div className="form-floating mb-3 rounded-3">
                                <input type="text"
                                    className="form-control bg-light border-0"
                                    id="floatingPassword"
                                    ref={fullnameRef}
                                    required
                                    placeholder="Password" />
                                <label htmlFor="floatingPassword" className="floatingTextarea2label">Enter your full name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className="form-control bg-light border-0"
                                    placeholder="Leave a comment here"
                                    ref={messageRef}
                                    required
                                    id="floatingTextarea2" />
                                <label htmlFor="floatingTextarea2" className="floatingTextarea2label">Tell me</label>
                            </div>

                            <button type="submit" className="btn btn-dark px-5 py-2 d-flex align-items-center align-self-center"
                                disabled={isLoading && true}>
                                {
                                    isLoading
                                        ?
                                        <div className="spinner-border" style={{ width: '1.5rem', height: '1.5rem' }} role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        :
                                        <React.Fragment>
                                            <FaPaperPlane className='me-2' size={13} />
                                            <span>Send</span>
                                        </React.Fragment>
                                }
                            </button>
                        </form>
                    </div>

                    <div className='col-12 col-md-3 col-lg-4 d-flex flex-column align-items-center justify-content-center p-1 overflow-hidden'>
                        <h4 className='fw-bold bg-dark text-white'>Let's Talk</h4>
                        <h5 id="my-email">
                            gokebello@gmail.com <FaArrowRight size={15} />
                        </h5>
                    </div>

                </div>
            </div>
        </Fade>
    );
}

export default Contact;