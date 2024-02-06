import { motion } from "framer-motion";
import ContactForm from './contact-form';
import LetsTalk from './lets-talk';
import ContactTitle from './contact-title';

export default function Contact() {
  return (
    <motion.div className='text-center mb-5 d-flex flex-column align-items-center'
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
      viewport={{ once: true }}>
      <ContactTitle />

      <div className='w-100 d-flex flex-column flex-md-row flex-lg-row'>
        <div className='col-0 col-md-3 col-lg-4' />
        <ContactForm />
        <LetsTalk />
      </div>
    </motion.div>
  );
}

