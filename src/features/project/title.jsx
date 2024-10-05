import { motion } from "framer-motion";

export default function Title(props) {
  const { title } = props;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1 className='title2 d-block d-md-none d-lg-none align-self-start'>
        {title}
      </h1>
      <h1 className='title d-none d-md-block d-lg-block align-self-start'>
        {title}
      </h1>
    </motion.div>
  )
}

