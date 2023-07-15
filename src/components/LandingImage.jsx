import { assets } from '../constants';
import { Fade } from 'react-awesome-reveal';

export default function LandingImage() {
  return (
    <div id="landing-image" className='w-100 position-relative' style={{ height: '350px' }}>
      <Fade triggerOnce duration={1000} delay={2000}>
        <img
          src={assets.user_img4}
          id="img"
          className='w-100 h-100 rounded-3'
          style={{ objectFit: 'cover' }}
          alt='user-img'
        />
      </Fade>
    </div >
  )
}
