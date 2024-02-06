import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import * as React from "react";

export default function Logo(props) {
  const { reverse } = props;
  return (
    <Fade duration={1000} triggerOnce reverse={reverse}>
      <Link to="/" className='text-decoration-none text-dark'>
        <h3 id='logo' className="p-0 m-0 fw-bold">
          <FormattedMessage id="logo" />
        </h3>
      </Link>
    </Fade>
  );
}
