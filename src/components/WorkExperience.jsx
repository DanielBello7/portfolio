import React from 'react';

export default function WorkExperience({ title, location, period }) {
  return (
    <div className='col-12 col-md-12 col-lg-12'>
      <h5 className='fw-bold txt h4 mt-5'>{title}</h5>
      <h5 className='txt h4'>{location}</h5>
      <h5 className='txt h5'>{period}</h5>
    </div>
  )
}
