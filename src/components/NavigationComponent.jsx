import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';

export default function NavigationComponent() {
  return (
    <div className="d-flex flex-row my-3 my-md-0 my-lg-0">
      <Fade
        direction={"down"}
        duration={500}
        triggerOnce
        cascade
        reverse={false}
      >
        <a href="#work" className='btn txts'>
          <FormattedMessage id="workNavigationTitle" />
        </a>
        <a href="/home/#resume" className='btn ms-lg-5 txts'>
          <FormattedMessage id="workNavigationResumeButton" />
        </a>
        <a href="#contact" className='btn ms-lg-5 txts'>
          <FormattedMessage id="workNavigationContactButton" />
        </a>
      </Fade>
    </div>
  )
}
