import { FormattedMessage } from 'react-intl';
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className='container-xl w-100 p-2 d-flex flex-row justify-content-between align-items-center bg-light'>
      <Logo />
      <p className='p-0 m-0 text-muted'>
        <span>
          <FormattedMessage id="footerTitle" />
        </span>
        <span className='ms-1 text-dark fw-bold' style={{ letterSpacing: "-1.4px" }}>
          <FormattedMessage id="footerSub" />
        </span>
      </p>
    </footer>
  )
}
