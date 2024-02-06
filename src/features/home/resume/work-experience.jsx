import { motion } from "framer-motion";
import { item } from "./animation";

export default function WorkExperience(props) {
  const {
    title,
    location,
    period
  } = props;

  return (
    <motion.div className='col-12 col-md-3 col-lg-4' variants={item}>
      <h5 className='fw-bold txt h4 mt-5'>{title}</h5>
      <h5 className='txt h4'>{location}</h5>
      <h5 className='txt h5'>{period}</h5>
    </motion.div>
  )
}
