import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import * as React from "react";
import { motion } from 'framer-motion';

// export default function Logo() {
//   return (
//     <div>
//       <Link to="/" className='text-decoration-none text-dark'>
//         <h3 id='logo' className="p-0 m-0 fw-bold">
//           <FormattedMessage id="logo" />
//         </h3>
//       </Link>
//     </div>
//   );
// }

export default function Logo() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} exit={{ opacity: 0 }}>
      <Link to="/" className='text-decoration-none text-dark'>
        <h3 id='logo' className="p-0 m-0 fw-bold">
          <FormattedMessage id="logo" />
        </h3>
      </Link>
    </motion.div>
  );
}
