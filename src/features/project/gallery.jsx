import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import * as React from 'react';

export default function Gallery(props) {
  const { project } = props;

  const imgs = project.imgs?.map((img, index) => (
    <div className='col-12 col-md-12 col-lg-12' key={index}>
      <img src={img} className="more-img shadow rounded-3 border" alt="short-imgs" />
    </div>
  ));

  return (
    <div className='w-100 my-5'>
      <Fade triggerOnce>
        <div>
          <h2 className='d-inline bg-dark text-white txt'>
            <FormattedMessage id="projectsShotsMsg" />
          </h2>
        </div>
      </Fade>
      <div className='w-100 my-5 row m-0 p-0 g-4 d-flex flex-row align-items-center justify-content-between'>
        <Fade className='col-12 col-md-6 col-lg-6' cascade triggerOnce>{imgs}</Fade>
      </div>
    </div>
  )
}

