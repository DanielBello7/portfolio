


import { FaPaperPlane, FaArrowRight } from 'react-icons/fa';

function Contact() {
  return (
  <div className='text-center mb-5 d-flex flex-column align-items-center'>
    <div className='col-8'>
    <h1 className='fw-bold resume txt'>Contact</h1>

    <p className='m-0 p-0 text-muted bt-txt'>React out to me.</p>
    <p className='m-0 p-0 text-muted bt-txt'>
    Let me know if 
    you are interested in my services 
    or collaboration.
    </p>
    <p className='m-0 p-0 text-muted bt-txt'>I will reply as soon as possible.</p>
    </div>

    <div className='w-100 d-flex flex-row'>
    <div className='col-4'></div>

    <div className='col-4'>
      <form className='text-start my-5 d-flex flex-column'>
      <div class="form-floating mb-3 bg-light rounded-3">
      <input type="email" class="form-control bg-light border-0" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput" className="floatingTextarea2label">Enter your email address</label>
      </div>

      <div class="form-floating mb-3 rounded-3">
      <input type="password" class="form-control bg-light border-0" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword" className="floatingTextarea2label">Enter your full name</label>
      </div>

      <div class="form-floating mb-3">
      <textarea className="form-control bg-light border-0" placeholder="Leave a comment here" id="floatingTextarea2" />
      <label for="floatingTextarea2" className="floatingTextarea2label">Tell me</label>
      </div>

      <button type="submit" className="btn btn-dark px-5 d-flex align-items-center align-self-center">
      <FaPaperPlane className='me-2' size={13}/>
      <span>Send</span>
      </button>
      </form>
    </div>

    <div className='col-4 d-flex flex-column align-items-center justify-content-center'>

      <h4 className='fw-bold bg-dark text-white'>Let's Talk</h4>
      <h5 id="my-email">
      gokebello@gmail.com <FaArrowRight size={15}/>
      </h5>
    </div>
    </div>

    
  </div>
  )
}

export default Contact;