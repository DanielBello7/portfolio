import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className='ms-0 ms-md-4 ms-lg-4 mb-5 mb-md-0 mb-lg-0 text-center text-md-start text-lg-start'>

      <div className='w-100 position-relative'>
        <motion.div
          id="small-box"
          className="zindex-dropdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, delay: 2 }}
        />

        <motion.h1 className='fw-bold zindex-tooltip' id="text1"
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "30%" }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span>
            <FormattedMessage id="landingTextTitle" />
          </span>
          <span className='bg-dark text-white'>
            <FormattedMessage id="landingTextTitleSub" />
          </span>.
        </motion.h1>
      </div>

      <motion.p className='w-100 w-md-75 w-lg-75 text-muted my-5 my-md-3 my-lg-3' id="text2"
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "20%" }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <FormattedMessage id="landingTextMsg" />
      </motion.p>


      <motion.div className='d-flex flex-row justify-content-center justify-content-md-start justify-content-lg-start'
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "20%" }}
        transition={{ duration: 1, delay: 3 }}
      >
        <a href="#contact" className='btn btn1'>
          <FormattedMessage id="landingTextContactButton" />
        </a>

        <a href="#work" className='btn ms-2 btn2'>
          <FormattedMessage id="landingTextWorkButton" />
        </a>
      </motion.div>
    </div>
  )
}

