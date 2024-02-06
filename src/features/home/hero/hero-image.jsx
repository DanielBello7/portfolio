import { motion } from 'framer-motion';
import { assets } from '@/constants';

export default function HeroImage() {
  return (
    <motion.div id="landing-image" className='w-100 position-relative' style={{ height: '350px' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.9 }}>
      <img
        src={assets.user_img4}
        id="img"
        className='w-100 h-100 rounded-3'
        style={{ objectFit: 'cover' }}
        alt='daniel-bello'
      />
    </motion.div>
  )
}

