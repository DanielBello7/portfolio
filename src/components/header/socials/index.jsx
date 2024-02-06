import * as React from 'react';
import { socials_items } from "./social-items";
import { container, item } from "./animation";
import { motion } from 'framer-motion';

export default function Socials() {
  return (
    <motion.div className="d-flex flex-row" variants={container} initial="hidden"
      animate="show" exit="hidden">
      {socials_items.map((social, idx) => (
        <motion.a href={social.href} rel="noreferrer" target="_blank" className='text-dark' key={idx}
          variants={item}>
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  )
}

